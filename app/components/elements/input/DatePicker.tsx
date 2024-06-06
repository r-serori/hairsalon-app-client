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
        label={
          whatSales === "過去未来"
            ? "表示したい年を選択"
            : whatSales === "日次"
            ? "日付を選択"
            : whatSales === "月次"
            ? "月を選択"
            : whatSales === "年次"
            ? "年を選択"
            : "表示したい年月を選択"
        }
        value={dayjs(value).utc().tz("Asia/Tokyo")}
        onChange={(newValue) => {
          changer(newValue);
        }}
        views={
          whatSales === "日次"
            ? ["year", "month", "day"]
            : whatSales === "月次" || whatSales === "勤怠"
            ? ["year", "month"]
            : ["year"]
        }
      />
    </LocalizationProvider>
  );
};

export default DatePickerValue;
