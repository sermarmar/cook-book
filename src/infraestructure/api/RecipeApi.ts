import { supabase } from "../config/supabaseConfig"
import type { RecipeDto } from "../dtos/RecipeDto";

const api = supabase;

export const RecipeApi = {
    
    getAll: () => api.from('recipes').select('*'),
    findById: (id: number) => api.from('recipes').select('*').eq('id', id).single(),
    create: (data: RecipeDto) => api.from('recipes').insert(data),
    update: (id: number, data: RecipeDto) => api.from('recipes').update(data).eq('id', id),
    delete: (id: number) => api.from('recipes').delete().eq('id', id)

}