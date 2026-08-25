const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:10000';

export async function getMoonData() {
  const res = await fetch(`${BACKEND_URL}/moon`);
  return res.json();
}

export async function getSunData() {
  const res = await fetch(`${BACKEND_URL}/sun`);
  return res.json();
}

import { supabase } from '$utils/supabase';

export async function getNotes() {
  const { data, error } = await supabase.from('notes').select('*');
  if (error) console.error('Error loading notes:', error);
  return data ?? [];
}

export async function getHabits() {
  const { data, error } = await supabase.from('habits').select('*');
  if (error) console.error('Error loading habits:', error);
  return data ?? [];
}

export async function getSchedule() {
  const { data, error } = await supabase.from('schedule').select('*');
  if (error) console.error('Error loading schedule:', error);
  return data ?? [];
}
