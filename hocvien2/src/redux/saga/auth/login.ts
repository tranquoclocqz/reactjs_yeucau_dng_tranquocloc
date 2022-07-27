import { call, put } from 'redux-saga/effects';

import {
    loginSuccess
} from 'redux/actions/auth';
import { setActionSuccess, setLoading } from 'redux/actions/common';

import {
    loginService

} from 'services/auth';
import { toast } from "react-toastify"
import { IResponse } from 'typings';

export function* login(payload: any) {
    const variables = payload.payload;
    yield put(setLoading(true));
    try {
        const response: IResponse = yield call(loginService, variables);
        yield put(setLoading(false));
        const { data, status, message } = response || {}
        if (status === 1) {
            toast.success(message)
            yield put(setActionSuccess(true))
            yield put(loginSuccess(data))
        } else {
            toast.error(message)
        }
    } catch (error) {
        yield put(setLoading(false));
        toast.error("Đã xảy ra lỗi với hệ thống, thử lại sau !")
        console.log(error);
    }
}