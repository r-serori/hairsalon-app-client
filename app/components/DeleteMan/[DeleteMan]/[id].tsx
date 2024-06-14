import * as React from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
// import { deleteAttendance } from "../../../store/attendances/attendanceSlice";
import { deleteAttendanceTime } from "../../../store/attendances/attendance_times/attendance_timesSlice";
import { deleteCourse } from "../../../store/courses/courseSlice";
import { deleteCustomer } from "../../../store/customers/customerSlice";
import { deleteHairstyle } from "../../../store/hairstyles/hairstyleSlice";
import { deleteMerchandise } from "../../../store/merchandises/merchandiseSlice";
import { deleteOption } from "../../../store/options/optionSlice";
import { deleteSchedule } from "../../../store/schedules/scheduleSlice";
import { deleteStock } from "../../../store/stocks/stockSlice";
import { deleteStockCategory } from "../../../store/stocks/stock_categories/stock_categorySlice";
import { deleteDaily_sales } from "../../../store/sales/daily_sales/daily_saleSlice";
import { deleteMonthly_sales } from "../../../store/sales/monthly_sales/monthly_saleSlice";
import { deleteYearly_sales } from "../../../store/sales/yearly_sales/yearly_saleSlice";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PrimaryButton from "../../elements/button/PrimaryButton";
import DeleteButton from "../../elements/button/DeleteButton";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "30%",
  height: "30%", // ブラウザの高さの80%に設定
  overflowY: "auto", // 縦方向のスクロールを可能にする
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface DeleteManProps {
  id: number;
  link: string;
  value?: string;
}

const DeleteMan: React.FC<DeleteManProps> = ({ id, link }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [open, setOpen] = React.useState(false);

  const handleDeleteMan = async () => {
    // 適切な link によって条件分岐して削除処理を行う
    switch (link) {
      case "/attendance_times" ||
        "/attendanceTimeShots" ||
        "/attendanceTimeStart" ||
        "/attendanceTimeEnd":
        await dispatch(deleteAttendanceTime(id) as any);
        break;
      case "/courses":
        await dispatch(deleteCourse(id) as any);
        break;
      case "/customers":
        await dispatch(deleteCustomer(id) as any);
        break;
      case "/hairstyles":
        await dispatch(deleteHairstyle(id) as any);
        break;
      case "/merchandises":
        await dispatch(deleteMerchandise(id) as any);
        break;
      case "/options":
        await dispatch(deleteOption(id) as any);
        break;
      case "/schedules":
        console.log("id", id);
        await dispatch(deleteSchedule(id) as any);
        break;
      case "/stocks":
        await dispatch(deleteStock(id) as any);
        break;
      case "/stock_categories":
        await dispatch(deleteStockCategory(id) as any);
        break;
      case "/daily_sales":
        await dispatch(deleteDaily_sales(id) as any);
        break;
      case "/monthly_sales":
        await dispatch(deleteMonthly_sales(id) as any);
        break;
      case "/yearly_sales":
        await dispatch(deleteYearly_sales(id) as any);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-2 text-center"
      >
        削除
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-xl">
          <Typography id="modal-modal-title">
            <div>
              <div
                className="flex justify-center items-center p-4 mb-4   text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
                style={{ flexDirection: "column" }}
              >
                <div className="font-medium mb-4 lg:text-xl md:text-sm">
                  完全にデータが消えてしまいます!
                </div>

                <div className="lg:text-xl md:text-sm">
                  本当に削除しますか？
                </div>
              </div>
              <div className="flex justify-center items-center lg:gap-24 lg:mt-8">
                <PrimaryButton
                  onChanger={() => setOpen(false)}
                  value="キャンセル"
                />
                <DeleteButton
                  value="削除する"
                  onClicker={() => {
                    handleDeleteMan();
                    setOpen(false);
                  }}
                />
              </div>
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default DeleteMan;
