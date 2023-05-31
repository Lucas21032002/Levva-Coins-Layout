import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { NewAccount } from './pages/NewAccount'
import { Home } from './pages/Home/Home'
import { ProtectedRoutes } from './ProtectedRoutes'
import { validateToken } from './helpers/validadeToken'

const isAuthenticated = validateToken();

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route element={isAuthenticated ? <Navigate to="/home"/> : <Outlet />}>
                <Route path="/" element={<Navigate to="/login" />} />
                <Route path="/login" element={<Login/>}/>
            </Route>
            <Route path="/new-account" element={<NewAccount/>}/>
            <Route element={<ProtectedRoutes/>}>
                <Route path='/home' element={<Home/>}  />
            </Route>
            <Route path="/home" element={<Home/>}/>
        </Route>
    )
)