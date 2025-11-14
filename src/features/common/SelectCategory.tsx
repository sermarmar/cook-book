import { useEffect, useState } from "react";
import { ComboSelect } from "../../components/ComboSelect"
import { CategoryService } from "../../core/services/CategoryService";
import type { Category } from "../../core/models/Category";

interface SelectCategoryProps {
    className?: string;
}

export const SelectCategory: React.FC<SelectCategoryProps> = ({ className = ''}) => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        CategoryService.getCategories().then((data: Category[]) => {
            setCategories(data);
        })
    }, []);

    return (
        <ComboSelect list={ categories } id="categories" label="Categoría" className={ className }/>
    );
}