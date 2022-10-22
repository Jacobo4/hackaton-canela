from fastapi import FastAPI

from models import models
from config.database import engine
from routers.phone import phone

import uvicorn

app=FastAPI()
app.include_router(phone)

#Create tables
models.Base.metadata.create_all(bind=engine)

if __name__ == "__main__":
  uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)