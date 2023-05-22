import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm/Index";
import { Summary } from "../../components/Summary/Index";
import { HomeWrapper, PriceHighlight, TransactionContainer, TransactionTable } from "./style";

export function Home() {
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
                            <tr> {/* Table row, linha da tabela */}
                                <td width="50%">Desenvolvimento de site</td> {/* coluna da tabela */}
                                <td>
                                    <PriceHighlight variant="income">R$12.000,00</PriceHighlight>
                                </td>
                                <td>Venda</td>
                                <td>13/04/2022</td>
                            </tr>
                            <tr>
                                <td width="50%">Almoço</td>
                                <td>
                                    <PriceHighlight variant="outcome">R$50,00</PriceHighlight>
                                </td>
                                <td>Alimentação</td>
                                <td>13/04/2022</td>
                            </tr>
                        </tbody>
                    </TransactionTable>
                </TransactionContainer>
            </HomeWrapper>
        </>
    )
}