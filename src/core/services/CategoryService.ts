import type { CategoryDto } from "../../infraestructure/dtos/CategoryDto";
import { CategoryApi } from "../../infraestructure/api/CategoryApi";
import type { Category } from "../models/Category";

export const CategoryService = {
    
    async getAll(): Promise<CategoryDto[]> {
        // eslint-disable-next-line no-useless-catch
        try {
            const response = await CategoryApi.getAll();
            const recipes = response.data ?? [];
            return recipes.map((category: Category) => ({
                id: category.id,
                name: category.name,
                icon: category.icon,
            })) as CategoryDto[];
        } catch (error) {
            throw error;
        }
  },

}