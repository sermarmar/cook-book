import type React from "react";
import { Card, CardTitle, CardDecription } from "../../../components/Card";
import { Input } from "../../../components/Input";
import { SelectCategory } from "../../common/SelectCategory";
import { SelectDificulties } from "../../common/SelectDificulties";
import { StepsList } from "./StepsList";
import { IngredientsList } from "./IngredientsList";


export const RecipeForm: React.FC = () => {

    return (
        <div className="flex justify-center">
            <Card className="w-2/4">
                <CardTitle>Crear nueva receta</CardTitle>
                <CardDecription>
                    <form className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                            <Input type="text" label="Título" />
                        </div>
                        <div className="col-span-1">
                            <SelectCategory />
                        </div>
                        <div className="col-span-1">
                            <SelectDificulties />
                        </div>
                        <Input type="number" label="Tiempo de preparación (min)" />
                        <Input type="number" label="Porciones" />
                        <div className="col-span-3 mt-5">
                            <IngredientsList />
                        </div>
                        <div className="col-span-3">
                            <StepsList />
                        </div>
                    </form>
                </CardDecription>
            </Card>
        </div>

    );
};
