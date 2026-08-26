from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_sun():
    # Temporary placeholder data until you add a real API
    return {
        "sunrise": "2026-08-26T06:48:00",
        "sunset": "2026-08-26T20:12:00",
        "solar_noon": "2026-08-26T13:30:00"
    }
