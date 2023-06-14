import jwt from "jsonwebtoken";

export function validateToken() {
    const token = localStorage.getItem("token");

    if(!token) return false;

    return jwt.verify(token, "MySecretKeyforapp12", (error) => {
        return error ? false : true;
    });
}