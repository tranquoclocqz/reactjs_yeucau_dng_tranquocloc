import { USER_HV_KEY } from "constants/app"
import { IUserLocalStorage } from "typings/User"

export const setUserLocalStorage = (data: IUserLocalStorage) => {
    if (typeof window !== "undefined") {
        localStorage.setItem(USER_HV_KEY, JSON.stringify(data))
    }
}
export const getUserLocalStorage = (): IUserLocalStorage => {
    if (typeof window !== "undefined") {
        const user = localStorage.getItem(USER_HV_KEY)
        return JSON.parse(user) || null
    }
}
export const updateTokenLocalStorage = (token: string) => {
    if (typeof window !== "undefined") {
        const user: IUserLocalStorage = JSON.parse(localStorage.getItem(USER_HV_KEY))
        if (user) {
            user.token = token;
            localStorage.setItem(USER_HV_KEY, JSON.stringify(user))
        }
    }
}
export const clearLocalByKey = (key: string) => {
    localStorage.removeItem(key)
}