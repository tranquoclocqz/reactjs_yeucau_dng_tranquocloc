import { lazy } from 'react';
import { IRoute } from 'typings';

import { PATH } from 'constants/PATH';

const Auth = lazy(() => import('layouts/Auth'));
const Login = lazy(() => import('pages/Login'));

export const authRoute: IRoute = {
  name: 'Authen',
  component: <Auth />,
  icon: <div></div>,
  path: PATH.AUTH.SEFT,
  isPrivated: false,
  children: [
    {
      name: 'Login',
      component: <Login />,
      icon: <div></div>,
      path: PATH.AUTH.LOGIN,
      isPrivated: false,
      children: [],
    },
  ],
};
