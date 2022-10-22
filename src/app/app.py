from fastapi import FastAPI

from models import models
from config.database import engine
from routers.phone import phone

app=FastAPI()
app.include_router(phone)

#Create tables
models.Base.metadata.create_all(bind=engine)
