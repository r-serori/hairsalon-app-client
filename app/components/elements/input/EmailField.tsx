import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface EmailFieldProps {
  id: number;
  value: string;
  disabled?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const EmailField: React.FC<EmailFieldProps> = ({
  id,
  value,
  disabled = false,
  onChange,
  required = true,
}) => {
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

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
        type="email"
        id={`email_${id}`}
        label="Email"
        value={value}
        disabled={disabled}
        onChange={handleChange}
        variant="outlined"
        inputProps={{ maxLength: 50 }} // 任意の最大文字数を設定
        error={!emailRegex.test(value)}
        helperText={
          !emailRegex.test(value) ? "正しいEmail形式で入力してください" : ""
        }
        sx={{
          "& .MuiInputBase-input": {
            fontWeight: "bold",
          },
          "& .MuiInputLabel-root": {
            fontWeight: "bold",
            color: `${!value && required ? "red" : "blue"}`,
          },
        }}
      />
    </Box>
  );
};

export default EmailField;
