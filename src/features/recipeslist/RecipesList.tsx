import { useEffect, useState } from "react";
import { FoodCard } from "./components/RecipeCard";
import type { RecipeDto } from "./dtos/RecipeDto";
import { RecipeService } from "./service/RecipeService";

export const RecipesList: React.FC = () => {

    const [list, setList] = useState<RecipeDto[]>([]);

    useEffect(() => {
        RecipeService.getAll().then((data: RecipeDto[]) => {
            setList(data);
        })
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                list.map((recipeItem: RecipeDto) => (
                    <FoodCard title={ recipeItem.title } category={ recipeItem.category } description={ recipeItem.category }/>
                ))
            }
        </div>
    );
}