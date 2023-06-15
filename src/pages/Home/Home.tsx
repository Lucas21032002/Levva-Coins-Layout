import { useStore } from "effector-react/compat";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm/Index";
import { Summary } from "../../components/Summary/Index";
import { HomeWrapper, PriceHighlight, TransactionContainer, TransactionTable, TransactionsTableEmpty } from "./style";
import TransactionStore from "../../stores/TransactionStore/TransactionStore";
import { useEffect, useState } from "react";
import GetTransactionUseCase from "../../useCases/GetTransactionsUseCase/GetTransactionsUseCase";
import CategoryStore from "../../stores/NewCategoryStore/NewCategoryStore";

export function Home() {
    const { isLoading, transactions} = useStore(TransactionStore) ;
    const [ search, setSearch ] = useState("");
    const { categories } = useStore(CategoryStore);

    //const [searchFilter, setSearchFilter ] = useState("")

    //função de busca
    const TransactionsFiltered  = transactions.filter((transaction) => 
        transaction.description.toLowerCase().includes(search))

    const moneyFormat = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    useEffect(() => {
        GetTransactionUseCase.execute();
    }, [])

    return (
        <>
            <HomeWrapper>
                <Header/>
                <Summary/>
                <SearchForm setSearch={setSearch} search={search} />

                <TransactionContainer>
                    <TransactionTable>
                        <thead>
                            <tr>
                                <td>Descrição</td>
                                <td>Preço</td>
                                <td>Categoria</td>
                                <td>Data</td>
                            </tr>
                        </thead>
                        <tbody>
                        {TransactionsFiltered.length > 0 && TransactionsFiltered.map((transaction) => (
                            <tr>
                                <td width="50%">{transaction.description}</td>
                                <td>
                                    <PriceHighlight variant={transaction.type === 0 ? "income" : "outcome"}>
                                        {moneyFormat.format(transaction.price)}
                                    </PriceHighlight>
                                </td>
                                <td>{categories.map((category) => category.id === transaction.categoryId ? category.description : "")}</td>
                                <td>{transaction.date != null && transaction.date.split("T")[0] }</td>
                            </tr>
                        ))}
                        </tbody>
                        { search === null && (
                        <TransactionsTableEmpty>
                           Não achamos essa transação, confira se o nome digitado está correto!
                        </TransactionsTableEmpty>
                    )}
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