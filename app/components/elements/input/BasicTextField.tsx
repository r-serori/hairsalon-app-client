import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface BasicTextFieldProps {
  id: number;
  placeholder: string;
  value: string;
  disabled?: boolean;
  role?: string;
  decideLength?: number;
  multiline?: boolean;
  rows?: number;
  regex?: RegExp;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BasicTextField: React.FC<BasicTextFieldProps> = ({
  id,
  placeholder,
  value,
  disabled = false,
  role,
  decideLength = 100,
  multiline = false,
  rows = 1,
  regex = /[<>&'"\\;\s--]/g,
  required = true,
  onChange,
}) => {
  const removeInvalidChars = (str: string) => {
    return str.replace(regex, "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = removeInvalidChars(e.target.value);
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
        id={`${placeholder}_${id}_text`}
        type="text"
        label={placeholder}
        onChange={handleChange}
        value={value}
        variant="outlined"
        disabled={disabled || role === "スタッフ"}
        multiline={multiline}
        rows={multiline ? rows : undefined}
        inputProps={{ maxLength: decideLength, required }}
        error={!value && required} // 必須項目で空の場合エラー表示
        helperText={!value && required ? `${placeholder}は必須です` : ""}
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

export default BasicTextField;
