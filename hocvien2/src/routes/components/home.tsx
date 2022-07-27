import { lazy } from 'react';
import { IRoute } from 'typings';

import { PATH } from 'constants/PATH';

import SVG from 'designs/SVG';

const Dashboard = lazy(() => import('layouts/Dashboard'));
const Home = lazy(() => import('pages/Home'));

export const dashboardRoute: IRoute = {
  name: 'Dashboard',
  component: <Dashboard />,
  icon: <div />,
  path: PATH.DASHBOARD,
  isPrivated: true,
  children: [],
};
export const homeRoute: IRoute = {
  name: 'Home',
  component: <Home />,
  icon: <SVG name="sidebar/home" width={20} height={20} />,
  path: PATH.HOME,
  isPrivated: true,
  children: [],
};
