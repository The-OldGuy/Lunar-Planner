from fastapi import APIRouter
from backend.db import get_supabase
from backend.models import ScheduleItem

router = APIRouter()

@router.get("/")
def list_schedule():
    supabase = get_supabase()
    data = supabase.table("schedule").select("*").execute()
    return data.data
