from sqlalchemy.orm import Session
from app.DB_models.user import User
from app.ValidationModels.user import UserCreate
from app.utils.security import get_password_hash  # updated import
from sqlalchemy.exc import IntegrityError

def create_user(db: Session, user: UserCreate):
    db_user = User(
        username=user.username,
        email=user.email,
        hashed_password=get_password_hash(user.password),  # updated usage
        role="student"
    )
    db.add(db_user)
    try:
        db.commit()
    except IntegrityError:
        db.rollback()
        raise
    db.refresh(db_user)
    return db_user

def get_users(db: Session):
    return db.query(User).all()

def get_user(db: Session, user_id: int):
    return db.get(User, user_id)

def get_user_by_username(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()

def delete_user(db: Session, user_id: int):
    user = db.get(User, user_id)
    if not user:
        return None
    db.delete(user)
    db.commit()
    return user