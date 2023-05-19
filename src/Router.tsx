import { Routes, Route } from 'react-router-dom'
import { Login } from './pages/Login/Login'
import { NewAccount } from './pages/NewAccount'
import { Home } from './pages/Home/Home'


export function Router() {
    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/new-account" element={<NewAccount/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
    )
}