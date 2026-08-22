from fastapi import APIRouter

router = APIRouter()

@router.get("/phase")
def get_moon_phase():
    return {"phase": "Full Moon"}  # placeholder
