export interface RecipeIngredientDto {
    id: string;
    recipeId: string;
    ingredientId: string;
    quantity: string;
    unitId?: string;
    isOptional?: boolean;
    notes?: string;
}       