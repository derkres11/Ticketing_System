import json
from datetime import datetime
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


class DuplicateDetector:

    def __init__(self, tickets_path):

        self.tickets_path = tickets_path

        with open(tickets_path, "r") as file:
            self.tickets = json.load(file)

        self.vectorizer = TfidfVectorizer()

        issues = [ticket["issue"] for ticket in self.tickets]

        if issues:
            self.ticket_vectors = self.vectorizer.fit_transform(issues)
        else:
            self.ticket_vectors = None

    def check_duplicate(self, new_ticket):

        if not self.tickets:
            return 0, None

        issues = [ticket["issue"] for ticket in self.tickets]

        self.ticket_vectors = self.vectorizer.fit_transform(issues)

        new_vector = self.vectorizer.transform([new_ticket])

        similarity = cosine_similarity(new_vector, self.ticket_vectors)

        best_match_index = similarity.argmax()

        best_score = similarity[0][best_match_index]

        matched_ticket = self.tickets[best_match_index]

        return best_score, matched_ticket

    def add_ticket(self, issue, category):

        ticket_id = len(self.tickets) + 1

        new_ticket = {
            "id": ticket_id,
            "issue": issue,
            "category": category,
            "status": "Open",
            "created_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "admin_reply": ""
        }

        self.tickets.append(new_ticket)

        with open(self.tickets_path, "w") as file:
            json.dump(self.tickets, file, indent=4)