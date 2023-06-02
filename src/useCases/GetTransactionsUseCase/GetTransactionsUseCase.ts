import { loadTransaction, loadTransactionDone, loadTransactionFail } from "../../stores/TransactionStore/TransactionEvents";
import { RequestError } from "../../domain/request";
import  TransactionService  from "../../services/TransactionService/TransactionService";
import { TransactionValues } from "../../domain/transaction";

const execute = async (): Promise<void> => {
    loadTransaction();

    return TransactionService.getTransactions()
        .then((transactions: TransactionValues[]) => {
            loadTransactionDone(transactions);
        })
        .catch(({ hasError, message }: RequestError) => {
            loadTransactionFail({ hasError, message });
        }
        )
};

const GetTransactionUseCase = {
    execute,
}

export default GetTransactionUseCase;