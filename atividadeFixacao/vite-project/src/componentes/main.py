from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Tarefa(BaseModel):
    titulo: str
    concluida: bool

tarefas_db: List[Tarefa] = []

@app.post("/tarefas")
def adicionar_tarefa(tarefa: Tarefa):
    tarefas_db.append(tarefa)
    return {"mensagem": "Tarefa adicionada com sucesso", "tarefa": tarefa}

@app.get("/tarefas", response_model=List[Tarefa])
def listar_tarefas():
    return tarefas_db
