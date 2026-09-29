javascript // supabaseClient.js 
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// Tu Project URL y Anon Key configuradas correctamente
export const SUPABASE_URL = 'https://gquzbidfnyfjanfpygcf.supabase.co'; 
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdxdXpiaWRmbnlmamFuZnB5Z2NmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA2ODUzMjYsImV4cCI6MjEwNjI2MTMyNn0.U_Ihq8xWEYbc0qNIjgbP6qRJ4Plt-Vz0qkiM11tbVhw';

// Inicialización del cliente usando las constantes previas
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

window.supabase = supabase; window.supabaseClient = supabase;
