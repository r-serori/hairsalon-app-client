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
}

const DateTimeRangePicker: React.FC<DateTimeRangePickerProps> = ({
  value,
  changer,
  isAllDay,
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

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateTimePicker
        label={isAllDay ? "選択できません" : "日時を選択してください"}
        value={dayJsValue}
        onChange={(newValue) => {
          changer(newValue);
        }}
        {...(isAllDay && { readOnly: true })}
      />
    </LocalizationProvider>
  );
};

export default DateTimeRangePicker;
