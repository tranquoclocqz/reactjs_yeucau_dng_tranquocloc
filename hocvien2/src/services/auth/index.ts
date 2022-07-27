import axios from "common/utils/api"
import { ILogin } from "typings"

export const loginService = async (variables: ILogin) => {
    return await axios.post("/login", variables)
}