import { AxiosError } from "axios";

import Api from "../../clients/api/api";

import { TransactionValues, NewTransactionParams } from "../../domain/transaction";
import { RequestError } from "../../domain/request";

const createTransaction = async ({
    description,
    amount,
    type,
    categoryId,
}: NewTransactionParams): Promise<void> => {
    return Api.post({
        url: "/Transaction",
        body: {
            description,
            amount,
            type,
            categoryId,
        },
    })
    .then((response) => {
        return response.data
    })
    .catch((err: AxiosError<RequestError>) => {
        throw err.response?.data;
    })
}

const getTransactions = async () : Promise<TransactionValues[]> => {
    return Api.get({
        url: "/Transaction/list",
    })
    .then((response) => {
        return response.data
    })
    .catch((err: AxiosError<RequestError>) => {
        throw err.response?.data;
    })
}

export const NewCategoryService = {
    createTransaction,
    getTransactions,
};

export default NewCategoryService;