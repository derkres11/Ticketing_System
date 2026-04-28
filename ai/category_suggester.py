# category_suggester.py

def suggest_category(user_question: str) -> str:
    """
    Suggest a category based on keywords in the user question.
    """

    question = user_question.lower()

    if "absence" in question or "attend" in question:
        return "Attendance"

    elif "exam" in question or "midterm" in question or "final" in question:
        return "Exam"

    elif "timetable" in question or "schedule" in question:
        return "Timetable"

    elif "instructor" in question or "teacher" in question or "contact" in question:
        return "Instructor"

    else:
        return "General"