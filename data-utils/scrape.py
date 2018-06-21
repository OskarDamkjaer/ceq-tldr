from contextlib import closing

from requests import get
from bs4 import BeautifulSoup
from requests.exceptions import RequestException
from databaseHandler import insert_list_of_scrape_result


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
        #print(i, text)
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
        if i == 22:
            result['examScore'] = text
        if i == 112:
            result['educationScore'] = text
        if i == 116:
            result['satisfactionScore'] = text

    comments = ""
    for i, line in enumerate(html.get_text().split('\n')):
        #print(i, line)
        if i > 99:
            comments += line + '\n'

    if not comments.isspace():
        result['comments'] = comments

    return result

results = []
results.append(gimme_dat_info("http://www.ceq.lth.se/rapporter/2017_HT/LP1/ETEF15_2017_HT_LP1_slutrapport.html"))
results.append(gimme_dat_info("http://www.ceq.lth.se/rapporter/2017_HT/LP1/ETEF01_2017_HT_LP1_slutrapport.html"))
results.append(gimme_dat_info("http://www.ceq.lth.se/rapporter/2017_VT/LP2/ETEN01_2017_VT_LP2_slutrapport.html"))

insert_list_of_scrape_result(results)
