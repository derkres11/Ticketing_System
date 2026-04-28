from prometheus_client import Counter, Histogram, generate_latest, CONTENT_TYPE_LATEST
from fastapi import Request, Response
from starlette.middleware.base import BaseHTTPMiddleware
import time

REQUEST_COUNT = Counter("app_requests_total", "Total HTTP requests", ['method', 'path', 'status'])
REQUEST_LATENCY = Histogram("app_request_latency_seconds", "Request latency seconds", ['method', 'path'])
TICKETS_CREATED = Counter("tickets_created_total", "Total created tickets")
USERS_CREATED = Counter("users_created_total", "Total created users")

class MetricsMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        start = time.time()
        response = await call_next(request)
        elapsed = time.time() - start
        REQUEST_LATENCY.labels(method=request.method, path=request.url.path).observe(elapsed)
        REQUEST_COUNT.labels(method=request.method, path=request.url.path, status=str(response.status_code)).inc()
        return response

def metrics_response():
    data = generate_latest()
    return Response(content=data, media_type=CONTENT_TYPE_LATEST)