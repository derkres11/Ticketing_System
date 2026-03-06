from sqlalchemy.orm import Session
from app.DB_models.user import User
from app.ValidationModels.user import UserCreate

def create_user(db: Session, user: UserCreate):
    db_user = User(
        username=user.username,
        email=user.email,
        hashed_password=user.password, 
        role="student"
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_users(db: Session):
    return db.query(User).all()

def get_user(db: Session, user_id: int):
    return db.query(User).get(user_id)

def get_user_by_username(db: Session, username: str):
    return db.query(User).filter(User.username == username).first()

def delete_user(db: Session, user_id: int):
    user = db.query(User).get(user_id)
    db.delete(user)
    db.commit()
    return user