import json
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity


class FAQEngine:

    def __init__(self, faq_file="data/faq.json"):

        with open(faq_file, "r") as f:
            faq_data = json.load(f)

        self.questions = [item["question"] for item in faq_data]
        self.answers = [item["answer"] for item in faq_data]

        self.vectorizer = TfidfVectorizer(stop_words="english")
        self.vectors = self.vectorizer.fit_transform(self.questions)

    def get_answer(self, user_question):

        user_vector = self.vectorizer.transform([user_question])
        similarity = cosine_similarity(user_vector, self.vectors)

        index = similarity.argmax()
        confidence = similarity[0][index]

        print("Confidence:", confidence)

        if confidence > 0.3:
            return self.answers[index]
        else:
            return "Please create a support ticket."