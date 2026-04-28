from sqlalchemy import Column, Integer, String, Text, DateTime
from sqlalchemy.sql import func
from app.DB_models.base import Base

class Ticket(Base):
    __tablename__ = "tickets"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(255), nullable=False)
    description = Column(Text, nullable=True)
    status = Column(String(50), default="open")
    created_at = Column(DateTime(timezone=True), server_default=func.now())