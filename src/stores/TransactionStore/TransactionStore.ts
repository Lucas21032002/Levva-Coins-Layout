import { createStore } from "effector";

import { loadTransaction, loadCreateTransactionDone, loadTransactionFail, loadTransactionDone } from "./TransactionEvents";

import { TransactionState } from "./TransactionState";

const initialState: TransactionState = {
    isLoading: false,
    transactions: [],
    hasError: false,
    errorMessage: "",
};

const TransactionStore = createStore<TransactionState>(initialState)
    .on(loadTransaction, (state) => ({
        ...state,
        isLoading: true,
        hasError: false,
        errorMessage: "",
    }))
    .on(loadCreateTransactionDone, (state) => ({
        ...state,
        isLoading: false,
        hasError: false,
        errorMessage: "",
    }))
    .on(loadTransactionDone, (_, data) => ({
        isLoading: false,
        transactions: data,
        hasError: false,
        errorMessage: "",
    }))
    .on(loadTransactionFail, (state, data) => ({
        ...state,
        isLoading: false,
        hasError: data.hasError,
        errorMessage: data.message,
    }))

export default TransactionStore; 