import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

interface IToastProps extends PropsWithChildren {}

const Toast: React.FC<IToastProps> = (props) => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      {props.children}
    </>
  );
};

export default Toast;
