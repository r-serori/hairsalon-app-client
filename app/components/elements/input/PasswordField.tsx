import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

interface PasswordFieldProps {
  id: number;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  id,
  placeholder,
  value,
  onChange,
  required = true,
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange({
      ...e,
      target: { ...e.target, value: newValue },
    });
  };

  return (
    <Box
      sx={{
        "& > :not(style)": { width: "100%" },
      }}
    >
      <TextField
        type={showPassword ? "text" : "password"}
        id={`${placeholder}_${id}_password`}
        label={placeholder}
        value={value}
        onChange={handleChange}
        variant="outlined"
        inputProps={{
          maxLength: 100, // 任意の最大文字数を設定
          sx: {
            "& .MuiInputBase-input": {
              fontWeight: "bold",
            },
            "& .MuiInputLabel-root": {
              fontWeight: "bold",
              color: `${!value && required ? "red" : "blue"}`,
            },
          },
        }}
        error={!passwordRegex.test(value)}
        helperText={
          !passwordRegex.test(value)
            ? "パスワードには英小文字、英大文字、数字、特殊文字をそれぞれ少なくとも1つ含む必要があります"
            : ""
        }
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleTogglePasswordVisibility}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default PasswordField;
