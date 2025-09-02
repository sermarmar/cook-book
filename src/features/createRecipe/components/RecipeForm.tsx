import type React from "react";
import { Card, CardDecription, CardTitle } from "../../../components/Card";
import { SelectCategory } from "../../getCategories/SelectCatagory";

export const RecipeForm: React.FC = () => {
    return (
        <Card>
            <CardTitle>Crear nueva receta</CardTitle>
            <CardDecription>
                <form className="flex flex-col gap-4">
                    <SelectCategory />
                </form>
            </CardDecription>
        </Card>
    );
}