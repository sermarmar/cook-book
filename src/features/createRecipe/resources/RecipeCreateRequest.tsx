export interface RecipeCreateRequest {
    title: string;
    category: string;
    description: string;
    imageUrl?: string;
    ingredients: string[];
    instructions: string;
    prepTime: number;
    servings?: number;
    difficult?: number;
}