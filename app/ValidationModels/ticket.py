from pydantic import BaseModel 
from typing import Optional
from datetime import datetime

class TicketCreate(BaseModel):
    title: str
    description: str
    student_id: Optional[int] = None

class TicketResponse(BaseModel):
    id: int
    title: str
    description: str
    status: str
    student_id: Optional[int]
    created_at: datetime

    class Config:
        orm_mode = True