from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import logging
from api import moon, sun, notes, schedule, strategies, togfarms

logging.basicConfig(level=logging.INFO)

app = FastAPI(title="LunarPlanner API")

# CORS for your SvelteKit frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict later
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routes
app.include_router(moon.router, prefix="/moon")
app.include_router(sun.router, prefix="/sun")
app.include_router(notes.router, prefix="/notes")
app.include_router(schedule.router, prefix="/schedule")
app.include_router(strategies.router, prefix="/strategies")
app.include_router(togfarms.router, prefix="/togfarms")

@app.get("/")
def root():
    return {"status": "LunarPlanner backend running"}
