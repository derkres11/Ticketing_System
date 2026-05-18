import json


def load_tickets():

    with open("data/tickets.json", "r") as file:
        return json.load(file)


def save_tickets(tickets):

    with open("data/tickets.json", "w") as file:
        json.dump(tickets, file, indent=4)


def show_tickets(tickets):

    print("\n=== ALL TICKETS ===")

    for ticket in tickets:

        print(f"\nTicket ID: {ticket['id']}")
        print(f"Issue: {ticket['issue']}")
        print(f"Category: {ticket['category']}")
        print(f"Status: {ticket['status']}")
        print(f"Admin Reply: {ticket['admin_reply']}")


tickets = load_tickets()

show_tickets(tickets)

ticket_id = int(input("\nEnter Ticket ID to reply: "))

reply = input("Write admin reply: ")

for ticket in tickets:

    if ticket["id"] == ticket_id:

        ticket["admin_reply"] = reply
        ticket["status"] = "Resolved"

        break

save_tickets(tickets)

print("\n Ticket updated successfully.")