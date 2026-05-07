from app.db.redis_client import redis_client

from typing import Optional

def redis_create(key: str, value: str, ex: Optional[int] = None): 
    redis_client.set(key, value, ex=ex)

def redis_read(key: str):
    return redis_client.get(key)

def redis_update(key: str, value: str):
    redis_client.set(key, value)

def redis_delete(key: str):
    redis_client.delete(key)