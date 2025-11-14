import type { DificultyDto } from "../../infraestructure/dtos/DificultyDto";
import { DificultApi } from "../../infraestructure/api/DificultApi";
import type { Dificulty } from "../models/Dificulty";
import { DificultyDtoFactory } from "../factory/DificultyDtoFactory";

export const DificultyService = {
    
    async getDificulties(): Promise<Dificulty[]> {
        // eslint-disable-next-line no-useless-catch
        try {
            if (localStorage.getItem('dificulties') === null) {
                const response = await DificultApi.getAll();
                const dificultyDtos = response.data ?? [];
                const dificulties = dificultyDtos.map((dificulty: DificultyDto) => 
                    DificultyDtoFactory.createFromObject(dificulty)
                );
                localStorage.setItem('dificulties', JSON.stringify(dificulties));
                return dificulties;
            } else {
                const dificulties = localStorage.getItem('dificulties');
                if (dificulties) {
                    return JSON.parse(dificulties) as Dificulty[];
                }
            }
            return [];
        } catch (error) {
            throw error;
        }
    },

}