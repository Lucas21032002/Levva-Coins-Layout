import { CategoryValues } from "../../domain/category";

export interface NewCategoryState {
    isLoading: boolean;
    hasError: boolean;
    errorMessage: string;
    categories: CategoryValues[];
}