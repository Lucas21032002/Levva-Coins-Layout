import { AuthLayout } from "../../layouts/AuthLayout"
import { Form, FormButton, FormError, FormInput, Links } from "../../styles/global"

import { useForm } from 'react-hook-form'; // pesquisar sobre useForm
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import NewAccountUseCase from "../../useCases/NewAccountUseCase/NewAccountUseCase";
import { useStore } from "effector-react/effector-react.mjs";
import newAccountStore from "../../stores/NewAccountStore/NewAccountStore";


interface FormProps {
    name: string;
    email: string;
    password: string;
    confirmPassword: string,
}


const formSchema = yup
    .object({
        name: yup
            .string()
            .required("O nome é obrigatório"),
        email: yup
            .string()
            .email("Digite um e-mail válido")
            .required("O e-mail é obrigatório"),
        password: yup
            .string()
            .required("A senha é obrigatória"),
        confirmPassword: yup
            .string()
            .required("Confira sua senha")
    })
    .required()

export function NewAccount() {
    const { isLoading, hasError, errorMessage } = useStore(newAccountStore);


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormProps> ({
        resolver: yupResolver(formSchema)
    });

    function handleNewAccount({
        name,
        email,
        password,
        confirmPassword,
    }: FormProps) {
        NewAccountUseCase.execute({ name, email, password, confirmPassword })
    }


    return (
        <AuthLayout title="Registro" subtitle="Crie sua conta e começe a gerenciar suas finanças.">
            <Form onSubmit={handleSubmit(handleNewAccount)}>
                <FormInput {...register("name")} type="text" placeholder="Nome e sobrenome"></FormInput>
                { errors.name && <FormError>{errors.name?.message}</FormError>}

                <FormInput {...register("email")} placeholder="E-mail"></FormInput>
                { errors.email && <FormError>{errors.email?.message}</FormError>}

                <FormInput {...register("password")} type="password" placeholder="Senha"></FormInput>
                { errors.password && <FormError>{errors.password?.message}</FormError>}

                <FormInput {...register("confirmPassword")} type="password" placeholder="Confirme sua senha"></FormInput>
                { errors.confirmPassword && <FormError>{errors.confirmPassword?.message}</FormError>}

                {hasError && <FormError>{errorMessage}</FormError>}

                <Links href="/login">Já possui conta? Faça login aqui.</Links>
                <FormButton type="submit">{ isLoading ? "Carregando..." : "Cadastrar" }</FormButton>
            </Form>
        </AuthLayout>
    )
}