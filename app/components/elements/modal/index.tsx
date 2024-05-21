import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ModalForm from "../form/ModalForm";
import AttendanceTimesShotForm from "../form/attendances/attendanceTimeShots/AttendanceTimesShotForm";
import BackAgainButton from "../button/BackAgainButton";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
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
};

interface BasicModalProps {
  type?: string;
  editValue?: string;
  editNode?: any;
  NodesProp?: any;
  link: string;
  isLoading: boolean;
}

const BasicModal: React.FC<BasicModalProps> = ({
  type,
  editValue,
  editNode,
  NodesProp,
  link,
  isLoading,
}) => {
  const [open, setOpen] = React.useState(false);
  const [openAttendance, setOpenAttendance] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenAttendance = () => setOpenAttendance(true);
  const handleCloseAttendance = () => setOpenAttendance(false);

  return (
    <>
      {link === "/attendanceTimeShots" ? (
        <Button onClick={handleOpenAttendance} className="w-full y-full p-4 ">
          {editValue}
        </Button>
      ) : (
        <Button
          onClick={handleOpen}
          className="text-gray-900 cursor-pointer hover:bg-gray-400 
          hover:text-white focus:ring-4 focus:ring-gray-300 font-medium text-sm dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 "
        >
          {editValue}
        </Button>
      )}

      {link === "/attendanceTimeShots" ? (
        <Modal
          open={openAttendance}
          onClose={handleCloseAttendance}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={AttendanceStyle} className="rounded-xl">
            {/* モーダルのタイトル */}
            <div className="flex justify-between items-center md:mx-16">
              <div className="text-3xl bold">{editValue}画面</div>
              <div className="items-center mr-2 ">
                <BackAgainButton onChanger={handleCloseAttendance} />
              </div>
            </div>
            {/* モーダルの内容 */}

            <AttendanceTimesShotForm
              node={editNode}
              link={link}
              startOrEnd={editValue}
              open={openAttendance}
              setOpen={setOpenAttendance}
            />
          </Box>
        </Modal>
      ) : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} className="rounded-xl ">
            {/* モーダルのタイトル */}
            <Typography id="modal-modal-title" variant="h6" component="h2">
              『 {editValue} 』 を編集
            </Typography>
            {/* モーダルの内容 */}

            <ModalForm
              type={type}
              editValue={editValue}
              editNode={editNode}
              NodesProp={NodesProp}
              link={link}
              open={open}
              setOpen={setOpen}
              isLoading={isLoading}
            />
            <button onClick={() => setOpen(false)}>戻る</button>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default BasicModal;
