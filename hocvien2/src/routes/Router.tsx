import { IRoute } from 'typings';

import { authRoute } from './components/auth';
import { classRoute } from './components/class';
import { courseRoute } from './components/course';
import { dashboardRoute, homeRoute } from './components/home';
import { invoiceRoute } from './components/invoices';
import { membersRoute } from './components/members';
import { reportRoute } from './components/report';

const flattenRoutes = (routes: IRoute[]): IRoute[] => {
  let flatRoutes = [];
  routes = routes || [];
  routes?.forEach((item) => {
    if (item.children.length !== 0) {
      flatRoutes = [...flatRoutes, ...flattenRoutes(item.children)];
    } else {
      flatRoutes.push(item);
    }
  });
  return flatRoutes;
};

const dashboardRoutes = [
  homeRoute,
  courseRoute,
  classRoute,
  membersRoute,
  invoiceRoute,
  reportRoute,
];
const allRoutes = [...dashboardRoutes, authRoute];
const flattenedRoutes = flattenRoutes(allRoutes);
export {
  allRoutes,
  flattenedRoutes,
  dashboardRoutes,
  dashboardRoute,
  authRoute,
};
