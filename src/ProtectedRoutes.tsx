import { Navigate, Outlet } from "react-router-dom";
import { validateToken } from "./helpers/validadeToken";

export function ProtectedRoutes() {
    const isAuthenticated = validateToken();

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}