import { FoodCard } from "./components/FoodCard";
import type { Food } from "./models/Food";

interface CardListProps {
    list: Food[];
}

export const CardList: React.FC<CardListProps> = ({ list }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {
                list.map((foodItem: Food) => (
                    <FoodCard title={ foodItem.title } category={ foodItem.category } description={ foodItem.category }/>
                ))
            }
        </div>
    );
}