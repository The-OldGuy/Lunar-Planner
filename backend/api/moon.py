from fastapi import APIRouter
import requests

router = APIRouter()

@router.get("/")
async def get_moon():
    # Example external API (you can replace with your preferred moon API)
    url = "https://api.ipgeolocation.io/astronomy?apiKey=YOUR_API_KEY&location=Augusta,GA"
    response = requests.get(url)
    return response.json()
