from ai.faq_engine import FAQEngine
from ai.category_suggester import suggest_category
from ai.duplicate_detector import DuplicateDetector


faq = FAQEngine()
duplicate_detector = DuplicateDetector()

while True:
    question = input("Ask a question: ")

    if question.lower() == "exit":
        break

    answer = faq.get_answer(question)
    category = suggest_category(question)

    # Check duplicate
    is_duplicate, matched_ticket = duplicate_detector.check_duplicate(question)

    print("Bot:", answer)
    print("Category:", category)

    if is_duplicate:
        print("Duplicate Ticket Detected!")
        print("Similar to:", matched_ticket)
    else:
        print("This is a new ticket.")

    print("------")