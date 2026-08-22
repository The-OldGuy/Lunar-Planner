from fastapi import APIRouter
from backend.db import get_supabase
from backend.models import Note

router = APIRouter()

@router.get("/")
def list_notes():
    supabase = get_supabase()
    data = supabase.table("notes").select("*").execute()
    return data.data

@router.post("/")
def create_note(note: Note):
    supabase = get_supabase()
    result = supabase.table("notes").insert(note.dict()).execute()
    return result.data
