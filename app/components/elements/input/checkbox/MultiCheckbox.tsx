import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";

const MenuProps = {
  PaperProps: {
    style: {},
  },
};

interface MultiCheckboxProps {
  getOptions: any;
  optionName?: any;
  onChanger: (event: SelectChangeEvent<string[]>) => void;
  nodesProp: string;
}

const MultiCheckbox: React.FC<MultiCheckboxProps> = ({
  getOptions,
  optionName,
  onChanger,
  nodesProp,
}) => {
  const names = [];

  const fieldName = [];

  switch (nodesProp) {
    case "course":
      getOptions.map((option) => {
        names.push(option.course_name);
      });
      fieldName.push("コース名");
      break;
    case "option":
      getOptions.map((option) => {
        names.push(option.option_name);
      });
      fieldName.push("オプション名");
      break;
    case "merchandise":
      getOptions.map((option) => {
        names.push(option.merchandise_name);
      });
      fieldName.push("商品名");
      break;
    case "hairstyle":
      getOptions.map((option) => {
        names.push(option.hairstyle_name);
      });
      fieldName.push("ヘアスタイル名");
      break;
    case "attendance":
      getOptions.map((option) => {
        names.push(option.attendance_name);
      });
      fieldName.push("担当者名");
      break;
    default:
      break;
  }

  return (
    <FormControl sx={{ width: "100%", marginTop: 0.5 }}>
      <InputLabel id="demo-multiple-checkbox-label" sx={{ width: "100%" }}>
        {fieldName[0]}
      </InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={optionName ? optionName : names}
        onChange={onChanger}
        input={<OutlinedInput label={fieldName[0]} />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {names.map((name, index) => (
          <MenuItem key={index} value={name}>
            <Checkbox
              id={`${name} - ${index}`}
              checked={
                optionName
                  ? optionName.indexOf(name) > -1
                  : names.indexOf(name) > -1
              }
            />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultiCheckbox;
