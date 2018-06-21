import sqlite3

from pypika import Query, Table


def insert_scrape_result(scrape_result):
    conn = sqlite3.connect('courses.db')
    c = conn.cursor()

    courses = Table('Courses')
    offerings = Table('CourseOfferings')

    # hur hanterar man dessa magic strings?
    c.execute(str(Query.into(courses).insert(None, scrape_result['name'], scrape_result['code'], scrape_result['points'])))
    conn.commit()


def insert_list_of_scrape_result(list_of_results):
    conn = sqlite3.connect('courses.db')
    c = conn.cursor()
    courses = Table('Courses')
    offerings = Table('CourseOfferings')

    for scrape_result in list_of_results:
        c.execute(str(Query.into(courses).insert(None, scrape_result['name'],
                                                 scrape_result['code'],
                                                 scrape_result['points'])))

        if len(scrape_result) > 7 and 'comment' in scrape_result and 'teachingScore' in scrape_result:
            c.execute(str(Query.into(offerings).insert(None,
                                                       1,
                                                       scrape_result['year'],
                                                       scrape_result['registered'],
                                                       scrape_result['percentPassed'],
                                                       scrape_result['teachingScore'],
                                                       scrape_result['goalClearnessScore'],
                                                       scrape_result['examScore'],
                                                       scrape_result['educationScore'],
                                                       scrape_result['satisfactionScore'],
                                                       scrape_result['comment'])))

    conn.commit()
