import { lazy } from 'react';
import { IRoute } from 'typings';

import { PATH } from 'constants/PATH';

import SVG from 'designs/SVG';

// const StaffTechnical = lazy(() => import('pages/staff/Technical'));

export const invoiceRoute: IRoute = {
  name: 'Hóa đơn',
  icon: <SVG name="sidebar/invoice" width={20} height={20} />,
  path: PATH.INVOICE.SELF,
  isPrivated: true,
  component: () => <div />,
  children: [
    {
      name: 'Quản lý học phí',
      component: <div>Quản lý học phí</div>,
      icon: <div />,
      path: PATH.INVOICE.FEE,
      isPrivated: true,
      children: [],
    },
    {
      name: 'Phiếu thu chưa nhập',
      component: <div>Phiếu thu chưa nhập</div>,
      icon: <div />,
      path: PATH.INVOICE.CONFIRM,
      isPrivated: true,
      children: [],
    },
    {
      name: 'Xác nhận visa',
      component: <div>Xác nhận visa</div>,
      icon: <div />,
      path: PATH.INVOICE.VISA,
      isPrivated: true,
      children: [],
    },
    {
      name: 'Chuyển khoản ngân hàng',
      component: <div>Chuyển khoản ngân hàng</div>,
      icon: <div />,
      path: PATH.INVOICE.BANKING,
      isPrivated: true,
      children: [],
    },
  ],
};
