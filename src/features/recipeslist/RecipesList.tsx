import { useEffect, useState } from "react";
import { FoodCard } from "./components/RecipeCard";
import type { RecipeDto } from "../../infraestructure/dtos/RecipeDto";
import { RecipeService } from "../../core/services/RecipeService";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export const RecipesList: React.FC = () => {

    const [list, setList] = useState<RecipeDto[]>([]);

    useEffect(() => {
        RecipeService.getAll().then((data: RecipeDto[]) => {
            setList(data);
        })
    }, []);

    return (
        <div className="flex">
            <div className="flex gap-4 justify-center my-8 w-full">
                <Input type="text" placeholder="Buscar una receta..." className="w-1/2" />
                <Button><i className="fa-solid fa-plus"></i> Crear receta</Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    list.map((recipeItem: RecipeDto) => (
                        <FoodCard title={ recipeItem.title } category={ recipeItem.category } description={ recipeItem.category }/>
                    ))
                }
            </div>
        </div>
        
    );
}