import type { Recipe } from "../../core/models/Recipe";
import { supabase } from "../config/supabaseConfig"

const api = supabase;

export const RecipeApi = {
    
    getAll: () => api.from('recetas').select('*'),
    findById: (id: number) => api.from('recetas').select('*').eq('id', id).single(),
    create: (data: Recipe) => api.from('recetas').insert(data),
    update: (id: number, data: Recipe) => api.from('recetas').update(data).eq('id', id),
    delete: (id: number) => api.from('recetas').delete().eq('id', id)

}