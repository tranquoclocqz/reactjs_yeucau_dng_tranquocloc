import { all, takeLatest } from 'redux-saga/effects';

import * as types from 'redux/types/auth';

import {
    login
} from './login';

export default function* authSaga() {
    yield all([
        takeLatest(types.LOGIN, login),

    ]);
}
