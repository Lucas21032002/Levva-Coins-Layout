import { createEvent } from "effector";

import { RequestError } from "../../domain/request";

export const loadNewAccount = createEvent("loadNewAaccount");
export const loadNewAccountDone = createEvent("loadNewAccountDone");
export const loadNewAccountFail = createEvent<RequestError>("loadnewAccountFail")