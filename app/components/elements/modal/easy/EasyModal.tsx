import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import DatePickerValue from "../../input/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import PrimaryButton from "../../button/PrimaryButton";
import DeleteButton from "../../button/DeleteButton";
import { selectGetSchedules } from "../../../../store/schedules/scheduleSlice";
import { selectGetAttendanceTimes } from "../../../../store/attendances/attendance_times/attendance_timesSlice";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  height: "40%", // ブラウザの高さの80%に設定
  overflowY: "auto", // 縦方向のスクロールを可能にする
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface EasyModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  whoAreYou?: string;
  whatIsYourId?: number;
  setYearMonth?: (yearMonth: string) => void;
  setScheduleYear?: (year: string) => void;
}

const EasyModal: React.FC<EasyModalProps> = ({
  open,
  setOpen,
  whoAreYou,
  whatIsYourId,
  setYearMonth,
  setScheduleYear,
}) => {
  dayjs.locale("ja");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const dispatch = useDispatch();
  const router = useRouter();

  const [selectDate, setSelectDate] = useState<Dayjs>(
    dayjs().utc().tz("Asia/Tokyo")
  );

  const [year, setYear] = useState<string>(
    whoAreYou === "attendanceTimes"
      ? dayjs().utc().tz("Asia/Tokyo").format("YYYY-MM")
      : dayjs().utc().tz("Asia/Tokyo").format("YYYY")
  );

  let message =
    whoAreYou === "attendanceTimes"
      ? "去年以前、または来年以降の年を選択してください！"
      : "去年以前、または再来年以降の年を選択してください！";

  const resetState = () => {
    setSelectDate(dayjs().utc().tz("Asia/Tokyo"));
    setYear(
      whoAreYou === "attendanceTimes"
        ? dayjs().utc().tz("Asia/Tokyo").format("YYYY-MM")
        : dayjs().utc().tz("Asia/Tokyo").format("YYYY")
    );
  };

  const selectSubmit = async () => {
    try {
      if (whoAreYou === "attendanceTimes") {
        dispatch(
          selectGetAttendanceTimes({
            user_id: whatIsYourId,
            yearMonth: year,
          }) as any
        );

        setOpen(false);
        setYearMonth(year);
      } else {
        const response = dispatch(selectGetSchedules(year) as any);
        localStorage.setItem("year", year);
        setOpen(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  console.log("yearです", year);
  console.log("selectDateです", selectDate);
  return (
    <div>
      {whoAreYou === "attendanceTimes" ? (
        <Button
          onClick={() => {
            setOpen(true);
            resetState();
          }}
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg text-md font-bold px-4 py-2 text-center"
        >
          去年以前か来年以降の勤怠時間を確認,編集
        </Button>
      ) : (
        <Button
          onClick={() => setOpen(true)}
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg text-md font-bold px-4 py-2 text-center"
        >
          去年以前か来年以降の予約を確認,編集
        </Button>
      )}
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-xl">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {message && <p className=" text-center">{message}</p>}
            <div className="flex justify-center items-center ">
              <form onSubmit={selectSubmit}>
                <div className="flex justify-center items-center sm:pt-8 md:pt-12">
                  {whoAreYou === "attendanceTimes" ? (
                    <DatePickerValue
                      value={selectDate}
                      changer={(newValue) => {
                        setSelectDate(newValue);
                        setYear(newValue.format("YYYY-MM"));
                      }}
                      whatSales="勤怠"
                    />
                  ) : (
                    <DatePickerValue
                      value={selectDate}
                      changer={(newValue) => {
                        setSelectDate(newValue);
                        setYear(newValue.format("YYYY"));
                      }}
                      whatSales="過去未来"
                    />
                  )}
                </div>

                <div className="flex justify-center pt-8">
                  {(year === dayjs().utc().tz("Asia/Tokyo").format("YYYY") &&
                    whoAreYou !== "attendanceTimes") ||
                  (year ===
                    dayjs()
                      .utc()
                      .tz("Asia/Tokyo")
                      .add(1, "year")
                      .format("YYYY") &&
                    whoAreYou !== "attendanceTimes") ||
                  (year === dayjs().utc().tz("Asia/Tokyo").format("YYYY-MM") &&
                    whoAreYou === "attendanceTimes") ? (
                    <>
                      <div className="mr-2 pt-16">
                        <DeleteButton
                          value={"戻る"}
                          place="left"
                          onClicker={() => {
                            setOpen(false);
                          }}
                        />
                      </div>
                      <p className="text-red-500 text-center mr-12">
                        {whoAreYou === "attendanceTimes"
                          ? "選択中の勤怠時間は既に表示しています。"
                          : "今年と来年の予約は既に表示しています。"}
                      </p>
                    </>
                  ) : (
                    <div className="flex justify-between md:pt-8  ">
                      <div>
                        <DeleteButton
                          value={"戻る"}
                          // place="left"
                          onClicker={() => {
                            setOpen(false);
                          }}
                        />
                      </div>
                      <div className="md:ml-32 sm:ml-16">
                        <PrimaryButton value={"表示"} />
                      </div>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default EasyModal;
