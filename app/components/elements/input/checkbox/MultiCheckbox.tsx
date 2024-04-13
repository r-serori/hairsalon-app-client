import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { get } from "http";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function MultiCheckbox({ options }) {
  const getOptionLabel = (option) => {
    // 渡されたoptionsによって適切な名前を返す
    if (options === "courses") {
      return option.course_name;
    } else if (options === "options") {
      return option.option_name;
    } else if (options === "merchandises") {
      return option.merchandise_name;
    } else if (options === "hairstyles") {
      return option.hairstyle_name;
    } else if (options === "attendances") {
      return option.attendance_name;
    } else if (options === "stock_category_id") {
      return option.category;
    } else {
      return ""; // エラー処理やデフォルト値など、必要に応じて適切な処理を追加
    }
  };

  return (
    <Autocomplete
      multiple
      id="checkboxes-tags-demo"
      options={options}
      disableCloseOnSelect
      getOptionLabel={getOptionLabel}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {getOptionLabel(option)}
        </li>
      )}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Checkboxes" placeholder="Favorites" />
      )}
    />
  );
}
