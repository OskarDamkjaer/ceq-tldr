import pandas as pd

from scrape import gimme_dat_info


def blank_or_data(dictionary, entry):
    if dictionary.get(entry) is None:
        return ""
    return dictionary.get(entry)


scrape_file = open("./allScrapeData", 'w')

sv_fields = ['Kursnamn', 'Kurskod', 'HP', 'Läsår', 'Registerade', 'Andel Godkända', 'God undervisning', 'Tydliga mål',
             'Förståelseinriktad Examination', 'Lämplig arbetsbelastning', 'Angelägen för utbilding', 'Överlag Nöjd',
             'Studierådets kommentarer']

# all_links = getAllHREFS()
print("Downloaded all links")

all_links = ["http://www.ceq.lth.se/rapporter/2017_HT/LP1/ETEF01_2017_HT_LP1_slutrapport.html",
             "http://www.ceq.lth.se/rapporter/2017_HT/LP1/AADA01_2017_HT_LP1_slutrapport_en.html",
             "http://www.ceq.lth.se/rapporter/2017_HT/LP1/ABKF15_2017_HT_LP1_slutrapport_en.html",
             "http://www.ceq.lth.se/rapporter/2017_HT/LP1/ABVA05_2017_HT_LP1_slutrapport_en.html",
             "http://www.ceq.lth.se/rapporter/2012_VT/LP1/AAH150_2012_VT_LP1_slutrapport_en.html",
             "http://www.ceq.lth.se/rapporter/2006_HT/LP1/AAK630_2006_HT_LP1_slutrapport.html"]

all_series = [gimme_dat_info(link) for link in all_links]

all_data = pd.DataFrame(data = all_series)

with pd.option_context('display.max_rows', None, 'display.max_columns', None):
    print(all_data)

# Ploppa till table


all_data.to_csv('all_data.csv')