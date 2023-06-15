import { useStore } from "effector-react";

import TransactionStore from "../../stores/TransactionStore/TransactionStore";

import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./style";
import { defaultTheme } from "../../styles/defaultTheme";

export function Summary() {
    const { transactions } = useStore(TransactionStore);

    const summary = transactions.reduce((acc, transaction) => {
        if(transaction.type === 0 ) {
            acc.deposits += transaction.price;
            acc.total += transaction.price
        } else {
            acc.withdraws += transaction.price;
            acc.total -= transaction.price
        }
        return acc 
    },{
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    const moneyFormat = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color={defaultTheme["yellow-500"]} />
                </header>
                <strong>{moneyFormat.format(summary.deposits)}</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color={defaultTheme["red-500"]} />
                </header>
                <strong>{moneyFormat.format(summary.withdraws)}</strong>
            </SummaryCard>
            <SummaryCard variant="balance">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color={defaultTheme["yellow-500"]}  />
                </header>
                <strong>{moneyFormat.format(summary.total)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}