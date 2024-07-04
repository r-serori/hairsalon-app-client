import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import { CollectionsOutlined } from "@mui/icons-material";
import Typography from "@mui/material/Typography";

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
  role?: string;
}

const MultiCheckbox: React.FC<MultiCheckboxProps> = ({
  getOptions,
  optionName,
  onChanger,
  nodesProp,
  role,
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
    case "names":
      getOptions.map((option) => {
        names.push(option.name);
      });
      fieldName.push("担当者名");
      break;
    default:
      break;
  }

  console.log("names", names);
  console.log("fieldName", fieldName);
  console.log("optionName", optionName);

  return (
    <FormControl sx={{ width: "100%", marginTop: 0.5 }}>
      <InputLabel
        id="demo-multiple-checkbox-label"
        sx={{
          width: "100%",
          fontWeight: "bold",
          color: "blue",
        }}
      >
        {fieldName[0]}
      </InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={optionName ? optionName : names}
        onChange={onChanger}
        input={<OutlinedInput label={fieldName[0]} />}
        renderValue={(selected) => (
          <div style={{ whiteSpace: "no-wrap" }}>
            {selected.map((value) => (
              <div className="font-bold" key={value}>
                {value}
              </div>
            ))}
          </div>
        )}
        MenuProps={MenuProps}
        disabled={role === "スタッフ" ? true : false}
        sx={{
          whiteSpace: "normal",
          wordBreak: "break-all",
        }}
      >
        {names.map((name, index) => (
          <MenuItem key={index} value={name}>
            <Checkbox
              id={`${name}-${index}`}
              checked={
                optionName
                  ? optionName.indexOf(name) > -1
                  : names.indexOf(name) > -1
              }

              // checked={names.indexOf(name) > -1 ? true : false}
            />
            <ListItemText
              primary={
                <Typography variant="body1" fontWeight="bold">
                  {name}
                </Typography>
              }
            />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultiCheckbox;
