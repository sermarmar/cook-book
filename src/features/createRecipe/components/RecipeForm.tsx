import type React from "react";
import { Card, CardDecription, CardTitle } from "../../../components/Card";
import { SelectCategory } from "../../common/SelectCategory";
import { Input } from "../../../components/Input";
import { SelectDificulties } from "../../common/SelectDificulties";

export const RecipeForm: React.FC = () => {
    return (
        <Card>
            <CardTitle>Crear nueva receta</CardTitle>
            <CardDecription>
                <form className="w-full grid grid-cols-3 gap-4">
                    <Input type="text" label="Título" className="row-3"/>
                    <SelectCategory className="row-6"/>
                    <SelectDificulties className="row-6"/>
                </form>
            </CardDecription>
        </Card>
    );
}