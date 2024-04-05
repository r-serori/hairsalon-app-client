import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  editValue: any;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, editValue }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Edit Row</DialogTitle>
      <DialogContent>
        {/* モーダル内の編集フォームやコンテンツをここに追加 */}
        {/* この例ではダミーのテキストを表示 */}
        <p>This is the edit modal content.</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
