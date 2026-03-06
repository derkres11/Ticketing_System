from fastapi import FastAPI, APIRouter, Depends
from sqlalchemy.orm import Session
from app.ValidationModels.ticket import TicketCreate, TicketResponse
from app.db.session import get_db
from app.crud.crud_ticket import (
    create_ticket, get_tickets, get_ticket, update_ticket, delete_ticket
)
from app.ValidationModels.user import UserCreate, UserResponse
from app.crud.crud_user import (
    create_user, get_users, get_user, delete_user
)

import logging


app = FastAPI(title="University Ticketing System")
router = APIRouter()

# Graceful shutdown handlers
@app.on_event("shutdown")
async def shutdown_event():
    logging.info("Shutting down gracefully. Closing resources if needed.")


# Ticket Endpoints--------------------------------------------------------

@router.post("/tickets", response_model=TicketResponse)
def create_ticket_route(ticket: TicketCreate, db: Session = Depends(get_db)):
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


# User Endpoints--------------------------------------------------------

@router.post("/users", response_model=UserResponse)
def create(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(db, user)

@router.get("/users", response_model=list[UserResponse])
def read_all_users(db: Session = Depends(get_db)):
    return get_users(db)

@router.get("/users/{user_id}", response_model=UserResponse)
def read_user(user_id: int, db: Session = Depends(get_db)):
    return get_user(db, user_id)

@router.delete("/users/{user_id}")
def delete_user_route(user_id: int, db: Session = Depends(get_db)):
    delete_user(db, user_id)
    return {"detail": "User deleted"}

app.include_router(router)
