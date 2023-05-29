import { AxiosError } from "axios";

import Api from "../../clients/api/api";

import { LoginParams, LoginValues, LoginError } from "../../domain/login";

const authenticateUser = async ({
    email,
    password,
}: LoginParams): Promise<LoginValues> => {
    return Api.post({
        url: "/auth",
        body: {
            email,
            password
        },
    })
    .then((response) => {
        return response.data;
    })
    .catch((err: AxiosError<LoginError>) => { //tipando um tipo (????)
        throw err.response?.data
    })
}

export const LoginService = {
    authenticateUser,
}
