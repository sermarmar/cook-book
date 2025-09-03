import type { CategoryDto } from '../../infraestructure/dtos/CategoryDto';
import type { Category } from '../models/Category';


export const CategoryDtoFactory = {
    createFromObject(obj: Category): CategoryDto {
        return {
            id: obj.id,
            name: obj.name,
            icon: obj.icon,
        };
    }
}