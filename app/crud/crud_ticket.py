from sqlalchemy.orm import Session
from app.DB_models.ticket import Ticket
from app.ValidationModels.ticket import TicketCreate

def create_ticket(db: Session, ticket: TicketCreate):
    db_ticket = Ticket(**ticket.dict())
    db.add(db_ticket)
    db.commit()
    db.refresh(db_ticket)
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