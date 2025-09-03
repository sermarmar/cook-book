import { useEffect, useState } from "react";
import { ComboSelect } from "../../components/ComboSelect"
import { CategoryService } from "../../core/services/CategoryService";
import type { CategoryDto } from "../../infraestructure/dtos/CategoryDto";

export const SelectCategory: React.FC = () => {
    const [categories, setCategories] = useState<CategoryDto[]>([]);

    useEffect(() => {
        CategoryService.getCategories().then((data: CategoryDto[]) => {
            setCategories(data);
        })
    }, []);

    return (
        <ComboSelect list={ categories } id="categories" label="Categoría"/>
    );
}