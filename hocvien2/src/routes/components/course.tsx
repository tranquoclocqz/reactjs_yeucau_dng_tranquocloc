import { lazy } from 'react';
import { IRoute } from 'typings';

import { PATH } from 'constants/PATH';

import SVG from 'designs/SVG';

export const courseRoute: IRoute = {
  name: 'Khóa học',
  icon: <SVG name="sidebar/course" width={20} height={20} />,
  path: PATH.COURSE.SELF,
  isPrivated: true,
  component: () => <div />,
  children: [
    {
      name: 'Quản lý khóa học - khu vực',
      component: <div>Quản lý khóa học - khu vực</div>,
      icon: <div />,
      path: PATH.COURSE.COURSE_AREA,
      isPrivated: true,
      children: [],
    },
    {
      name: 'Quản lý khóa học',
      component: <div>Quản lý khóa học</div>,
      icon: <div />,
      path: PATH.COURSE.COURSE_LIST,
      isPrivated: true,
      children: [],
    },
    {
      name: 'Chi tiết khóa học',
      component: <div>Chi tiết khóa học</div>,
      icon: <div />,
      path: PATH.COURSE.COURSE_DETAIL,
      isPrivated: true,
      children: [],
    },
  ],
};
