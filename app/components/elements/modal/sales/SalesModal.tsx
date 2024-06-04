import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SaleForm from "../../form/sales/SaleFrom";

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

interface SalesModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  events: any;
  whatSales: string;
}

const SalesModal: React.FC<SalesModalProps> = ({
  showModal,
  setShowModal,
  events,
  whatSales,
}) => {
  return (
    <div>
      <Button
        onClick={() => {
          setShowModal(true);
        }}
        className="text-xl text-gray-900 cursor-pointer hover:bg-gray-400 
        hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
      >
        {whatSales === "日次"
          ? "日次売上更新"
          : whatSales === "月次"
          ? "月次売上更新"
          : "年次売上更新"}
      </Button>
      <Modal
        open={showModal}
        onClose={() => {
          setShowModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-xl">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <SaleForm
              events={events}
              whatSales={whatSales}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default SalesModal;
