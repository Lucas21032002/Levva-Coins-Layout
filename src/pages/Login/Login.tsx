import { AuthLayout } from "../../layouts/AuthLayout"
import { Form, FormInput, FormButton, Links } from "../../styles/global"

export function Login() {
    return (
        <AuthLayout title="Login" subtitle="Gerenciar suas entradas e saídas nunca foi tão simples.">
            <Form>
                <FormInput type="email" placeholder="E-mail"></FormInput>
                <FormInput type="password" placeholder="Senha"></FormInput>
                <Links href="#">Não tem conta? Cadastre-se aqui.</Links>
                <FormButton type="submit">Entrar</FormButton>
            </Form>
        </AuthLayout>
    )
}