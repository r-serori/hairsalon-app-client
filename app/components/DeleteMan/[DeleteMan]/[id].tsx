import { useDispatch } from "react-redux";
import {
  deleteAttendance,
  deleteAttendanceInfo,
} from "../../../store/attendances/attendanceSlice";
import { useRouter } from "next/router";

const DeleteMan = ({ id, link }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleDeleteMan = async () => {
    // 適切な link によって条件分岐して削除処理を行う
    switch (link) {
      case "/attendances":
        await dispatch(deleteAttendanceInfo(id) as any);
        await dispatch(deleteAttendance(id) as any);
        break;
      // 他の link に対する削除処理を追加する場合はここに追加する
      default:
        break;
    }
    console.log("削除しました");
  };

  return (
    <button
      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ml-2"
      onClick={handleDeleteMan}
    >
      削除
    </button>
  );
};

export default DeleteMan;
