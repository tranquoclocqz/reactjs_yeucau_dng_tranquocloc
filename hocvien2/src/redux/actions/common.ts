import * as types from "redux/types/common"

export const setLoading = (payload: boolean) => ({ type: types.SET_LOADING, payload })
export const setActionSuccess = (payload: boolean) => ({ type: types.SET_ACTION_SUCCESS, payload })