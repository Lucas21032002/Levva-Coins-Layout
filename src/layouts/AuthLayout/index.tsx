import { ReactNode } from "react"
import logoCoins from "../../assets/Logo.svg"
import { AuthBackground, AuthWrapper, AuthContent } from "./styles";

interface AuthLayoutProps {
    title: string;
    subtitle: string;
    children: ReactNode;
}

export function AuthLayout( { title, subtitle, children } : AuthLayoutProps) {
    return(
        <AuthBackground>
            <AuthWrapper>
                <header>
                    <img src={logoCoins}/>
                </header>
                <AuthContent>
                    <div>
                        <h2>{ title }</h2>
                        <p>{ subtitle }</p>
                    </div>
                </AuthContent>
            {children}
            </AuthWrapper>
        </AuthBackground>
    )
}