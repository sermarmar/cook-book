import type React from "react";
import { Card, CardDecription, CardTitle } from "../../../components/Card";
import { SelectCategory } from "../../common/SelectCategory";
import { Input } from "../../../components/Input";
import { SelectDificulties } from "../../common/SelectDificulties";
import { useState } from "react";
import { Button } from "../../../components/Button";
import { ComboSelect } from "../../../components/ComboSelect";

export const RecipeForm: React.FC = () => {

    const [steps, setSteps] = useState<string[]>([]);
    const [ingredients, setIngredients] = useState<string[]>([]);

    const handleAddStep = () => {
        setSteps([...steps, '']);
    }

    const handleRemoveStep = (index: number) => {
        const newSteps = steps.filter((_, i) => i !== index);
        setSteps(newSteps);
    }

    const handleStepChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const newSteps = [...steps];
        newSteps[index] = event.target.value;
        setSteps(newSteps);
    }

    const handleAddIngredient = () => {
        setIngredients([...ingredients, '']);
    }

    const handleRemoveIngredient = (index: number) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    }

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
                            <SelectCategory/>
                        </div>
                        <div className="col-span-1">
                            <SelectDificulties />
                        </div>
                        <Input type="number" label="Tiempo de preparación (min)" />
                        <Input type="number" label="Porciones" />
                        <div className="col-span-3 mt-5">
                            <Button onClick={ handleAddIngredient }>Agregar ingrediente</Button>
                            { ingredients.map((ingredient, index) => (
                                <div className="mt-5 flex gap-4" key={ index }>
                                    <div className="w-20">
                                        <Input type='number' label="Cantidad"/>
                                    </div>
                                    <div>
                                        <ComboSelect list={ ['g', 'kg', 'ml', 'l', 'taza', 'cucharada', 'cucharadita', 'unidad'] } id={ `unit-${ index }` } label="Unidad"/>
                                    </div>
                                    <div className="grow-12">
                                        <Input key={ index } type="text" label={ `Ingrediente ${ index + 1 }` } />
                                    </div>
                                    <div className="self-end">
                                        <Button color="danger" onClick={ () => handleRemoveIngredient(index) }>Eliminar</Button>
                                    </div>
                                </div>
                            )) }
                        </div>
                        <div className="col-span-3">
                            <Button onClick={ handleAddStep }>Agregar paso</Button>
                            { steps.map((step, index) => (
                                <div className="mt-5 flex" key={ index }>
                                    <div className="grow-7">
                                        <Input key={ index } type="text" label={ `Paso ${ index + 1 }` } onChange={ (e) => handleStepChange(index, e) } />
                                    </div>
                                    <div className="grow-1 self-end">
                                        <Button color="danger" className="ml-3 grow-5" onClick={ () => handleRemoveStep(index) }>Eliminar</Button>
                                    </div>
                                </div>
                            )) }
                        </div>
                    </form>
                </CardDecription>
            </Card>
        </div>
        
    );
}