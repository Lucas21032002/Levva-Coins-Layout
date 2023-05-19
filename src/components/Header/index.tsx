import { ReactNode } from "react";
import { HeaderContainer, HeaderContent, NewCategoryButton, NewTransactionButton, UserAvatar } from "./styles";
import logo from "../../assets/Logo.svg"
import { Modal } from "../Modal";
import { Form, FormButton, FormInput, TransactionTypeButton, TransactionTypeContainer } from "../../styles/global";
import { ArrowCircleUp, ArrowCircleDown } from "phosphor-react"
import { defaultTheme } from "../../styles/defaultTheme";

export function Header() {
    const newCategoryButton: ReactNode = <NewCategoryButton>Nova categoria</NewCategoryButton>;

    const newTransactionButton: ReactNode = <NewTransactionButton>Nova transação</NewTransactionButton>;

    const userAvatar: ReactNode = <UserAvatar src="https://github.com/jemluz.png" />;

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} />
                <div>
                    <Modal title="Nova categoria" trigger={newCategoryButton}>
                        <p>Cadastre uma categoria antes de criar uma transação</p>
                        <Form>
                            <FormInput
                                type="text"
                                placeholder="Descrição"
                            />
                            <FormButton type="submit">Cadastrar</FormButton>
                        </Form>
                    </Modal>
                    <Modal title="Nova transação" trigger={newTransactionButton}>
                        <Form>
                            <FormInput
                                type="text"
                                placeholder="Descrição"
                                required
                            />
                            <FormInput
                                type="number"
                                placeholder="Valor"
                                required
                            />
                            <FormInput
                                type="text"
                                placeholder="Categoria"
                                required
                            />
                            <TransactionTypeContainer>
                                <TransactionTypeButton
                                    variant="income"
                                    type="button"
                                >
                                    <ArrowCircleUp   size={24} color={defaultTheme["gren-500"]} />
                                    Entrada
                                </TransactionTypeButton>

                                <TransactionTypeButton
                                    variant="outcome"
                                    type="button"
                                >
                                    <ArrowCircleDown size={24} color={defaultTheme["red-500"]} />
                                    Saída
                                </TransactionTypeButton>
                            </TransactionTypeContainer>
                                <FormButton type="submit">Cadastrar</FormButton>
                        </Form>
                    </Modal>
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