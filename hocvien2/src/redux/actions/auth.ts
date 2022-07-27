import * as types from "redux/types/auth"
import { ILogin } from "typings"
export const login = (payload: ILogin) => ({ type: types.LOGIN, payload })
export const loginSuccess = <T>(payload: T) => ({ type: types.LOGIN_SUCCESS, payload })