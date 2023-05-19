import { HeaderContainer, HeaderContent, NewCategoryButton, NewTransactionButton, UserAvatar } from "./styles";
import logo from "../../assets/Logo.svg"

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} />
                <div>
                    <NewCategoryButton>Nova Categoria</NewCategoryButton>
                    <NewTransactionButton>Nova Transação</NewTransactionButton>
                </div>
            </HeaderContent>
            <UserAvatar src="https://github.com/jemluz.png" />
        </HeaderContainer>
    )
}