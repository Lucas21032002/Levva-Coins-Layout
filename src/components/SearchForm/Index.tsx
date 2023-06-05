import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";

export function SearchForm({setSearch, search}) {

    return (
        <SearchFormContainer>
            <input 
                type="text" 
                placeholder="Busque por transações" 
                value={search}
                onChange={(e) => setSearch(e.target.value)} />
            <button>
                <MagnifyingGlass size={20}/>
                Buscar
            </button>
        </SearchFormContainer>
    )
}