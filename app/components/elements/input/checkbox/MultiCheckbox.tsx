import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { getOption } from "../../../../store/options/optionSlice";
import { createTheme } from "@mui/material/styles";

interface MultiCheckboxProps {
  getOptions: [] | Object;
  optionName: string[] | null;
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

  console.log("getOptions", getOptions);

  switch (nodesProp) {
    case "course":
      Array.isArray(getOptions) && getOptions.length > 1
        ? getOptions.forEach((option) => {
            names.push(option.course_name);
          })
        : Array.isArray(getOptions) && getOptions.length === 0
        ? names.push("コースがありません。コース画面から新規作成してください！")
        : names.push(getOptions[0].course_name);
      fieldName.push("コース");
      break;
    case "option":
      Array.isArray(getOptions) && getOptions.length > 1
        ? getOptions.forEach((option) => {
            names.push(option.option_name);
          })
        : Array.isArray(getOptions) && getOptions.length === 0
        ? names.push(
            "オプションがありません。オプション画面から新規作成してください！"
          )
        : names.push(getOptions[0].option_name);
      fieldName.push("オプション");
      break;
    case "merchandise":
      Array.isArray(getOptions) && getOptions.length > 1
        ? getOptions.forEach((option) => {
            names.push(option.merchandise_name);
          })
        : Array.isArray(getOptions) && getOptions.length === 0
        ? names.push("物販がありません。物販画面から新規作成してください！")
        : names.push(getOptions[0].merchandise_name);
      fieldName.push("物販");
      break;
    case "hairstyle":
      Array.isArray(getOptions) && getOptions.length > 1
        ? getOptions.forEach((option) => {
            names.push(option.hairstyle_name);
          })
        : Array.isArray(getOptions) && getOptions.length === 0
        ? names.push("髪型がありません。髪型画面から新規作成してください！")
        : names.push(getOptions[0].hairstyle_name);
      fieldName.push("髪型");
      break;
    case "names":
      console.log("getOptionsだよ", getOptions);

      Array.isArray(getOptions) && getOptions.length === 1
        ? names.push(getOptions[0].name)
        : Array.isArray(getOptions) && getOptions.length > 1
        ? getOptions.forEach((option) => {
            names.push(option.name);
          })
        : names.push(Object(getOptions).name);
      fieldName.push("担当者");
      break;
    default:
      break;
  }

  console.log("getOptions", getOptions);
  console.log("names[0]", names[0]);

  console.log("names.length", names.length);
  console.log(
    "ARRRARARR",
    Array.isArray(getOptions) && getOptions.length === 0
  );

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const newValue = event.target.value as string[];
    onChanger(event);

    if (required && onValidationChange) {
      onValidationChange(newValue.length > 0);
    }
    setAllowed(newValue.length > 0);
  };

  const noArrayAndNoLength =
    (!Array.isArray(getOptions) && required && error) ||
    (Array.isArray(getOptions) && getOptions.length === 0) ||
    (Array.isArray(getOptions) && required && error && getOptions.length === 1);

  console.log("noArrayAndNoLength", noArrayAndNoLength);

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
    <FormControl
      sx={{
        width: "100%",
        height: "100%",
        marginTop: 0.5,
      }}
      disabled={noArrayAndNoLength ? true : false}
    >
      <InputLabel
        id="demo-multiple-checkbox-label"
        shrink={true}
        sx={{
          width: "100%",
          height: "100%",
          fontWeight: "bold",
          color: `${
            required && error && !allowed && names.length > 1
              ? theme.palette.error.light
              : theme.palette.primary.main
          }`,
          fontSize: `${noArrayAndNoLength ? "1.4rem" : "1rem"}`,
          whiteSpace: "wrap",
          marginTop: `${noArrayAndNoLength && "1rem"}`,
          marginLeft: `${noArrayAndNoLength && ".5rem"}`,
          marginBottom: `${noArrayAndNoLength && ".1rem"}`,
        }}
        disabled={
          role === "スタッフ" || names.length === 0 || noArrayAndNoLength
            ? true
            : false
        }
        variant={noArrayAndNoLength ? "standard" : "filled"}
      >
        {names.length === 0
          ? `${fieldName[0]}がありません。${fieldName[0]}画面から新規作成してください！`
          : noArrayAndNoLength
          ? String(names[0])
          : String(fieldName[0])}
      </InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple={names.length === 0 || noArrayAndNoLength ? false : true}
        value={optionName ? optionName : []}
        onChange={handleChange}
        input={
          <OutlinedInput
            label={
              names.length === 0
                ? `${fieldName[0]}がありません。${fieldName[0]}画面から新規作成してください！`
                : noArrayAndNoLength
                ? []
                : String(fieldName[0])
            }
          />
        }
        renderValue={(selected) => {
          console.log("selected", selected);

          // selectedが文字列の場合
          if (typeof selected === "string") {
            return <div style={{ whiteSpace: "no-wrap" }}></div>;
          }

          // selectedが配列の場合
          if (Array.isArray(selected) && selected.length >= 1) {
            return (
              <div style={{ whiteSpace: "no-wrap" }}>
                {selected.map((value) => (
                  <div className="font-bold" key={value}>
                    {value}
                  </div>
                ))}
              </div>
            );
          }

          // どちらでもない場合はnullを返す
          return null;
        }}
        disabled={
          role === "スタッフ" || names.length === 0 || noArrayAndNoLength
            ? true
            : false
        }
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
          <MenuItem
            value={names[0]}
            disabled={noArrayAndNoLength ? true : false}
          >
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
      {required && error && fieldName[0] === "担当者" && !noArrayAndNoLength ? (
        <Typography variant="caption" color="error">
          <span className="ml-3">必須項目です</span>
        </Typography>
      ) : fieldName[0] === "担当者" && noArrayAndNoLength ? (
        <Typography variant="caption" color="error">
          <span className="ml-3">
            必須項目ですが、一人だけなので自動的に選択されています！
          </span>
        </Typography>
      ) : (
        <Typography variant="caption" color="primary">
          <span className="ml-3">任意項目です</span>
        </Typography>
      )}
    </FormControl>
  );
};

export default MultiCheckbox;
