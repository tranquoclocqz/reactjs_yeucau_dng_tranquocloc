import { lazy } from 'react';
import { IRoute } from 'typings';

import { PATH } from 'constants/PATH';

import SVG from 'designs/SVG';

// const StaffTechnical = lazy(() => import('pages/staff/Technical'));

export const classRoute: IRoute = {
  name: 'Lớp học',
  icon: <SVG name="sidebar/class" width={20} height={20} />,
  path: PATH.CLASS.SELF,
  isPrivated: true,
  component: <div />,
  children: [
    {
      name: 'Danh sách lớp học',
      component: <div>Danh sách lớp học</div>,
      icon: <div />,
      path: PATH.CLASS.LIST,
      isPrivated: true,
      children: [],
    },
  ],
};
