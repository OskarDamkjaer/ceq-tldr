from bs4 import BeautifulSoup

from scrape import simple_get

def createUrls(course):
    urls = []
    years = [14, 15, 16, 17]
    terms = ['VT', 'HT']
    periods = ['LP1', 'LP2']
    for year in years:
        for term in terms:
            for period in periods:
                urls.append(
                    "http://www.ceq.lth.se/rapporter/" + str(year) + "_" + term + "/" + period + "/" + course + "_" + str(year) + "_" + term + "_" + period + "_slutrapport.html")
    print(urls)


def gimme_dat_info(course):
    lp_vt16_lp1 = simple_get("http://www.ceq.lth.se/rapporter/2016_VT/LP1/" + course + "_2016_VT_LP1_slutrapport.html")
    lp_ht16_lp1 = simple_get("http://www.ceq.lth.se/rapporter/2016_HT/LP1/" + course + "_2016_HT_LP1_slutrapport.html")
    lp_vt16_lp2 = simple_get("http://www.ceq.lth.se/rapporter/2016_VT/LP2/" + course + "_2016_VT_LP2_slutrapport.html")
    lp_ht16_lp2 = simple_get("http://www.ceq.lth.se/rapporter/2016_HT/LP2/" + course + "_2016_HT_LP2_slutrapport.html")

    lp_vt17_lp1 = simple_get("http://www.ceq.lth.se/rapporter/2017_HT/LP1/" + course + "_2017_HT_LP1_slutrapport.html")
    lp_ht17_lp1 = simple_get("http://www.ceq.lth.se/rapporter/2017_VT/LP1/" + course + "_2017_VT_LP1_slutrapport.html")
    lp_vt17_lp2 = simple_get("http://www.ceq.lth.se/rapporter/2017_HT/LP2/" + course + "_2017_HT_LP2_slutrapport.html")
    lp_ht17_lp2 = simple_get("http://www.ceq.lth.se/rapporter/2017_VT/LP2/" + course + "_2017_VT_LP2_slutrapport.html")

    if lp_vt16_lp1 is None and lp_ht16_lp1 is None and lp_vt16_lp2 is None and lp_ht16_lp2 is None and lp_vt17_lp1 is None and lp_ht17_lp1 is None and lp_vt17_lp2 is None and lp_ht17_lp2 is None:
        print(course)
        return None

    if lp_vt16_lp1:
        html = BeautifulSoup(lp_vt16_lp1, 'html.parser')
    if lp_ht16_lp1:
        html = BeautifulSoup(lp_ht16_lp1, 'html.parser')
    if lp_vt16_lp2:
        html = BeautifulSoup(lp_vt16_lp2, 'html.parser')
    if lp_ht16_lp2:
        html = BeautifulSoup(lp_ht16_lp2, 'html.parser')

    if lp_vt17_lp1:
        html = BeautifulSoup(lp_vt17_lp1, 'html.parser')
    if lp_ht17_lp1:
        html = BeautifulSoup(lp_ht17_lp1, 'html.parser')
    if lp_vt17_lp2:
        html = BeautifulSoup(lp_vt17_lp2, 'html.parser')
    if lp_ht17_lp2:
        html = BeautifulSoup(lp_ht17_lp2, 'html.parser')

    result = []
    for i, td in enumerate(html.select('td')):
        text = td.get_text().strip()
        print(i, text)
        if i == 2:
            result.append(text.replace(",", ""))
        if i == 4:
            result.append(text[:6])
        if i == 8:
            result.append(text[2:4] + "/" + text[4:6])
        if i == 14:
            result.append(text)
        if i == 16:
            result.append(text[text.find("/") + 1:].replace(" ", ""))
        if i == 52:
            result.append(text)
        if i == 55:
            result.append(text)
        if i == 58:
            result.append(text)
        if i == 61:
            result.append(text)
        if i == 67:
            result.append(text)
        if i == 70:
            result.append(text)
        if i == 87:
            result.append(text.replace(" ", ""))

    return result

fields = ['Kursnamn', 'Kurskod', 'Läsår', 'Registerade', 'Andel Godkända', 'God undervisning', 'Tydliga mål',
          'Förståelseinriktad Examination', 'Lämplig arbetsbelastning', 'Angelägen för utbilding', 'Överlag Nöjd']

print(fields)


codes = set(open("./ourCourses", 'r').read().split("\n"))


newDATA = open("./data", 'w')

for stuff in fields:
    newDATA.write(stuff + ",")

newDATA.write("\n")

print(codes)

for course in codes:
    info = gimme_dat_info(course)
    if info and len(info) == 12:
        print(info)
        for thing in info:
            newDATA.write(thing + ",")
        newDATA.write("\n")
