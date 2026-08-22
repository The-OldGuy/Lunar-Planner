from fastapi import APIRouter

router = APIRouter()

@router.get("/cycle")
def get_sun_cycle():
    return {"sunrise": "06:12", "sunset": "20:45"}  # placeholder
