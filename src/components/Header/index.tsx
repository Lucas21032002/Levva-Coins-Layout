import { ReactNode } from "react";
import { HeaderContainer, HeaderContent, SignOutButton, UserAvatar } from "./styles";
import logo from "../../assets/Logo.svg"
import { Modal } from "../Modal";
import { Form, FormButton, FormInput } from "../../styles/global";
import { CategoryModal } from "./CategoryModal";
import { TransactionModal } from "./TransactionModal";
import { router } from "../../Router";

export function Header() {
    const userAvatar: ReactNode = <UserAvatar src="https://github.com/jemluz.png" />;

    function handleSignOut() {
        window.localStorage.removeItem("token");
        router.navigate("/login");
    }

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} />
                <div>
                    <CategoryModal />
                    <TransactionModal />                  
                </div>
                <Modal title="Meu perfil" trigger={userAvatar}>
                     <Form>
                        <UserAvatar
                            src="https://github.com/jemluz.png"
                            variant="large"
                        />
                        <FormInput
                            type="email"
                            placeholder="jemima@jemima.io"
                        />
                        <FormInput
                            type="email"
                            placeholder="jemima@jemima.io"
                            disabled
                        />
                        <FormButton type="submit">Atualizar</FormButton>
                        <SignOutButton type="button" onClick={handleSignOut}>
                            Sair
                        </SignOutButton>
                     </Form>
                </Modal>
            </HeaderContent>
        </HeaderContainer>
    )
}