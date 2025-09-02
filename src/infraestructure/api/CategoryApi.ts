import { supabase } from "../config/supabaseConfig"

const api = supabase;

export const CategoryApi = {
    
    getAll: () => api.from('categories').select('*'),
    findById: (id: number) => api.from('categories').select('*').eq('id', id).single(),

}