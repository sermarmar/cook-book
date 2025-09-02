import type { Recipe } from "../models/Recipe";
import { RecipeApi } from "../../infraestructure/api/RecipeApi";
import type { RecipeDto } from "../../infraestructure/dtos/RecipeDto";

export const RecipeService = {
    
    async getAll(): Promise<RecipeDto[]> {
        // eslint-disable-next-line no-useless-catch
        try {
            const response = await RecipeApi.getAll();
            const recipes = response.data ?? [];
            return recipes.map((recipe: Recipe) => ({
                id: recipe.id,
                title: recipe.title,
                category: recipe.categoryId,
                description: recipe.description,
            })) as RecipeDto[];
        } catch (error) {
            throw error;
        }
  },

}