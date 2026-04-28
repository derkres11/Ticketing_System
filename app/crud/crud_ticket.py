from sqlalchemy.orm import Session
from app.DB_models.ticket import Ticket
from app.ValidationModels.ticket import TicketCreate
import asyncio

# Temporary dummy function to avoid import error
async def publish_ticket_event(event_type, event_data):
    # TODO: Replace with actual implementation from app.events.kafka_client
    pass

def create_ticket(db: Session, ticket: TicketCreate):
    db_ticket = Ticket(**ticket.dict())
    db.add(db_ticket)
    db.commit()
    db.refresh(db_ticket)

    event_data = {
        "id": db_ticket.id,
        "title": getattr(db_ticket, "title", None),
        "status": getattr(db_ticket, "status", None),
    }

    try:
        try:
            loop = asyncio.get_running_loop()
        except RuntimeError:
            loop = None

        if loop:
            asyncio.create_task(publish_ticket_event("ticket.created", event_data))
        else:
            import threading
            threading.Thread(target=lambda: asyncio.run(publish_ticket_event("ticket.created", event_data)), daemon=True).start()
    except Exception:
        pass

    return db_ticket

def get_tickets(db: Session):
    return db.query(Ticket).all()

def get_ticket(db: Session, ticket_id: int):
    return db.query(Ticket).get(ticket_id)

def update_ticket(db: Session, ticket_id: int, ticket_update: TicketCreate):
    ticket = db.query(Ticket).get(ticket_id)
    for key, value in ticket_update.dict(exclude_unset=True).items():
        setattr(ticket, key, value)
    db.commit()
    db.refresh(ticket)
    return ticket

def delete_ticket(db: Session, ticket_id: int):
    ticket = db.query(Ticket).get(ticket_id)
    db.delete(ticket)
    db.commit()
    return ticket


def get_tickets_by_student(db: Session, student_id: int):
    return db.query(Ticket).filter(Ticket.student_id == student_id).all()