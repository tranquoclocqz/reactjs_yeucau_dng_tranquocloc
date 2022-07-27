import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { ILogin, IRootState } from 'typings';
import * as yup from 'yup';

import { getUserLocalStorage } from 'common/utils/auth';

import { PATH } from 'constants/PATH';

import Button from 'designs/Button';
import Checkbox from 'designs/Checkbox';
import Input from 'designs/Input';

import { login } from 'redux/actions/auth';
import { setActionSuccess } from 'redux/actions/common';

interface ILoginProps {}
const schema = yup
  .object()
  .shape<{ [key in keyof ILogin]: any }>({
    username: yup.string().required('Trường này không được bỏ trống !'),
    password: yup.string().required('Trường này không được bỏ trống !'),
  })
  .required();

const Login: React.FC<ILoginProps> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const { isLoading, actionSuccess } = useSelector(
    (state: IRootState) => state.common
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (getUserLocalStorage() !== null) {
      navigate(PATH.HOME);
    }
  }, []);

  useEffect(() => {
    if (actionSuccess) {
      dispatch(setActionSuccess(false));
      navigate(PATH.HOME);
    }
  }, [actionSuccess]);

  const onSubmit = (data: ILogin) => {
    data.rememberPassword
      ? (data.rememberPassword = 1)
      : (data.rememberPassword = 0);
    dispatch(login(data));
  };
  return (
    <div className="flex flex-col justify-center min-h-full py-12 sm:p-2">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="p-2 bg-white shadow sm:rounded-lg sm:px-3">
          <h1 className="w-full font-bold text-center text-32">Đăng nhập</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3"
            action="#"
            method="POST">
            <Input
              label="Tên đăng nhập"
              required
              type="number"
              errorMessage={errors.username?.message}
              name="username"
              register={register}
            />

            <Input
              label="Mật khẩu"
              required
              errorMessage={errors.password?.message}
              name="password"
              isPassword
              register={register}
            />

            <div className="flex items-center justify-between">
              <Checkbox
                label="Remember me"
                name="rememberPassword"
                register={register}
              />
            </div>

            <Button loading={isLoading} type="submit" label="Đăng nhập" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
