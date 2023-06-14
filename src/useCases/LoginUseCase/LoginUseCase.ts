import { router } from "../../Router";
import { LoginParams, LoginValues } from "../../domain/login";
import { RequestError } from "../../domain/request";
import { LoginService } from "../../services/LoginService/LoginService";
import { loadLoginDone, loadLoginFail, loadLogin } from "../../stores/LoginStore/LoginEvents";

const execute = async ({ email, password }: LoginParams): Promise<void> => {
    const errorCallback = ({ hasError, message}: RequestError) => {
         loadLoginFail({ hasError, message})
    }

    loadLogin();

    return LoginService.authenticateUser({ email, password })
    .then(({ id, name, email, token }: LoginValues) => {
      window.localStorage.setItem("token", token);

      loadLoginDone({ id, name, email, token });

      router.navigate("/home");
    })
    .catch(errorCallback);
};

const LoginUseCase = {
    execute,
}

export default LoginUseCase;
