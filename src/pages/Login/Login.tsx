import { AuthLayout } from "../../layouts/AuthLayout"
import { Form, FormInput, FormButton, Links, FormError } from "../../styles/global"

import { useForm } from 'react-hook-form'; // pesquisar sobre useForm
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';


//validações com yup
interface FormProps {
    email: string;
    password: string;
}

const formSchema = yup
    .object({
        email: yup
            .string()
            .email("Digite um e-mail válido")
            .required("O e-mail é obrigatório"),
        password: yup
            .string()
            .required("A senha é obrigatória"),
    })
    .required();

export function Login() {
    
    const {register, handleSubmit, formState: { errors }} = useForm<FormProps>({
        resolver: yupResolver(formSchema)
    })

    function handleLogin ({email, password}: FormProps) {
        console.log({email, password});
        //chamar nossa api
    }

    return (
        <AuthLayout title="Login" subtitle="Gerenciar suas entradas e saídas nunca foi tão simples.">
            <Form onSubmit={handleSubmit(handleLogin)}>
                <FormInput {...register("email")} placeholder="E-mail"></FormInput>
                {errors.email && <FormError>{errors.email.message}</FormError>}

                <FormInput {...register("password")} type="password" placeholder="Senha"></FormInput>
                {errors.password && <FormError>{errors.password.message}</FormError>}

                <Links href="#">Não tem conta? Cadastre-se aqui.</Links>
                <FormButton type="submit">Entrar</FormButton>
            </Form>
        </AuthLayout>
    )
}