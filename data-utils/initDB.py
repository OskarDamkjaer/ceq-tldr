import sqlite3

conn = sqlite3.connect('courses.db')
c = conn.cursor()

c.execute('''DROP TABLE IF EXISTS Courses''')
c.execute('''DROP TABLE IF EXISTS CourseOfferings''')

c.execute('''CREATE TABLE `Courses` (
  `id`  INTEGER PRIMARY KEY AUTOINCREMENT,
  `name`  TEXT NOT NULL,
  `code`  TEXT NOT NULL,
  `points`  NUMERIC
);''')

c.execute('''CREATE TABLE `CourseOfferings` (
  `id`  INTEGER PRIMARY KEY AUTOINCREMENT,
  `courseId`  INTEGER,
  `year`  TEXT,
  `registered`  INTEGER,
  `percentPassed`  TEXT,
  `teachingScore`  TEXT,
  `goalClearnessScore`  TEXT,
  `examScore`  TEXT,
  `educationScore`  TEXT,
  `satisfactionScore`  TEXT,
  `comments`  TEXT
);''')
