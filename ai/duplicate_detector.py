import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


class DuplicateDetector:

    def __init__(self, file_path="data/tickets.json"):

        with open(file_path, "r") as f:
            self.tickets = json.load(f)

        self.vectorizer = TfidfVectorizer(stop_words="english")
        self.ticket_vectors = self.vectorizer.fit_transform(self.tickets)

    def check_duplicate(self, new_ticket):

        new_vector = self.vectorizer.transform([new_ticket])
        similarity = cosine_similarity(new_vector, self.ticket_vectors)

        index = similarity.argmax()
        confidence = similarity[0][index]

        print("Duplicate Confidence:", confidence)

        if confidence > 0.5:
            return True, self.tickets[index]
        else:
            return False, None