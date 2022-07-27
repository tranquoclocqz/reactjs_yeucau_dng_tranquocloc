import produce from "immer"
import * as types from "redux/types/auth"
import { AnyAction } from "redux";
import { setUserLocalStorage } from "common/utils/auth"
import { IUserLocalStorage, IUserResponse } from "typings/User";
interface AuthState {

}

const initialState: AuthState = {

}

const reducer = (state = initialState, action: AnyAction) =>
    produce(state, (draft) => {
        switch (action.type) {
            case types.LOGIN_SUCCESS:
                const { user, token } = action.payload as IUserResponse;
                const { id, username, first_name, email, image_url } = user || {};
                const newUser: IUserLocalStorage = {
                    email, image_url, first_name, username, id, token
                }
                setUserLocalStorage(newUser);
                //do something when login success
                break;
        }
    });

export default reducer;