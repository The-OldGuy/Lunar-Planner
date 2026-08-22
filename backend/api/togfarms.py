from fastapi import APIRouter

router = APIRouter()

@router.get("/status")
def togfarms_status():
    return {"message": "TogFarms API placeholder"}
