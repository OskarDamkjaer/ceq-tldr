from bs4 import BeautifulSoup

from scrape import simple_get


def getAllHREFS():
    raw_html = simple_get("http://www.ceq.lth.se/rapporter/?lasar_lp=alla&program=&kurskod=&sort=kurskod")

    soup = BeautifulSoup(raw_html, 'html.parser')

    urlbois = []

    for a in soup.find_all('a', href=True):
        if "slutrapport.html" in a['href']:
            urlbois.append(a['href'])

    return urlbois


def gimme_dat_info(cequrl):
    CEQ = simple_get(cequrl)
    ourCourses = set(open("./ourCourses", 'r').read().split("\n"))

    if CEQ is None:
        return

    html = BeautifulSoup(CEQ, 'html.parser')

    result = []
    for i, td in enumerate(html.select('td')):
        text = td.get_text().strip()
        # print(i, text)
        if i == 2:
            result.append(text.replace(",", ""))
        if i == 4:
            result.append(text[:6])
        if i == 6:
            result.append(text)
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

    for i, i_tag in enumerate(html.select('i')):
        if i == 0:
            result.append(i_tag.get_text().strip())
    return result


fields = ['Kursnamn', 'Kurskod', 'HP', 'Läsår', 'Registerade', 'Andel Godkända', 'God undervisning', 'Tydliga mål',
          'Förståelseinriktad Examination', 'Lämplig arbetsbelastning', 'Angelägen för utbilding', 'Överlag Nöjd',
          'Studierådets kommentarer']

codes = set(open("./ourCourses", 'r').read().split("\n"))

newDATA = open("./allCourses", 'w')

for stuff in fields:
    newDATA.write(stuff + ",")

allLinks = getAllHREFS()
print("Downloaded all links")
fieldLen = len(fields)
for link in allLinks:
    row = gimme_dat_info(link)
    if row and len(row) == fieldLen:
        for field in row:
            newDATA.write(field + ",")
        newDATA.write("\n")
