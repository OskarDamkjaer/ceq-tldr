from scrape import gimme_dat_info


def blank_or_data(dictionary, entry):
    if dictionary.get(entry) is None:
        return ""
    return dictionary.get(entry)


scrape_file = open("./allScrapeData", 'w')

sv_fields = ['Kursnamn', 'Kurskod', 'HP', 'Läsår', 'Registerade', 'Andel Godkända', 'God undervisning', 'Tydliga mål',
             'Förståelseinriktad Examination', 'Lämplig arbetsbelastning', 'Angelägen för utbilding', 'Överlag Nöjd',
             'Studierådets kommentarer']

fields = ['code', 'name', 'points', 'year', 'registered', 'percentPassed', 'teachingScore',
          'assessmentScore', 'workloadScore', 'importanceScore', 'satisfactionScore', 'comments']

for field in fields:
    scrape_file.write(field + ",")
scrape_file.write('\n')

# all_links = getAllHREFS()
print("Downloaded all links")

all_links = ["http://www.ceq.lth.se/rapporter/2017_HT/LP1/ETEF01_2017_HT_LP1_slutrapport.html",
             "http://www.ceq.lth.se/rapporter/2017_HT/LP1/AADA01_2017_HT_LP1_slutrapport_en.html",
             "http://www.ceq.lth.se/rapporter/2017_HT/LP1/ABKF15_2017_HT_LP1_slutrapport_en.html",
             "http://www.ceq.lth.se/rapporter/2017_HT/LP1/ABVA05_2017_HT_LP1_slutrapport_en.html",
             "http://www.ceq.lth.se/rapporter/2012_VT/LP1/AAH150_2012_VT_LP1_slutrapport_en.html",
             "http://www.ceq.lth.se/rapporter/2006_HT/LP1/AAK630_2006_HT_LP1_slutrapport.html"]

for link in all_links:
    row = gimme_dat_info(link)
    for field in fields:
        scrape_file.write(blank_or_data(row, field) + ",")
    scrape_file.write("\n")

print(row.keys())
print(fields)

# DEBUGA DETTA, verkar vara som att exam och satisfactionscore e whack
