import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { get } from "http";

interface SingleCheckBoxProps {
  label: string;
  value?: string;
  onChange: (newValue: string) => void;
  getOptions: string[];
  nodeId?: string;
  role?: string;
}

const SingleCheckBox: React.FC<SingleCheckBoxProps> = ({
  label,
  value,
  onChange,
  getOptions,
  nodeId,
  role,
}) => {
  // labelに応じてoptionsを設定
  let options = [];
  if (label === "役職") {
    options = getOptions;
  } else if (label === "他のラベル") {
    options = ["オプション1", "オプション2", "オプション3"];
  } else if (label === "在庫カテゴリー") {
    options = getOptions;
  } else if (label === "新規or既存") {
    options = getOptions;
  } else if (label === "顧客名") {
    options = getOptions;
  } else if (label === "終日") {
    options = ["終日", "時間指定"];
  } else if (label === "顧客orそれ以外") {
    options = ["顧客", "それ以外"];
  }

  return (
    <div className="w-full mt-1 border-gray-300 focus:outline-none focus:border-blue-500">
      <Autocomplete
        disablePortal
        id={nodeId}
        options={options}
        value={value}
        onChange={(event, newValue) => onChange(newValue)} // オプションが選択されたときにonChangeを呼び出す
        renderInput={(params) => <TextField {...params} label={`${value}`} />}
        disabled={role === "スタッフ" ? true : false}
      />
    </div>
  );
};

export default SingleCheckBox;
