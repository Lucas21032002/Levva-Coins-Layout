export interface LoginParams {
    email: string;
    password: string;
}

export interface LoginValues {
    id: string;
    name: string;
    email: string;
    token: string;
}

export interface LoginError {
    hasError: boolean;
    message: string;
}