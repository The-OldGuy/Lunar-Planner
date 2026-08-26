from fastapi import APIRouter
import requests

router = APIRouter()

@router.get("/")
async def get_sun():
    url = "https://api.ipgeolocation.io/astronomy?apiKey=YOUR_API_KEY&location=Augusta,GA"
    response = requests.get(url)
    return response.json()

