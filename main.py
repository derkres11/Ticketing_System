from ai.faq_engine import FAQEngine
from ai.category_suggester import suggest_category
from ai.duplicate_detector import DuplicateDetector


faq = FAQEngine("data/faq.json")

detector = DuplicateDetector("data/tickets.json")


print("=== AI Ticketing Assistant ===")

while True:

    user_question = input("\nAsk your question: ")

    if user_question.lower() == "exit":
        print("Goodbye!")
        break

    answer = faq.get_answer(user_question)

    print("\n=== FAQ RESULT ===")

    # FAQ FOUND
    if answer != "Please create a support ticket.":

        print(answer)
        print("\n Question answered using FAQ system.")

    # FAQ NOT FOUND
    else:

        print(answer)

        category = suggest_category(user_question)

        print("\n=== CATEGORY ===")
        print(category)

        score, matched_ticket = detector.check_duplicate(user_question)

        print("\n=== DUPLICATE CHECK ===")

        if score > 0.5:

            print("⚠ Similar issue detected")
            print(f"Matched ticket: {matched_ticket}")
            print(f"Similarity score: {score:.2f}")
            print("Please wait while support resolves this issue.")

        else:

            print("No duplicate issue found")

            detector.add_ticket(user_question)

            print("New support ticket created successfully.")