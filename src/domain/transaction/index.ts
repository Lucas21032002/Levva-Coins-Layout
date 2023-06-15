import { CategoryValues } from "../category";

export interface NewTransactionParams {
    description: string;
    price: number;
    type: number;
    categoryId: string;
    userId: number;
    category: string;
}

export interface TransactionValues {
    id: string;
    description: string;
    price: number;
    type: number;
    categoryId: string;
    category: CategoryValues;
    date: string;
}