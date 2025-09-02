import type { Recipe } from "../../core/models/Recipe";
import { supabase } from "../config/supabaseConfig"

const api = supabase;

export const RecipeApi = {
    
    getAll: () => api.from('recipes').select('*'),
    findById: (id: number) => api.from('recipes').select('*').eq('id', id).single(),
    create: (data: Recipe) => api.from('recipes').insert(data),
    update: (id: number, data: Recipe) => api.from('recipes').update(data).eq('id', id),
    delete: (id: number) => api.from('recipes').delete().eq('id', id)

}