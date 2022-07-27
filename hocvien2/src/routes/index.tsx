import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ErrorBoundary from 'components/ErrorBoundary';

import {
  flattenedRoutes as routes,
  allRoutes,
  authRoute,
  dashboardRoute,
} from './Router';

export const routers = allRoutes;
const Routers = (props) => {
  const publicRoutes = routes.filter((route) => !route.isPrivated);
  const privatedRoutes = routes.filter((route) => route.isPrivated);
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              key={authRoute.path}
              path={authRoute.path}
              element={authRoute.component}>
              {publicRoutes.map(({ component, path }) => {
                return <Route key={path} path={path} element={component} />;
              })}
            </Route>
            <Route
              path={dashboardRoute.path}
              element={dashboardRoute.component}>
              {privatedRoutes.map(({ component, path }) => {
                return <Route key={path} path={path} element={component} />;
              })}
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routers;
