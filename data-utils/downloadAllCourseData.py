import pandas as pd

from scrapeTools import gimme_dat_info, get_all_hrefs

sv_fields = ['Kursnamn', 'Kurskod', 'HP', 'Läsår', 'Registerade', 'Andel Godkända', 'God undervisning', 'Tydliga mål',
             'Förståelseinriktad Examination', 'Lämplig arbetsbelastning', 'Angelägen för utbilding', 'Överlag Nöjd',
             'Studierådets kommentarer']

all_links = get_all_hrefs()
print("Downloaded all links")

all_series = [gimme_dat_info(link) for link in all_links]
pd.DataFrame.from_records(all_series).T.to_json("./data/pureScrapeData.json")
