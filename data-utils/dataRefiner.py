# TODO methods for splitting into courses, into courseofferings, which linje osv

# Get our courses
codes = set(open("./dsek-course-list", 'r').read().split("\n"))


def blank_or_data(dictionary, entry):
    if dictionary.get(entry) is None:
        return ""
    return dictionary.get(entry)
