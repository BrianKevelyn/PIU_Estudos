from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

class PostData(BaseModel):
    id: int
    title: str

posts_db = []

@app.post("/posts/")
async def create_post(post: PostData):
    posts_db.append(post)
    return {"message": "Post recebido com sucesso!", "post": post}

@app.get("/posts/", response_model=List[PostData])
async def list_posts():
    return posts_db
