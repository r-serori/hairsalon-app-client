import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface BasicNumberFieldProps {
  id: number;
  placeholder: string;
  value: string;
  disabled?: boolean;
  role?: string;
  maxNumber?: number;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
  };

  return (
    <Box
      sx={{
        "& > :not(style)": { width: "100%" },
      }}
    >
      <TextField
        id={`${placeholder}_${id}_number`}
        type="number"
        label={placeholder}
        onChange={handleChange}
        value={value}
        variant="outlined"
        disabled={disabled || role === "スタッフ"}
        inputProps={{ max: maxNumber, required, pattern: "\\d*" }}
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

export default BasicNumberField;
