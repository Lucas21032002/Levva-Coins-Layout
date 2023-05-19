import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm/Index";
import { Summary } from "../../components/Summary/Index";
import { HomeWrapper } from "./style";

export function Home() {
    return (
        <>
            <HomeWrapper>
                <Header/>
                <Summary/>
                <SearchForm/>
            </HomeWrapper>
        </>
    )
}