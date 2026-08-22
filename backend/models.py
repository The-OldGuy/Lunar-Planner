from pydantic import BaseModel

class Note(BaseModel):
    id: int | None = None
    title: str
    content: str

class Strategy(BaseModel):
    id: int | None = None
    name: str
    description: str

class ScheduleItem(BaseModel):
    id: int | None = None
    date: str
    task: str
