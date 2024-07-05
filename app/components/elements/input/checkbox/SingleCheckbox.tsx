import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { get } from "http";

interface SingleCheckBoxProps {
  value?: string;
  onChange: (newValue: string) => void;
  getOptions: string[];
  nodeId?: string;
  role?: string;
  required?: boolean;
  onValidationChange?: (isValid: boolean) => void;
}

const SingleCheckBox: React.FC<SingleCheckBoxProps> = ({
  value,
  onChange,
  getOptions,
  nodeId,
  role,
  required = true,
  onValidationChange,
}) => {
  // labelに応じてoptionsを設定

  const changeValue = (newValue: string) => {
    onChange(newValue);
    if (required && newValue === "") {
      onValidationChange(false);
    }
  };

  return (
    <div className="w-full mt-1 border-gray-300 focus:outline-none focus:border-blue-500 ">
      <Autocomplete
        disablePortal
        id={nodeId}
        options={getOptions}
        value={value}
        onChange={
          (event, newValue) => changeValue(newValue) // オプションが選択されたときにonChangeを呼び出す
        } // オプションが選択されたときにonChangeを呼び出す
        renderInput={(params) => (
          <TextField
            {...params}
            label={`${value}`}
            required={required} // TextField に required を設定
          />
        )}
        renderOption={(props, option) => (
          <li
            {...props}
            style={{
              fontWeight: "bold",
            }}
          >
            {option}
          </li>
        )}
        disabled={role === "スタッフ" ? true : false}
        sx={{
          "& .MuiInputBase-input": {
            fontWeight: "bold",
          },
          "& .MuiInputLabel-root": {
            fontWeight: "bold",
            color: "blue",
          },
        }}
      />
    </div>
  );
};

export default SingleCheckBox;
