import { lazy } from 'react';
import { IRoute } from 'typings';

import { PATH } from 'constants/PATH';

import SVG from 'designs/SVG';

// const StaffTechnical = lazy(() => import('pages/staff/Technical'));

export const reportRoute: IRoute = {
  name: 'Báo cáo',
  icon: <SVG name="sidebar/report" width={20} height={20} />,
  path: PATH.REPORT.SELF,
  isPrivated: true,
  component: <div />,
  children: [
    {
      name: 'Báo cáo học viên',
      component: <div>Báo cáo học viên</div>,
      icon: <div />,
      path: PATH.REPORT.MEMBER,
      isPrivated: true,
      children: [],
    },
    {
      name: 'Báo cáo doanh thu',
      component: <div>Báo cáo doanh thu</div>,
      icon: <div />,
      path: PATH.REPORT.REVENUE,
      isPrivated: true,
      children: [],
    },
    {
      name: 'Báo cáo hoa hồng TVV',
      component: <div>Báo cáo hoa hồng TVV</div>,
      icon: <div />,
      path: PATH.REPORT.COMMISSION,
      isPrivated: true,
      children: [],
    },
    {
      name: 'Báo cáo chăm sóc',
      component: <div>Báo cáo chăm sóc</div>,
      icon: <div />,
      path: PATH.REPORT.CARE,
      isPrivated: true,
      children: [],
    },
  ],
};
