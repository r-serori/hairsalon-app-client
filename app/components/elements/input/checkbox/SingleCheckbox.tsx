import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function SingleCheckBox({ label, value, onChange }) {
  // labelに応じてoptionsを設定
  let options = [];
  if (label === "役職") {
    options = ["オーナー", "マネージャー", "社員"];
  } else if (label === "他のラベル") {
    options = ["オプション1", "オプション2", "オプション3"];
  } // 他のラベルがあればここに追加

  return (
    <div className="w-full mt-1 border-gray-300 focus:outline-none focus:border-blue-500">
      <Autocomplete
        disablePortal
        id={label}
        options={options}
        value={value}
        onChange={(event, newValue) => onChange(newValue)} // オプションが選択されたときにonChangeを呼び出す
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </div>
  );
}
