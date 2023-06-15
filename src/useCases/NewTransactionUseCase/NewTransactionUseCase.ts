import { loadTransaction, loadCreateTransactionDone, loadTransactionFail } from "../../stores/TransactionStore/TransactionEvents";

import { NewTransactionParams } from "../../domain/transaction";
import { RequestError } from "../../domain/request";
import  TransactionService  from "../../services/TransactionService/TransactionService";

const execute = async ({
    description,
    price,
    type,
    categoryId,
    userId,
    category
}: NewTransactionParams): Promise<void> => {
    loadTransaction();

    return TransactionService.createTransaction({
        description,
        price,
        type,
        categoryId,
        userId,
        category
    })
        .then((transaction: any) => {
            loadCreateTransactionDone(transaction);
        })
        .catch(({ hasError, message }: RequestError) => {
            loadTransactionFail({ hasError, message });
            throw new Error();
        }
        )
};

const NewTransactionUseCase = {
    execute,
}

export default NewTransactionUseCase;