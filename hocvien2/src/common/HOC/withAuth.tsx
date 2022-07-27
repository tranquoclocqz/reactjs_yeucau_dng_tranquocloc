import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { getUserLocalStorage } from 'common/utils/auth';

import { PATH } from 'constants/PATH';

const withAuth =
  <T,>(Component: React.FC<T>) =>
  (props: T) => {
    const navigate = useNavigate();
    useEffect(() => {
      const user = getUserLocalStorage();
      if (!user || user === null) {
        navigate(PATH.AUTH.LOGIN);
      }
    }, []);
    return <Component {...props} />;
  };

export default withAuth;
