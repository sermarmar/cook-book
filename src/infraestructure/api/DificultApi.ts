import { supabase } from "../config/supabaseConfig"

const api = supabase;

export const DificultApi = {
    
    getAll: () => api.from('difficulties').select('*'),
    findById: (id: number) => api.from('difficulties').select('*').eq('id', id).single(),

}