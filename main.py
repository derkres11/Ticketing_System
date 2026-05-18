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

    # =========================
    # FAQ FOUND
    # =========================
    if answer != "Please create a support ticket.":

        print("\n=== FAQ RESULT ===")
        print(answer)

        print("\n Question answered using FAQ system.")

    # =========================
    # FAQ NOT FOUND
    # =========================
    else:

        print("\n No FAQ answer found.")

        category = suggest_category(user_question)

        print("\n=== CATEGORY ===")
        print(category)

        score, matched_ticket = detector.check_duplicate(user_question)

        print("\n=== DUPLICATE CHECK ===")

        # =========================
        # DUPLICATE FOUND
        # =========================
        if score > 0.5:

            print("⚠ Similar issue detected")

            print(f"Ticket ID: {matched_ticket['id']}")
            print(f"Issue: {matched_ticket['issue']}")
            print(f"Status: {matched_ticket['status']}")

            # RESOLVED TICKET
            if matched_ticket["status"] == "Resolved":

                print("\n=== EXISTING SOLUTION ===")
                print(matched_ticket["admin_reply"])

            # OPEN TICKET
            else:

                print("\n This issue is still being processed by support team.")

        # =========================
        # NEW TICKET
        # =========================
        else:

            detector.add_ticket(user_question, category)

            print("\n New ticket created successfully.")
            print("Please wait for admin/support response.")