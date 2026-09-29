// supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm'

// Tu Project URL y Anon Key configuradas correctamente
export const SUPABASE_URL = 'https://xfbcbeckumoxsjvpqfsr.supabase.co/rest/v1/'; 
export const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmYmNiZWNrdW1veHNqdnBxZnNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA2OTgxMTUsImV4cCI6MjEwNjI3NDExNX0.wJBcF38XN0gkWQlc_pros-jZ0CT_d5Lty3lHFBRvruw';

// Inicialización del cliente usando las constantes previas
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
