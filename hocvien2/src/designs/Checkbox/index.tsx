import { UseFormRegister } from 'react-hook-form';

interface ICheckboxProps {
  errorMessage?: string;
  className?: string;
  label: string;
  name: string;
  register: UseFormRegister<any>;
}

const Checkbox: React.FC<ICheckboxProps> = (props) => {
  const { register, name, label, errorMessage, className } = props;
  return (
    <div className={className}>
      <div className="relative flex items-center">
        <input
          id="remember-me"
          name="remember-me"
          type="checkbox"
          className={`w-2 h-2 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500`}
          {...register(name)}
        />
        <label
          htmlFor="remember-me"
          className="block ml-2 text-sm text-gray-900">
          {label}
        </label>
        {errorMessage && (
          <p className="mt-0.5 absolute left-0 -bottom-2 text-red-500 text-12">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default Checkbox;
