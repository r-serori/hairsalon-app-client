import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface DatePickerValueProps {
  value: Dayjs;
  changer: (newValue: Dayjs) => void;
  whatSales: string;
}

const DatePickerValue: React.FC<DatePickerValueProps> = ({
  value,
  changer,
  whatSales,
}) => {
  dayjs.locale("ja");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  console.log("valueです", value);

  // const dayJsValue = dayjs(value).utc().tz("Asia/Tokyo");

  // console.log("dayJsValueです", dayJsValue);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="更新日付選択"
        value={dayjs(value).utc().tz("Asia/Tokyo")}
        onChange={(newValue) => {
          changer(newValue);
        }}
        views={
          whatSales === "日次"
            ? ["year", "month", "day"]
            : whatSales === "月次"
            ? ["year", "month"]
            : ["year"]
        }
      />
    </LocalizationProvider>
  );
};

export default DatePickerValue;
