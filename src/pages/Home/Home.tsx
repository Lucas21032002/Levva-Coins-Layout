import { useStore } from "effector-react/compat";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm/Index";
import { Summary } from "../../components/Summary/Index";
import { HomeWrapper, PriceHighlight, TransactionContainer, TransactionTable, TransactionsTableEmpty } from "./style";
import TransactionStore from "../../stores/TransactionStore/TransactionStore";
import { useEffect } from "react";
import GetTransactionUseCase from "../../useCases/GetTransactionsUseCase/GetTransactionsUseCase";

export function Home() {
    const { isLoading, transactions} = useStore(TransactionStore) ;

    const moneyFormat = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    useEffect(() => {
        GetTransactionUseCase.execute();
        console.log({transactions})
    }, [])

    return (
        <>
            <HomeWrapper>
                <Header/>
                <Summary/>
                <SearchForm/>

                <TransactionContainer>
                    <TransactionTable>
                        <thead>
                            <td>Descrição</td>
                            <td>Preço</td>
                            <td>Categoria</td>
                            <td>Data</td>
                        </thead>
                        <tbody>
                        {transactions.length > 0 && transactions.map((transaction) => (
                            <tr>
                                <td width="50%">{transaction.description}</td>
                                <td>
                                    <PriceHighlight variant={transaction.type === 0 ? "income" : "outcome"}>
                                        {moneyFormat.format(transaction.amount)}
                                    </PriceHighlight>
                                </td>
                                <td>{transaction.category.description}</td>
                                <td>{transaction.createdAt}</td>
                            </tr>
                        ))}
                        </tbody>
                    </TransactionTable>
                    {!isLoading && transactions.length === 0 && (
                        <TransactionsTableEmpty>
                            Adicione uma categoria e sua primeira transação :) 
                        </TransactionsTableEmpty>
                    )}
                </TransactionContainer>
            </HomeWrapper>
        </>
    )
}