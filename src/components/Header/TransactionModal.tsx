import { useEffect, useRef } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useStore } from "effector-react";

import { ArrowCircleUp, ArrowCircleDown } from "phosphor-react"

import GetCategoryUseCase from "../../useCases/GetCategoriesUseCase/GetCategoriesUseCase";
import NewTransactionUseCase from "../../useCases/NewTransactionUseCase/NewTransactionUseCase";

import CategoryStore from "../../stores/NewCategoryStore/NewCategoryStore";
import TransactionStore from "../../stores/TransactionStore/TransactionStore";

import { NewTransactionButton } from "./styles";

import { Modal } from "../Modal";

import { 
         Form, 
         FormButton, 
         FormError, 
         FormInput,
         FormSelect,
         TransactionTypeButton,
         TransactionTypeContainer,        
        } from "../../styles/global";

import { defaultTheme } from "../../styles/defaultTheme";
import GetTransactionUseCase from "../../useCases/GetTransactionsUseCase/GetTransactionsUseCase";

interface FormProps { 
    description: string;
    price: number,
    type: string,
    categoryId: string;
    userId: number;
    category: string;
}

const formSchema = yup
    .object({
        description: yup.string().required("O nome da transação é obrigatório"),
        price: yup.number().required("O valor da transação é obrigatório.").typeError('O valor precisa de um número'),
        type: yup
            .string()
            .oneOf(["income", "outcome"])
            .required("O tipo da transação é obrigatório"),
        categoryId: yup
            .string()
            .required("A categoria da transação é obrigatória.")
    })
    .required();

export function TransactionModal() {
    const closeModalRef = useRef<HTMLButtonElement>(null);

    const { categories } = useStore(CategoryStore);
    const { isLoading, hasError, errorMessage } = useStore(TransactionStore);
    const user = JSON.parse(window.localStorage.getItem("user") ?? "{}")

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm<FormProps>({
        resolver: yupResolver(formSchema),
    });

    useEffect(() => {
        GetCategoryUseCase.execute();
    }, [])

    async function handleCreateTransaction ({
        description,
        price,
        type,
        categoryId,
        userId,
        category
    }: FormProps ) {
        NewTransactionUseCase.execute({
            description,
            price,
            type: type === "income" ? 0 : 1,
            categoryId,
            userId: userId = user.id,
            category
        }) 
        .then(() => {
            GetTransactionUseCase.execute();
            closeModalRef.current?.click();
        })
        .finally(() => reset())
    }

    return (
        <Modal 
            title="Nova transação"
            trigger={<NewTransactionButton>Nova transação</NewTransactionButton>}
            closeModalRef={closeModalRef}
            >
        <Form onSubmit={handleSubmit(handleCreateTransaction)}>
            <FormInput
                {...register("description")}
                placeholder="Descrição"
            />
            {errors.description && (<FormError>{errors.description.message}</FormError>)}

            <FormInput
            {...register("price")}
                type="number"
                placeholder="Valor"
                step="0.1"
                min="0"
                max="999999"
            />
            {errors.price && <FormError>{errors.price.message}</FormError>}

            <FormSelect {...register("categoryId")}>
                <option value="" selected disabled hidden>
                    Categoria
                </option>
                {categories.map((category) =>(
                    <option value={category.id}>{category.description}</option>
                ))}
            </FormSelect>
            {errors.categoryId && (
                <FormError>{errors.categoryId.message}</FormError>
            )}
            
            <TransactionTypeContainer
                {...register("type")}
                //onChange={(event) => setValue("type", event.target.value)}
                onValueChange={(value: "income" | "outcome") => setValue("type", value)}
            >
                <TransactionTypeButton
                    value="income"
                    variant="income"
                    type="button"
                >
                <ArrowCircleUp size={24} color={defaultTheme["gren-500"]} />
                    Entrada
                </TransactionTypeButton>

                <TransactionTypeButton
                    value="outcome"
                    variant="outcome"
                    type="button"
                >
                <ArrowCircleDown size={24} color={defaultTheme["red-500"]} />
                    Saída
                </TransactionTypeButton>
            </TransactionTypeContainer>
            {errors.type &&  <FormError>{errors.type?.message}</FormError>}

            {hasError && <FormError>{errorMessage}</FormError>}
            
             <FormButton type="submit">{isLoading ? "Carregando..." : "Cadastrar"}</FormButton>
        </Form>
    </Modal>
    )
}