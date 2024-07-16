import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ModalForm from "../form/ModalForm";
import AttendanceTimesShotForm from "../form/attendances/AttendanceTimesShotForm";
import BackAgainButton from "../button/RouterButton";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUsers } from "../../../store/auth/userSlice";
import { useRouter } from "next/router";
import RouterButton from "../button/RouterButton";
import { permissionStore, user } from "../../Hooks/authSelector";
import { UserAllState } from "../../Hooks/interface";
import { userKey } from "../../Hooks/authSelector";
import { PermissionsState } from "../../../store/auth/permissionSlice";
import { ownerPermission } from "../../Hooks/useMethod";
import { Height, Widgets } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "70vw",
  maxHeight: "70vh",
  width: "100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  whiteSpace: "pre-wrap", // 改行とスペースを保持
  wordBreak: "break-all", // 任意の場所で折り返し
};

const AttendanceStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40vw",
  height: "65vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  whiteSpace: "pre-wrap", // 改行とスペースを保持
  wordBreak: "break-all", // 任意の場所で折り返し
};

interface BasicModalProps {
  type?: any;
  editValue?: any;
  editNode?: any;
  NodesProp?: any;
  link: string;
}

const BasicModal: React.FC<BasicModalProps> = ({
  type,
  editValue,
  editNode,
  NodesProp,
  link,
}) => {
  // const dispatch = useDispatch();
  // const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [openAttendance, setOpenAttendance] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const users: UserAllState[] = useSelector(user);

  // const key: string | null = useSelector(userKey);
  // const permission: PermissionsState = useSelector(permissionStore);

  // const handleOpenAttendance = () => {
  //   const getStaffs = async () => {
  //     const response = await dispatch(getUsers({}) as any);
  //     console.log("response", response);
  //     localStorage.setItem("userCount", response.payload.userCount);
  //   };

  //   const fetchData = async () => {
  //     try {
  //       const userCount: string = localStorage.getItem("userCount");
  //       if (
  //         (permission === "オーナー" && !userCount) ||
  //         (permission === "オーナー" && userCount === undefined) ||
  //         (permission === "オーナー" && userCount === null) ||
  //         (permission === "オーナー" && userCount === "") ||
  //         (permission === "オーナー" && userCount === "undefined") ||
  //         (users.length < Number(userCount) && permission === "オーナー")
  //       ) {
  //         await getStaffs();
  //       } else {
  //         setOpenAttendance(true);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       router.push("/attendances");
  //     }
  //   };
  //   fetchData();
  // };

  // const handleCloseAttendance = () => setOpenAttendance(false);

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("ja-JP").format(value);
  };

  return (
    <>
      {link === "/attendanceTimeShots" ||
      link === "/attendanceTimeStart" ||
      link === "/attendanceTimeEnd" ? (
        <Button
          onClick={() => setOpenAttendance(true)}
          className="w-full y-full font-bold text-md "
        >
          <span className="font-bold text-md break-comma">{editValue}</span>
        </Button>
      ) : (
        <Button
          onClick={handleOpen}
          className="
          text-gray-900 pointer hover:bg-gray-400 
          hover:text-white focus:ring-4 focus:ring-gray-300 
          font-medium text-md dark:bg-gray-600 dark:hover:bg-gray-700  
          dark:focus:ring-gray-800 font-bold overflow-y-auto"
        >
          <span className="max-w-60 max-h-16 min-w-28 min-h-8 px-2 whitespace-pre-wrap text-md font-bold ">
            {type === "number" && NodesProp !== "phone_number"
              ? formatPrice(editValue)
              : editValue}
          </span>
        </Button>
      )}

      {link === "/attendanceTimeShots" ||
      link === "/attendanceTimeStart" ||
      link === "/attendanceTimeEnd" ? (
        <Modal
          open={openAttendance}
          onClose={() => setOpenAttendance(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={AttendanceStyle} className="rounded-xl">
            {/* モーダルのタイトル */}
            <div className="flex justify-between items-center md:mx-4 ">
              <div className="text-3xl bold">{editValue}</div>
              <div className="items-center mr-2 ">
                <RouterButton onChanger={() => setOpenAttendance(false)} />
              </div>
            </div>
            {/* モーダルの内容 */}
            <AttendanceTimesShotForm
              node={editNode}
              link={link}
              startOrEnd={editValue}
              open={openAttendance}
              setOpen={setOpenAttendance}
              editValue={editValue}
            />
          </Box>
        </Modal>
      ) : (
        <Modal open={open} onClose={handleClose} className="break-all">
          <Box sx={style} className="rounded-xl">
            {/* モーダルのタイトル */}
            <ModalForm
              type={type}
              editValue={editValue}
              editNode={editNode}
              NodesProp={NodesProp}
              link={link}
              open={open}
              setOpen={setOpen}
            />
            <RouterButton onChanger={handleClose} />
          </Box>
        </Modal>
      )}
    </>
  );
};

export default BasicModal;
