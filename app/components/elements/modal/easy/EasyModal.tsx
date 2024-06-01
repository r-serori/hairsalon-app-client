import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import DatePickerValue from "../../input/DatePicker";
import { RootState } from "../../../../redux/store";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import PrimaryButton from "../../button/PrimaryButton";
import DeleteButton from "../../button/DeleteButton";
import { selectGetSchedules } from "../../../../store/schedules/scheduleSlice";
import schedules from "../../../../pages/schedules";

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
}

const EasyModal: React.FC<EasyModalProps> = ({ open, setOpen }) => {
  dayjs.locale("ja");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const dispatch = useDispatch();
  const router = useRouter();

  const [selectDate, setSelectDate] = useState<Dayjs>(
    dayjs().utc().tz("Asia/Tokyo")
  );

  let message = "去年以降または再来年以降の年を選択してください。";

  const year = dayjs(selectDate).utc().tz("Asia/Tokyo").format("YYYY");

  const selectSubmit = async () => {
    try {
      await dispatch(selectGetSchedules({ year }) as any);
      setOpen(false);
      router.push({
        pathname: "/schedules",
        query: { year },
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        className="text-xl text-gray-900 cursor-pointer hover:bg-gray-400 
        hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
      >
        去年以前か来年以降の予約を確認,追加
      </Button>
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
                  <DatePickerValue
                    value={selectDate}
                    changer={(newValue) => {
                      setSelectDate(newValue);
                    }}
                    whatSales="過去未来"
                  />
                </div>

                <div className="flex justify-center pt-8">
                  {year === dayjs().utc().tz("Asia/Tokyo").format("YYYY") ||
                  year ===
                    dayjs()
                      .utc()
                      .tz("Asia/Tokyo")
                      .add(1, "year")
                      .format("YYYY") ? (
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
                        今年と来年の予約は既に表示しています。
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
