import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ja";
import DemoContainer from "@mui/x-date-pickers/DateTimePicker";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

interface DateTimeRangePickerProps {
  value: Dayjs;
  changer: (newValue: Dayjs) => void;
  isAllDay?: boolean; //終日の予定かどうか
  role?: string; //スタッフかどうか
}

const DateTimeRangePicker: React.FC<DateTimeRangePickerProps> = ({
  value,
  changer,
  isAllDay,
  role,
}) => {
  // const [value, setValue] = React.useState<Dayjs | null>(
  //   dayjs("2022-04-17T15:30")
  // );
  dayjs.locale("ja");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  console.log("valueです", value);

  const dayJsValue = dayjs(value).utc().tz("Asia/Tokyo");

  console.log("dayJsValueです", dayJsValue);

  // 0時と23時のdayjsオブジェクトを作成
  const minTime = dayjs().hour(0).minute(0).utc().tz("Asia/Tokyo");
  const maxTime = dayjs().hour(23).minute(59).utc().tz("Asia/Tokyo");

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label={
          isAllDay || role === "スタッフ"
            ? "選択できません"
            : "日時を選択してください"
        }
        value={dayJsValue}
        onChange={(newValue) => {
          changer(newValue);
        }}
        {...(isAllDay || role === "スタッフ" ? { readOnly: true } : {})}
        minTime={minTime}
        maxTime={maxTime}
        ampm={false} // 24時間形式に設定
      />
    </LocalizationProvider>
  );
};

export default DateTimeRangePicker;
