import { useEffect, useState } from "react";
import { ComboSelect } from "../../components/ComboSelect"
import { DificultyService } from "../../core/services/DificultyService";
import type { Dificulty } from "../../core/models/Dificulty";

interface SelectDificultiesProps {
    className?: string;
}

export const SelectDificulties: React.FC<SelectDificultiesProps> = ({ className = ''}) => {
    const [dificulties, setDificulties] = useState<Dificulty[]>([]);

    useEffect(() => {
        DificultyService.getDificulties().then((data: Dificulty[]) => {
            setDificulties(data);
        })
    }, []);

    return (
        <ComboSelect list={ dificulties } id="dificultades" label="Dificultad" className={ className }/>
    );
}