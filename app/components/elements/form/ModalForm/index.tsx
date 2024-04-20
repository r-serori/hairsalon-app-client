import React, { useState, useEffect } from "react";
import PrimaryButton from "../../button/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAttendanceInfo,
  updateAttendanceName,
  updateAttendancePhoneNumber,
  updateAttendanceAddress,
  updateAttendancePosition,
  updateAttendance,
} from "../../../../store/attendances/attendanceSlice";
import { useRouter } from "next/router";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import BasicTextField from "../../input/BasicTextField";

interface ModalFormProps {
  type: any;
  editValue: any;
  editNode: any;
  NodesProp: any;
  link: any;
  open: any;
  setOpen: any;
}

const ModalForm: React.FC<ModalFormProps> = ({
  type,
  editValue,
  editNode,
  NodesProp,
  link,
  open,
  setOpen,
}) => {
  const [EditValue, setEditValue] = useState(editValue);
  const [EditNode, setEditNode] = useState(editNode);

  const dispatch = useDispatch();
  const router = useRouter();

  const updateStateCreate = () => {
    switch (NodesProp) {
      case "attendance_name":
        dispatch(updateAttendanceName(EditValue));
        console.log("updateAttendanceNameだよ");
        console.log(EditValue);
        break;
      case "position":
        dispatch(updateAttendancePosition(EditValue));
        break;
      case "phone_number":
        dispatch(updateAttendancePhoneNumber(EditValue));
        break;
      case "address":
        dispatch(updateAttendanceAddress(EditValue));
        break;
      default:
        break;
    }
  };

  const updateBoy = () => {
    const updatedNode = { ...EditNode }; // 元のeditNodeをコピーして新しいオブジェクトを作成
    updatedNode[NodesProp] = EditValue; // NodesProp番目に新しい値を追加
    try {
      dispatch(updateAttendanceInfo(updatedNode) as any); // 更新されたeditNodeをstoreに保存
    } catch (error) {
      console.error(error);
    }
    return updatedNode;
  };

  const handleChange = (e) => {
    try {
      const newValue = e.target.value;
      setEditValue(newValue);
      updateStateCreate();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedNode = updateBoy();
    console.log("updatedNodeだよ");
    console.log(updatedNode);
    console.log(EditNode.id);

    try {
      await dispatch(updateAttendance(updatedNode) as any);
    } catch (error) {
      console.error(error);
    }
  };

  const singleCheckBoxLabelCreate = () => {
    switch (NodesProp) {
      case "position":
        return "役職";
      default:
        return "";
    }
  };

  const singleCheckBoxLabel = singleCheckBoxLabelCreate();
  console.log("singleCheckBoxLabelだよ");
  console.log(singleCheckBoxLabel); //役職

  console.log("NodesPropだよ");
  console.log(NodesProp); //attendance_name
  console.log("EditNodeだよ");
  console.log(EditNode); // address: "東京都渋谷区";
  // attendance_name: "田中店長";
  // created_at: "2024-04-13T03:51:09.000000Z";
  // id: 1;
  // phone_number: "09012345678";
  // position: "オーナー";
  // updated_at: null;
  console.log("EditValueだよ");
  console.log(EditValue); //田中店長
  console.log("EditNodeIdだよ");
  console.log(EditNode.id); //1
  console.log(type); ///text
  console.log(link); //"/attendances"

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-8 border-t  border-gray-300 py-4 flex">
        <input type="hidden" value={EditNode.id} />

        {NodesProp === "position" ? (
          <SingleCheckBox
            label={singleCheckBoxLabel}
            value={EditValue}
            onChange={(newValue) => setEditValue(newValue)}
          />
        ) : (
          <BasicTextField
            type={type} // typeに応じた入力タイプを設定
            placeholder={EditValue}
            value={EditValue}
            onChange={handleChange}
          />
        )}

        <PrimaryButton value="更新" />
      </div>
    </form>
  );
};

export default ModalForm;
