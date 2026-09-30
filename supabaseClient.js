// supabaseClient.js

// Vercel inyectará estas variables automáticamente en producción
const supabaseUrl = window.process?.env?.SUPABASE_URL || 'https://supabase.co';
const supabaseKey = window.process?.env?.SUPABASE_ANON_KEY || 'tu-anon-key-de-prueba';

// Crear el cliente global
const supabase = supabaseJs.createClient(supabaseUrl, supabaseKey);
