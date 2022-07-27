import { ButtonHTMLAttributes } from 'react';

import Spinner from 'components/Spinner';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'primary' | 'secondary';
  label: string;
  loading?: boolean;
}

const Button: React.FC<IButtonProps> = (props) => {
  const {
    className,
    loading = false,
    variant = 'primary',
    label,
    ...res
  } = props;
  const style =
    variant === 'primary'
      ? 'text-white bg-indigo-600  hover:bg-indigo-700 focus:ring-indigo-500'
      : 'text-black bg-transparent   border-black hover:bg-indigo-700 ';
  return (
    <div className={className}>
      <button
        type="submit"
        disabled={loading}
        className={`flex items-center gap-1 justify-center w-full px-2 py-1 text-sm font-medium border border-transparent border-solid rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${style} ${
          loading && 'disabled:bg-opacity-60 disabled:cursor-not-allowed '
        }`}
        {...res}>
        {loading && <Spinner />}
        {label}
      </button>
    </div>
  );
};

export default Button;
