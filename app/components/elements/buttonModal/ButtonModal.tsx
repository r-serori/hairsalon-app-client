import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PrimaryButton from "../button/PrimaryButton";

interface ButtonModalProps {
  showButtonModal: boolean;
  setShowButtonModal: (value: boolean) => void;
  isCustomer: boolean;
  setIsCustomer: (value: boolean) => void;
  setShowModal: (value: boolean) => void;
  whoIsEvent: string;
}

const ButtonModal: React.FC<ButtonModalProps> = ({
  showButtonModal,
  setShowButtonModal,
  isCustomer,
  setIsCustomer,
  setShowModal,
  whoIsEvent,
}) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "25%",
    height: "25%", // ブラウザの高さの80%に設定
    overflowY: "auto", // 縦方向のスクロールを可能にする
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Button
        onClick={() => {
          setShowButtonModal(true);
        }}
        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-bold text-md rounded-lg px-4 py-2 text-center cursor-pointer"
      ></Button>
      <Modal
        open={showButtonModal}
        onClose={() => {
          setShowButtonModal(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-xl">
          <div className="text-blue-600 text-2xl text-center">
            どちらの予約ですか？
          </div>
          <div className="flex justify-between items-center h-full">
            <PrimaryButton
              value="顧客の予約"
              onChanger={() => {
                setShowButtonModal(false);
                // 顧客か顧客以外かを判定するためのstate 顧客の場合はtrue
                setIsCustomer(true);
                setShowModal(true);
              }}
            />

            <PrimaryButton
              value="顧客以外の予約"
              onChanger={() => {
                setShowButtonModal(false);
                // 顧客か顧客以外かを判定するためのstate 顧客の場合はfalse
                setIsCustomer(false);
                setShowModal(true);
              }}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ButtonModal;
