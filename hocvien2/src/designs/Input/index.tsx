import { InputHTMLAttributes, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';

import SVG from 'designs/SVG';

interface IInputProps extends InputHTMLAttributes<any> {
  required: boolean;
  errorMessage: string;
  className?: string;
  label: string;
  name: string;
  placeholder?: string;
  isPassword?: boolean;
  register: UseFormRegister<any>;
}

const Input: React.FC<IInputProps> = (props) => {
  const {
    register,
    placeholder,
    name,
    label,
    required,
    errorMessage,
    className,
    isPassword = false,
    ...res
  } = props;
  const [showPass, setShowPass] = useState(false);
  return (
    <div className={className}>
      {label && (
        <label htmlFor="email" className="block text-sm text-gray-700">
          {label}
          <span className="ml-0.5 text-red-500">{required && '*'}</span>
        </label>
      )}
      <div className="relative mt-1">
        <input
          autoComplete="off"
          placeholder={placeholder}
          className={`block w-full px-2 py-1 placeholder-gray-400 border border-solid rounded-md shadow-sm appearance-none border-grey-dark focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
            errorMessage && '!border-red-600'
          }`}
          type={showPass ? 'password' : 'text'}
          {...register(name)}
          {...res}
        />
        {isPassword && (
          <div
            className="absolute -translate-y-1/2 cursor-pointer right-2 top-1/2"
            onClick={() => setShowPass(!showPass)}>
            {showPass ? (
              <SVG name="common/hide-pass" />
            ) : (
              <SVG name="common/show-pass" />
            )}
          </div>
        )}
        {errorMessage && (
          <p className="mt-0.5 absolute left-0 -bottom-2 text-red-500 text-12">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Input;
