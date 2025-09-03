import type { CategoryDto } from "../../infraestructure/dtos/CategoryDto";
import { CategoryApi } from "../../infraestructure/api/CategoryApi";
import type { Category } from "../models/Category";
import { CategoryDtoFactory } from "../factory/CategoryDtoFactory";

export const CategoryService = {
    
    async getCategories(): Promise<CategoryDto[]> {
        // eslint-disable-next-line no-useless-catch
        try {
            if (localStorage.getItem('categories') === 'null') {
                const response = await CategoryApi.getAll();
                const categories = response.data ?? [];
                localStorage.setItem('categories', JSON.stringify(response.data));
                return categories.map((category: Category) => {
                    return CategoryDtoFactory.createFromObject(category);
                });
            } else {
                const categories = localStorage.getItem('categories');
                if (categories) {
                    return JSON.parse(categories) as CategoryDto[];
                }
            }
            return [];
        } catch (error) {
            throw error;
        }
  },

}