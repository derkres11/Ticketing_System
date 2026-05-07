import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


class DuplicateDetector:

    def __init__(self, tickets_path):

        self.tickets_path = tickets_path

        with open(tickets_path, "r") as file:
            self.tickets = json.load(file)

        self.vectorizer = TfidfVectorizer()

        self.ticket_vectors = self.vectorizer.fit_transform(self.tickets)

    def check_duplicate(self, new_ticket):

        new_vector = self.vectorizer.transform([new_ticket])

        similarity = cosine_similarity(new_vector, self.ticket_vectors)

        best_match_index = similarity.argmax()

        best_score = similarity[0][best_match_index]

        matched_ticket = self.tickets[best_match_index]

        return best_score, matched_ticket

    def add_ticket(self, new_ticket):

        self.tickets.append(new_ticket)

        with open(self.tickets_path, "w") as file:
            json.dump(self.tickets, file, indent=4)

        # retrain vectors
        self.ticket_vectors = self.vectorizer.fit_transform(self.tickets)