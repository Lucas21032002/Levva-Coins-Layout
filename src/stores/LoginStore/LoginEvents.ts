import { createEvent } from "effector";

import { RequestError } from "../../domain/request";
import { LoginValues } from "../../domain/login";

export const loadLogin = createEvent("loadLogin");
export const loadLoginDone = createEvent<LoginValues>("loadLoginDone");
export const loadLoginFail = createEvent<RequestError>("loadLoginFail");