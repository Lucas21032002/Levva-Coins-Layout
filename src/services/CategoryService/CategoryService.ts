import { AxiosError } from "axios";

import Api from "../../clients/api/api";

import { CategoryValues, newCategoryParams } from "../../domain/category";
import { RequestError } from "../../domain/request";

const createCategory = async ({
    description,
}: newCategoryParams): Promise<void> => {
    return Api.post({
        url: "/category",
        body: {
           description,
        },
    })
    .then((response) => {
        return response.data
    })
    .catch((err: AxiosError<RequestError>) => {
        throw err.response?.data;
    })
}

const getCategories = async () : Promise<CategoryValues[]> => {
    return Api.get({
        url: "/category",
    })
    .then((response) => {
        return response.data
    })
    .catch((err: AxiosError<RequestError>) => {
        throw err.response?.data;
    })
}

export const NewCategoryService = {
    createCategory,
    getCategories,
};