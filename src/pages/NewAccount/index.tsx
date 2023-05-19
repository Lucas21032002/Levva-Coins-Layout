import { AuthLayout } from "../../layouts/AuthLayout"
import { Form, FormButton, FormInput, Links } from "../../styles/global"

export function NewAccount() {
    return (
        <AuthLayout title="Registro" subtitle="Crie sua conta e começe a gerenciar suas finanças.">
            <Form>
                <FormInput type="text" placeholder="Nome e sobrenome"></FormInput>
                <FormInput type="email" placeholder="E-mail"></FormInput>
                <FormInput type="password" placeholder="Senha"></FormInput>
                <FormInput type="password" placeholder="Confirme sua senha"></FormInput>
                <Links href="#">Já possui conta? Faça login aqui.</Links>
                <FormButton type="submit">Registrar</FormButton>
            </Form>
        </AuthLayout>
    )
}