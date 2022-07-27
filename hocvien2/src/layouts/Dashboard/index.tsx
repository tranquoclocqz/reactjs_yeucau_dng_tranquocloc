import { Dialog, Transition } from '@headlessui/react';
import React, { useEffect, Fragment, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import withAuth from 'common/HOC/withAuth';

import SVG from 'designs/SVG';

import { dashboardRoutes, flattenedRoutes } from 'routes/Router';

const DashboardLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [height, setHeight] = useState<number>(0);
  const [nameActive, setNameActive] = useState<string>('');
  const [menuActive, setMenuActive] = useState<string>('');
  const [subActive, setSubActive] = useState<string>('');

  useEffect(() => {
    if (location) {
      const curPage = flattenedRoutes.filter(
        (route) => route.path === location.pathname
      );
      const curDashboard = dashboardRoutes.filter((route) =>
        location.pathname.includes(route.path)
      );
      if (curDashboard.length === 1) {
        setMenuActive(curDashboard[0]?.name);
      }
      if (curDashboard.length === 2) {
        setMenuActive(curDashboard[1]?.name);
      }
      setSubActive(curPage[0].name);
      if (curPage) {
        document.title = `${curPage[0].name} | SeoulSpa - Học viên`;
      }
    }
  }, [location]);

  const handleSetHeightForNestedMenu = (index, name) => {
    const allMenu = document.querySelectorAll('#nestedMenu');
    console.log(allMenu);
    console.log(index);
    const heightEl = allMenu[index].clientHeight;
    console.log(height);

    if (nameActive !== name) {
      setNameActive(name);
      setHeight(heightEl);
    } else {
      setNameActive('');
      setHeight(0);
    }
  };
  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40 md:hidden"
          onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <Dialog.Panel className="relative flex flex-col flex-1 w-full max-w-xs pb-4 bg-black">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0">
                  <div className="absolute top-0 right-0 pt-2 -mr-12">
                    <button
                      type="button"
                      className="flex items-center justify-center w-10 h-10 ml-1 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}>
                      <span className="sr-only">Close sidebar</span>
                      {/* <XIcon
                        className="w-6 h-6 text-white"
                        aria-hidden="true"
                      /> */}
                    </button>
                  </div>
                </Transition.Child>

                <div className="flex-1 h-0 mt-5 overflow-y-auto">
                  <nav className="space-y-1 ">
                    {dashboardRoutes.map((item) => {
                      if (item.children?.length === 0 || !item.children) {
                        return (
                          <div
                            key={item.path}
                            className={`flex items-center gap-1 px-1 py-1 duration-300 border-l-2 border-transparent border-solid hover:bg-dark hover:border-green ${
                              menuActive === item.name &&
                              '!border-green bg-dark'
                            }`}>
                            <div className="flex items-center">{item.icon}</div>
                            <div>
                              <Link
                                className="font-bold text-white text-16 "
                                to={item.path}>
                                {item.name}
                              </Link>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div key={item.path}>
                            <div
                              className={`flex items-center gap-1 px-1 py-1 duration-300 border-l-2 border-transparent border-solid hover:bg-dark hover:border-green ${
                                menuActive === item.name &&
                                '!border-green bg-dark'
                              }`}>
                              <div className="flex items-center justify-center">
                                {item.icon}
                              </div>
                              <div className="font-bold text-white text-16 ">
                                {item.name}
                              </div>
                              <div className="absolute right-1">
                                <SVG
                                  name="common/arrow-down"
                                  width={12}
                                  height={12}
                                />
                              </div>
                            </div>
                            <div className="flex flex-col pl-4 text-white ">
                              {item.children.map((chil) => (
                                <Link
                                  className="p-1 duration-300 border-l-2 border-transparent border-solid text-14 opacity-80 hover:opacity-100 hover:bg-dark hover:border-green"
                                  key={chil.path}
                                  to={chil.path}>
                                  {chil.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      }
                    })}
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true">
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-30 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col flex-1 min-h-0 bg-black">
          <div className="flex items-center flex-shrink-0 px-1.5 bg-dark">
            <img
              className="w-auto h-8"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
              alt="Workflow"
            />
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 py-4 space-y-1">
              {dashboardRoutes.map((item, index) => {
                if (item.children?.length === 0 || !item.children) {
                  return (
                    <div
                      key={item.path}
                      id="nestedMenu"
                      className={`flex items-center   gap-1 px-2 py-1 duration-300 border-l-2 border-transparent border-solid hover:bg-dark hover:border-green  ${
                        menuActive === item.name && `!border-green bg-dark `
                      }`}>
                      <div className="flex items-center">{item.icon}</div>
                      <div>
                        <Link className="font-bold text-white " to={item.path}>
                          {item.name}
                        </Link>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={item.path}>
                      <div
                        onClick={() =>
                          handleSetHeightForNestedMenu(index, item.name)
                        }
                        className={`flex relative items-center gap-1 px-1 py-1 duration-300 border-l-2 border-transparent border-solid hover:bg-dark hover:border-green ${
                          menuActive === item.name && '!border-green bg-dark'
                        }`}>
                        <div className="flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div className="font-bold text-white ">{item.name}</div>
                        <div className="absolute right-2">
                          <SVG
                            name="common/arrow-down"
                            width={14}
                            height={14}
                          />
                        </div>
                      </div>
                      <div
                        id="nestedMenu"
                        className={`flex flex-col pl-4 text-white overflow-hidden duration-300  max-h-[${height}px]  `}>
                        {item.children.map((chil) => (
                          <Link
                            className={`px-2 py-1 duration-300 border-l-2 border-transparent border-solid opacity-80 hover:opacity-100 hover:bg-dark hover:border-green ${
                              subActive === chil.name && '!border-green bg-dark'
                            } `}
                            key={chil.path}
                            to={chil.path}>
                            {chil.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }
              })}
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:pl-30">
        <div className="sticky top-0 z-10 flex flex-shrink-0 bg-white shadow">
          <button
            type="button"
            className="text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
            onClick={() => setSidebarOpen(true)}>
            <SVG name="common/hambuger" width={40} height={40} />
          </button>
        </div>
      </div>

      <main className="flex-1 md:pl-30">
        <div className="py-6">
          <div className="px-4 sm:px-6 md:px-8">
            <h1 className="font-semibold text-gray-900 ">Dashboard</h1>
          </div>
          <div className="px-4 sm:px-6 md:px-8">
            {/* Replace with your content */}
            <Outlet />
            {/* /End replace */}
          </div>
        </div>
      </main>
    </div>
  );
};
export default withAuth(DashboardLayout);
