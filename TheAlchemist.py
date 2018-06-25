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
                  Column('assessment_score', String),
                  Column('workload_score', String),
                  Column('importance_score', String),
                  Column('satisfaction_score', String),
                  Column('comments', String),
                  )

metadata.create_all(engine)
