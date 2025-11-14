import { CategoryApi } from "../../infraestructure/api/CategoryApi";
import type { Category } from "../models/Category";
import { CategoryDtoFactory } from "../factory/CategoryDtoFactory";
import type { CategoryDto } from "../../infraestructure/dtos/CategoryDto";

export const CategoryService = {
    
    async getCategories(): Promise<Category[]> {
        // eslint-disable-next-line no-useless-catch
        try {
            if (localStorage.getItem('categories') === null) {
                const response = await CategoryApi.getAll();
                const categories = response.data ?? [];
                categories.map((category: CategoryDto) => {
                    return CategoryDtoFactory.createFromObject(category);
                });
                localStorage.setItem('categories', JSON.stringify(categories));
                return categories;
            } else {
                const categories = localStorage.getItem('categories');
                if (categories) {
                    return JSON.parse(categories) as Category[];
                }
            }
            return [];
        } catch (error) {
            throw error;
        }
  },

}