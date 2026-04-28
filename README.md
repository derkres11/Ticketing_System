Chatbot Module
 Description

This chatbot is part of the university ticketing system. It answers student questions using a predefined FAQ. If no relevant answer is found, the user is redirected to create a support ticket.

How It Works

* User enters a question
* System compares it with FAQ entries
* If similarity is high → returns answer
* If not → suggests creating a ticket

Technologies

* Backend: FastAPI
* NLP: TF-IDF, cosine similarity
* Database: PostgreSQL
Notes

* Chatbot is retrieval-based (not AI-generated responses)
* Accuracy depends on FAQ data