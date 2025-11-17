import { useState } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { ComboSelect } from "../../../components/ComboSelect";

export const IngredientsList: React.FC = () => {

    const [ingredients, setIngredients] = useState<string[]>([]);
    
    const handleAddIngredient = () => {
        setIngredients([...ingredients, '']);
    };
    
    const handleRemoveIngredient = (index: number) => {
        const newIngredients = ingredients.filter((_, i) => i !== index);
        setIngredients(newIngredients);
    };

    return (<>
        <Button onClick={handleAddIngredient}>Agregar ingrediente</Button>
            {ingredients.map((ingredient, index) => (
                <div className="mt-5 flex gap-4" key={index}>
                    <div className="w-20">
                        <Input type='number' label="Cantidad" />
                    </div>
                    <div>
                        <ComboSelect list={['g', 'kg', 'ml', 'l', 'taza', 'cucharada', 'cucharadita', 'unidad']} id={`unit-${index}`} label="Unidad" />
                    </div>
                    <div className="grow-12">
                        <Input key={index} type="text" label={`Ingrediente ${index + 1}`} />
                    </div>
                    <div className="self-end">
                        <Button color="danger" onClick={() => handleRemoveIngredient(index)}>Eliminar</Button>
                    </div>
                </div>
        ))}
    </>);

}