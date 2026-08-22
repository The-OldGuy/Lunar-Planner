from fastapi import APIRouter
from backend.db import get_supabase
from backend.models import Strategy

router = APIRouter()

@router.get("/")
def list_strategies():
    supabase = get_supabase()
    data = supabase.table("strategies").select("*").execute()
    return data.data
