import { useState, type FC } from "react";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export const StepsList: FC = () => {
    
    const [steps, setSteps] = useState<string[]>([]);

    const handleAddStep = () => {
        setSteps([...steps, '']);
    };

    const handleRemoveStep = (index: number) => {
        const newSteps = steps.filter((_, i) => i !== index);
        setSteps(newSteps);
    };

    return (<>
        <Button onClick={handleAddStep}>Agregar paso</Button>
            {steps.map((step, index) => (
                <div className="mt-5 flex" key={index}>
                    <div className="grow-7">
                        <Input key={index} type="text" label={`Paso ${index + 1}`} />
                    </div>
                    <div className="grow-1 self-end">
                        <Button color="danger" className="ml-3 grow-5" onClick={() => handleRemoveStep(index)}>Eliminar</Button>
                    </div>
                </div>
            ))}
    </>);
}