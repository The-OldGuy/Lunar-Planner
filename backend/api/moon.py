from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def get_moon():
    # Temporary placeholder data until you add a real API
    return {
        "phase": "Waxing Crescent",
        "illumination": 23.5,
        "moonrise": "2026-08-26T10:14:00",
        "moonset": "2026-08-26T22:48:00"
    }
