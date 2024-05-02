import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ModalForm from "../form/ModalForm";

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

export default function BasicModal({
  type,
  editValue,
  editNode,
  NodesProp,
  link,

  isLoading,
}) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        className="text-gray-900 cursor-pointer hover:bg-gray-400 
        hover:text-white focus:ring-4 focus:ring-gray-300 font-medium text-sm dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
      >
        {editValue}
      </Button>

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
          <button onClick={() => setOpen(false)}>ばつ</button>
        </Box>
      </Modal>
    </>
  );
}
