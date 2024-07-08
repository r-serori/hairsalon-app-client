import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { createTheme } from "@mui/material/styles";

interface BasicNumberFieldProps {
  id: number;
  placeholder: string;
  value: string | null;
  disabled?: boolean;
  role?: string;
  maxNumber?: number;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onValidationChange?: (isValid: boolean) => void;
}

const BasicNumberField: React.FC<BasicNumberFieldProps> = ({
  id,
  placeholder,
  value,
  disabled = false,
  role,
  maxNumber = 4294967295,
  required = true,
  onChange,
  onValidationChange,
}) => {
  const checkMaxNumber = (inputValue: string) => {
    const numericValue = parseInt(inputValue, 10);
    if (!isNaN(numericValue) && numericValue > maxNumber) {
      return maxNumber.toString();
    }
    return inputValue;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value.replace(/[^\d]/g, ""); // 数字以外を除外
    newValue = checkMaxNumber(newValue);
    onChange({
      ...e,
      target: { ...e.target, value: newValue },
    });
    if (!required) {
      return;
    } else if (required && (newValue === "" || newValue === "0")) {
      onValidationChange(false);
    } else {
      onValidationChange(true);
    }
  };
  const theme = createTheme({
    palette: {
      error: {
        main: "#f44336",
        light: "#e57373",
      },
      primary: {
        main: "#1976d2",
      },
    },
  });

  return (
    <Box
      sx={{
        "& > :not(style)": { width: "100%" },
        width: "100%",
      }}
    >
      <TextField
        id={`${placeholder}_${id}_number`}
        type="number"
        label={placeholder}
        onChange={handleChange}
        value={value === null ? "0" : value}
        variant="outlined"
        disabled={disabled || role === "スタッフ"}
        inputProps={{ max: maxNumber, required, pattern: "\\d*" }}
        error={(!value || value === "0") && required} // 必須項目で空の場合エラー表示
        helperText={(!value || value === "0") && required ? "必須" : "任意"}
        sx={{
          "& .MuiInputBase-input": {
            fontWeight: "bold",
            color: `${
              (value === "0" || !value) && required
                ? theme.palette.error.light
                : "black"
            }`,
          },
          "& .MuiInputLabel-root": {
            fontWeight: "bold",
            color: `${
              (value === "0" || !value) && required
                ? theme.palette.error.main
                : theme.palette.primary.main
            }`,
          },
          "& .MuiFormHelperText-root": {
            color: `${
              (value === "0" || !value) && required
                ? theme.palette.error.main
                : theme.palette.primary.main
            }`,
          },
        }}
      />
    </Box>
  );
};

export default BasicNumberField;
