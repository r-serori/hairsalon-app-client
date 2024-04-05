const AuthInput = ({ type, placeholder, value, onChange }) => {
  return (
    <div className="rounded-md shadow-sm -space-y-px">
      <div>
        <label htmlFor={placeholder} className="sr-only">
          {placeholder}
        </label>
        <input
          id={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
        />
      </div>
    </div>
  );
};

export default AuthInput;
