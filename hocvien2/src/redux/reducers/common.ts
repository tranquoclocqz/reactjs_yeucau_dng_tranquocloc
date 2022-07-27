import produce from "immer";
import { AnyAction } from "redux";
import * as types from "redux/types/common";

interface ICommonState {
    actionSuccess: boolean;
    isLoading: boolean;
}

const initialState: ICommonState = {
    actionSuccess: false,
    isLoading: false,
};

const commonReducer = (state = initialState, action: AnyAction) =>
    produce(state, draft => {
        switch (action.type) {
            case types.SET_ACTION_SUCCESS:
                draft.actionSuccess = action.payload;
                break;
            case types.SET_LOADING:
                draft.isLoading = action.payload;
                break;
        }
    });

export default commonReducer;
