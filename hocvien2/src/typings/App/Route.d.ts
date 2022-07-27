import { React, ReactNode } from 'react';
export interface IRoute {
    name: string;
    component: JSX.Element<any, any>,
    icon: ReactNode,
    path: string;
    isPrivated: boolean;
    children: IRoute[];
}