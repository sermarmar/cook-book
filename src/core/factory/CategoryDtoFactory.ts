import type { CategoryDto } from '../../infraestructure/dtos/CategoryDto';
import type { Category } from '../models/Category';


export const CategoryDtoFactory = {
    createFromObject(obj: CategoryDto): Category {
        return {
            id: obj.id,
            name: obj.name,
            description: '',
            icon: obj.icon,
        };
    }
}