import { ReactNode } from "react";
import { HeaderContainer, HeaderContent, UserAvatar } from "./styles";
import logo from "../../assets/Logo.svg"
import { Modal } from "../Modal";
import { Form, FormButton, FormInput } from "../../styles/global";
import { CategoryModal } from "./CategoryModal";
import { TransactionModal } from "./TransactionModal";

export function Header() {
    const userAvatar: ReactNode = <UserAvatar src="https://github.com/jemluz.png" />;

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
                     </Form>
                </Modal>
            </HeaderContent>
        </HeaderContainer>
    )
}