// BasicTextField.tsx
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const BasicTextField = ({ placeholder, value, type, onChange }) => {
  return (
    <Box
      sx={{
        "& > :not(style)": { width: "100%" },
      }}
      className="w-full mt-1 border-gray-300 focus:outline-none focus:border-blue-500"
    >
      <TextField
        id={`${placeholder}-input`} // フィールドごとに一意のIDを設定
        type={type}
        label={placeholder}
        onChange={onChange}
        value={value}
        variant="outlined"
      />
    </Box>
  );
};

export default BasicTextField;
