import type { DificultyDto } from '../../infraestructure/dtos/DificultyDto';
import type { Dificulty } from '../models/Dificulty';

export const DificultyDtoFactory = {
    createFromObject(obj: DificultyDto): Dificulty {
        return {
            id: obj.id,
            name: obj.level,
            score: obj.score,
        };
    }
}