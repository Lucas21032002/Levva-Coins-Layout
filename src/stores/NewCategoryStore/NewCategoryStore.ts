import { createStore } from "effector";

import { loadCreateCategoryDone, loadCategoryDone, loadCategoryFail, loadCategory } from "./NewCategoryEvents";

import { NewCategoryState } from "./NewCategoryState";

const initialState: NewCategoryState = {
    isLoading: false,
    categories: [],
    hasError: false,
    errorMessage: "",
};

const CategoryStore = createStore<NewCategoryState>(initialState)
    .on(loadCategory, (state) => ({
        ...state,
        isLoading: true,
        hasError: false,
        errorMessage: "",
    }))
    .on(loadCreateCategoryDone, (state, data) => ({
        ...state,
        isLoading: false,
        hasError: false,
        errorMessage: "",
        categories: [data, ...state.categories]
    }))
    .on(loadCategoryDone, (_, data) => ({
        isLoading: false,
        categories: data,
        hasError: false,
        errorMessage: "",
    }))
    .on(loadCategoryFail, (state, data) => ({
        ...state,
        isLoading: false,
        hasError: data.hasError,
        errorMessage: "",
    }))

export default CategoryStore; 