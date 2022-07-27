import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { authRoute } from 'routes/Router';

const AuthLayout = () => {
  const location = useLocation();
  useEffect(() => {
    if (location) {
      const curPage = authRoute.children.filter(
        (route) => location.pathname === route.path
      );

      if (curPage) {
        document.title = `${curPage[0].name} | SeoulSpa - Học viên`;
      }
    }
  }, [location]);
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default AuthLayout;
