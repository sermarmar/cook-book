export interface RecipeDto {
    id: string;
    title: string;
    category: string;
    description: string;
    imageUrl?: string;
    ingredients: string[];
    instructions: string;
    prepTime?: number; // en minutos
    cookTime?: number; // en minutos
    servings?: number;
}