const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:10000';

export async function getMoonData() {
  const res = await fetch(`${BACKEND_URL}/moon`);
  return res.json();
}

export async function getSunData() {
  const res = await fetch(`${BACKEND_URL}/sun`);
  return res.json();
}
