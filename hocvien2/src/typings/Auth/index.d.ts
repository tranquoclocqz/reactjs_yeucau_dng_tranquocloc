import { TypeBoolean } from "typings"
export interface ILogin {
    username: string;
    password: string;
    rememberPassword?: TypeBoolean;
}