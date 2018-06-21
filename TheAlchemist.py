import sqlite3

from sqlalchemy import Table, Column, Integer, String, MetaData, ForeignKey, create_engine

engine = create_engine('sqlite:///courses.db')
metadata = MetaData()
conn = engine.connect()

courses = Table('Courses', metadata,
              Column('id', Integer, primary_key=True),
              Column('name', String),
              Column('code', String),
              Column('points', String),
)

addresses = Table('addresses', metadata,
                  Column('id', Integer, primary_key=True),
                  Column('course_id', None, ForeignKey('courses.id')),
                  Column('year', Integer),
                  Column('registered', String),
                  Column('percent_passed', String),
                  Column('teaching_score', String),
                  Column('goal_clearness_score', String),
                  Column('exam_score', String),
                  Column('education_score', String),
                  Column('satisfaction_score', String),
                  Column('comments', String),
)

metadata.create_all(engine)

conn(courses.insert(), name="hej")


def insert_scrape_result(scrape_result):
    conn = sqlite3.connect('courses.db')
    c = conn.cursor()

    courses = Table('Courses')
    offerings = Table('CourseOfferings')

    # hur hanterar man dessa magic strings?
    c.execute(
        str(Query.into(courses).insert(None, scrape_result['name'], scrape_result['code'], scrape_result['points'])))
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
