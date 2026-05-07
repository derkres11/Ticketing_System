# category_suggester.py

def suggest_category(user_question: str) -> str:

    question = user_question.lower()

    if any(word in question for word in ["absence", "attendance"]):
        return "Attendance"

    elif any(word in question for word in ["exam", "midterm", "final"]):
        return "Exam"

    elif any(word in question for word in ["timetable", "schedule", "classroom"]):
        return "Timetable"

    elif any(word in question for word in ["instructor", "teacher", "professor"]):
        return "Instructor"

    elif any(word in question for word in ["payment", "tuition", "fee"]):
        return "Finance"

    elif any(word in question for word in ["login", "password", "account", "portal"]):
        return "Technical Support"

    elif any(word in question for word in ["course", "register", "registration"]):
        return "Registration"

    elif "scholarship" in question:
        return "Scholarship"

    elif any(word in question for word in ["grade", "result"]):
        return "Grades"

    else:
        return "General"