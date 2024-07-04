// BasicTextField.tsx
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

interface BasicTextFieldProps {
  id: number;
  placeholder: string;
  value: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  role?: string;
  multiline?: boolean;
  decideLength?: number;
  rows?: number;
  regex?: RegExp; // 正規表現のプロパティを追加
  replacementFunction?: (char: string) => string; // 置換関数のプロパティを追加
}

const BasicTextField: React.FC<BasicTextFieldProps> = ({
  id,
  placeholder,
  value,
  type,
  onChange,
  disabled = false,
  role,
  decideLength = 100,

  multiline = false,
  rows = 1,
  regex = /[Ａ-Ｚａ-ｚ０-９！-～]/g, // デフォルトの正規表現
}) => {
  // 全角文字を半角文字に変換する関数
  const replaceFullWidthChars = (str: string) => {
    return str.replace(regex, (char) =>
      String.fromCharCode(char.charCodeAt(0) - 0xfee0)
    );
  };

  // 変更時に全角文字を置換
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = replaceFullWidthChars(e.target.value);
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
      className="w-full mt-1 border-gray-300 focus:outline-none focus:border-blue-500 "
    >
      <TextField
        id={`${placeholder}_${id}_${type}`} // フィールドごとに一意のIDを設定
        type={type}
        label={placeholder}
        onChange={handleChange}
        value={value}
        variant="outlined"
        disabled={disabled || role === "スタッフ" ? true : false}
        multiline={multiline} // 複数行の入力を許可
        rows={multiline ? rows : undefined} // 最大行数を設定
        inputProps={{ maxLength: decideLength }} // 最大文字数を設定
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
    </Box>
  );
};

export default BasicTextField;
