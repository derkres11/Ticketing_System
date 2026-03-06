from fastapi import FastAPI, APIRouter, Depends
from sqlalchemy.orm import Session
from app.schemas.ticket import TicketCreate, TicketResponse
from app.db.session import get_db
from app.crud.crud_ticket import (
    create_ticket, get_tickets, get_ticket, update_ticket, delete_ticket
)

app = FastAPI(title="University Ticketing System")
router = APIRouter()

@router.post("/tickets", response_model=TicketResponse)
def create(ticket: TicketCreate, db: Session = Depends(get_db)):
    return create_ticket(db, ticket)

@router.get("/tickets", response_model=list[TicketResponse])
def read_all(db: Session = Depends(get_db)):
    return get_tickets(db)

@router.get("/tickets/{ticket_id}", response_model=TicketResponse)
def read(ticket_id: int, db: Session = Depends(get_db)):
    return get_ticket(db, ticket_id)

@router.put("/tickets/{ticket_id}", response_model=TicketResponse)
def update(ticket_id: int, ticket_update: TicketCreate, db: Session = Depends(get_db)):
    return update_ticket(db, ticket_id, ticket_update)

@router.delete("/tickets/{ticket_id}")
def delete(ticket_id: int, db: Session = Depends(get_db)):
    delete_ticket(db, ticket_id)
    return {"detail": "Ticket deleted"}

app.include_router(router)