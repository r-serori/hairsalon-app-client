import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
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
  required?: boolean; // 必須フラグ
  error?: boolean; // エラーフラグ
  onValidationChange?: (isValid: boolean) => void;
}

const MultiCheckbox: React.FC<MultiCheckboxProps> = ({
  getOptions,
  optionName,
  onChanger,
  nodesProp,
  role,
  required = false,
  error = false,
  onValidationChange,
}) => {
  const [allowed, setAllowed] = React.useState(false);
  const names: string[] = [];
  const fieldName: string[] = [];

  switch (nodesProp) {
    case "course":
      getOptions.forEach((option) => {
        names.push(option.course_name);
      });
      fieldName.push("コース名");
      break;
    case "option":
      getOptions.forEach((option) => {
        names.push(option.option_name);
      });
      fieldName.push("オプション名");
      break;
    case "merchandise":
      getOptions.forEach((option) => {
        names.push(option.merchandise_name);
      });
      fieldName.push("商品名");
      break;
    case "hairstyle":
      getOptions.forEach((option) => {
        names.push(option.hairstyle_name);
      });
      fieldName.push("ヘアスタイル名");
      break;
    case "names":
      console.log("getOptionsだよ", getOptions);
      Array.isArray(getOptions)
        ? getOptions.forEach((option) => {
            names.push(option.name);
          })
        : names.push(Object(getOptions).name);
      fieldName.push("担当者名");
      break;
    default:
      break;
  }

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const newValue = event.target.value as string[];
    onChanger(event);

    if (required && onValidationChange) {
      onValidationChange(newValue.length > 0);
    }
    setAllowed(newValue.length > 0);
  };

  return (
    <FormControl
      sx={{
        width: "100%",
        marginTop: 0.5,
      }}
    >
      <InputLabel
        id="demo-multiple-checkbox-label"
        sx={{
          width: "100%",
          fontWeight: "bold",
          color: `${required && error && !allowed ? "red" : "blue"}`,
        }}
      >
        {fieldName[0]}
      </InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={optionName ? optionName : []}
        onChange={handleChange}
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
        disabled={role === "スタッフ"}
        sx={{
          whiteSpace: "normal",
          wordBreak: "break-all",
        }}
      >
        {names.length > 1 ? (
          names.map((name, index) => (
            <MenuItem key={index} value={name}>
              <Checkbox
                id={`${name}-${index}`}
                checked={optionName ? optionName.indexOf(name) > -1 : false}
              />
              <ListItemText
                primary={
                  <Typography variant="body1" fontWeight="bold">
                    {name}
                  </Typography>
                }
              />
            </MenuItem>
          ))
        ) : (
          <MenuItem value={names[0]} disabled={true}>
            <Checkbox
              id={`${names[0]}-0`}
              checked={optionName ? optionName.indexOf(names[0]) > -1 : false}
            />
            <ListItemText
              primary={
                <Typography variant="body1" fontWeight="bold">
                  {names[0]}
                </Typography>
              }
            />
          </MenuItem>
        )}
      </Select>
      {required && error && !allowed && (
        <Typography variant="caption" color="error">
          {`${fieldName[0]}を選択してください。`}
        </Typography>
      )}
    </FormControl>
  );
};

export default MultiCheckbox;
