import json
import re
from contextlib import closing

from bs4 import BeautifulSoup
from requests import get
from requests.exceptions import RequestException


def simple_get(url):
    # Method from guide
    try:
        with closing(get(url, stream=True)) as resp:
            if is_good_response(resp):
                return resp.content
            else:
                return None

    except RequestException:
        return None


def is_good_response(resp):
    content_type = resp.headers['Content-Type'].lower()
    return (resp.status_code == 200
            and content_type is not None
            and content_type.find('html') > -1)


def gimme_dat_info(ceq_url):
    ceq = simple_get(ceq_url)
    if ceq is None:
        return
    html = BeautifulSoup(ceq, 'html.parser')

    result = {}
    for i, tag in enumerate(html.findAll()):
        if tag.string is None:
            continue
        text = tag.get_text().strip()
        # print(i, text)
        if i == 6:
            result['code'] = text[-6:]
        if i == 14:
            result['name'] = text
        if i == 22:
            result['points'] = text
        if i == 25:
            result['year'] = text[2:4] + "/" + text[4:6]
        if i == 34:
            result['registered'] = text
        if i == 37:
            result['percentPassed'] = text[text.find("/") + 1:].replace(" ", "")
        if i == 104:
            result['teachingScore'] = text
        if i == 108:
            result['goalClearnessScore'] = text
        if i == 112:
            result['assessmentScore'] = text
        if i == 116:
            result['workloadScore'] = text
        if i == 125:
            result['importanceScore'] = text
        if i == 129:
            result['satisfactionScore'] = text

    comments = ""
    for i, line in enumerate(html.get_text().split('\n')):
        # print(i, line)
        if i > 99:
            comments += line.strip()

    if not comments.isspace():
        result['comments'] = comments

    return result


def get_all_hrefs():
    urlbois = []

    programs = ["C", "D"]
    lps = range(66, 150)
    for p in programs:
        for lp in lps:
            raw_html = simple_get("http://www.ceq.lth.se/rapporter/?lasar_lp=" + str(lp) + "&program=" + p)
            soup = BeautifulSoup(raw_html, 'html.parser')
            for a in soup.find_all('a', href=True):
                if "slutrapport.html" in a['href']:
                    urlbois.append(a['href'])

    print(urlbois)
    return urlbois


def current_course_codes(start_year, save):
    year = str(start_year) + "_" + str(start_year + 1)
    programs = ["C", "D"]
    result = {}

    for prog in programs:
        courses = simple_get("https://kurser.lth.se/lot/?val=program&prog=" + prog + "&lang=sv&lasar=" + year)
        html = BeautifulSoup(courses, 'html.parser')
        current_key = "default"
        result[prog] = {}
        for i, tag in enumerate(html.findAll()):
            if tag.string is None:
                continue
            if tag.name == 'a' and tag.parent.name != 'td':
                continue

            text = tag.get_text().strip()
            # print(i, text)

            if "Årskurs" in text or "Specialisering" in text:
                current_key = text
                result[prog][current_key] = []

            if re.search('[a-zA-Z]{4}[0-9]{2}', text) is not None:
                if len(text) == 6:
                    result[prog][current_key].append(text)
            if re.search('[a-zA-Z]{3}[0-9]{3}', text) is not None:
                if len(text) == 6:
                    result[prog][current_key].append(text)
    if save:
        f = open("./data/courses" + str(start_year) + ".json", "w")
        f.write(json.dumps(result))
    return result


current_course_codes(15, True)


def get_url_by_course_code(code, start_year):
    year = str(start_year) + str(int(start_year) + 1)
    url = "http://www.ceq.lth.se/rapporter/?lasar_lp=" + year + "&program=alla&kurskod=" + code
    raw_html = simple_get(url)
    soup = BeautifulSoup(raw_html, 'html.parser')
    print("Looking at " + str(url) + " for links")
    urlbois = []
    goodbois = []
    for a in soup.find_all('a'):
        if "slutrapport.html" in a['href']:
            urlbois.append(a['href'])

    if len(urlbois) == 0:
        new_url = "http://www.ceq.lth.se/rapporter/?lasar_lp=" + year + "&program=samtliga&kurskod=" + code
        new_html = simple_get(new_url)
        new_soup = BeautifulSoup(new_html, 'html.parser')
        print("first failed, looking at " + str(url) + " for more links")
        for a in new_soup.find_all('a'):
            if "slutrapport.html" in a['href']:
                urlbois.append(a['href'])
    for url in urlbois:
        if code in url:
            goodbois.append(url)
    return goodbois  # Finds garbage when course is not found


def find_and_save_all_data(start_year):
    courses = current_course_codes(start_year, False)
    save = {}
    for program, data in courses.items():
        save[program] = {}
        for year, codes in data.items():
            save[program][year] = []
            for code in codes:
                print("getting " + code, start_year, program)
                url = get_url_by_course_code(code, start_year)
                print("url is " + str(url))
                if len(url) > 0: #sometimes there are more than 1 LP
                    save[program][year].append(gimme_dat_info(url[0]))
    f = open("./data/course_data" + str(start_year) + ".json", "w")
    f.write(json.dumps(save))

'''
find_and_save_all_data(17)  # finds all 17/18 data!
find_and_save_all_data(16)
find_and_save_all_data(15)
find_and_save_all_data(14)
find_and_save_all_data(13)
'''
