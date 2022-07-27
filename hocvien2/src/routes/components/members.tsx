import { lazy } from 'react';
import { IRoute } from 'typings';

import { PATH } from 'constants/PATH';

import SVG from 'designs/SVG';

// const StaffTechnical = lazy(() => import('pages/staff/Technical'));

export const membersRoute: IRoute = {
  name: 'Học viên',
  icon: <SVG name="sidebar/member" width={20} height={20} />,
  path: PATH.MEMBER.SELF,
  isPrivated: true,
  component: <div />,
  children: [
    {
      name: 'Quản lý học viên',
      component: <div>Quản lý học viên</div>,
      icon: <div />,
      path: PATH.MEMBER.LIST,
      isPrivated: true,
      children: [],
    },
    {
      name: 'Chăm sóc học viên',
      component: <div>Chăm sóc học viên</div>,
      icon: <div />,
      path: PATH.MEMBER.CARE,
      isPrivated: true,
      children: [],
    },
  ],
};
