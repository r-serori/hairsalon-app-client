import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import BasicTextField from "../../input/BasicTextField";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";

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

export default function ScheduleModal({ event }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const updateButton = (e) => {
    console.log(e.target.value);
    handleClose();
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="text-xl text-gray-900 cursor-pointer hover:bg-gray-400 
        hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
      >
        {event.title}
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-xl">
          {/* モーダルのタイトル */}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            予約内容を編集
          </Typography>
          {/* モーダルの内容 */}
          <form action="">
            <div id="modal-modal-description">
              <input type="hidden" value={event.id} />
              <div className="mt-8 border-t  border-gray-300 py-4 flex">
                <BasicTextField
                  placeholder="顧客様名"
                  value={event.title}
                  type="text"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
              <div className="mt-8 border-t  border-gray-300 py-4 flex">
                <BasicTextField
                  placeholder="開始時間"
                  value={event.start}
                  type="date"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
              <div className="mt-8 border-t  border-gray-300 py-4 flex">
                <BasicTextField
                  placeholder="終了時間"
                  value={event.end}
                  type="date"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>
              <div className="mt-8 border-t  border-gray-300 py-4 flex">
                <BasicTextField
                  placeholder="価格"
                  value={event.price}
                  type="number"
                  onChange={(e) => console.log(e.target.value)}
                />
              </div>

              <div className="mt-8 border-t  border-gray-300 py-4 flex">
                <MultiCheckbox />
              </div>
              <div className="mt-8 border-t  border-gray-300 py-4 flex">
                <MultiCheckbox />
              </div>
              <div className="mt-8 border-t  border-gray-300 py-4 flex">
                <MultiCheckbox />
              </div>

              <div className="mt-8 border-t  border-gray-300 py-4 flex">
                {event.course_name}
                {event.option_name}
                {event.merchandise_name}
                {event.hairstyle_name}
              </div>
              <button
                type="submit"
                onClick={updateButton}
                className="ml-8 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                更新
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
