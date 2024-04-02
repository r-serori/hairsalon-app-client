

const AuthInput = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="..."
    />
  );
}

export default AuthInput;

