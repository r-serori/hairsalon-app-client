import React, { ReactNode } from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import {
  createStartTime,
  createEndTime,
  updateStartTime,
  updateEndTime,
} from "../../../../../store/attendances/attendance_times/attendance_timesSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Webcam from "react-webcam";
import { useRef } from "react";
import { useState } from "react";
import PrimaryButton from "../../../button/PrimaryButton";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import DateTimeRangePicker from "../../../input/DateTimePicker";
import ControlledCheckbox from "../../../input/checkbox/SimpleCheckBox";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";
import { dividerClasses } from "@mui/material";
import { EditRoad } from "@mui/icons-material";

interface AttendanceTimesShotFormProps {
  node: any;
  link: string;
  startOrEnd: string;
  open: boolean;
  setOpen: any;
  editValue?: any;
}

const AttendanceTimesShotForm: React.FC<AttendanceTimesShotFormProps> = ({
  node,
  link,
  startOrEnd,
  open,
  setOpen,
  editValue,
}): ReactNode => {
  dayjs.locale("ja");
  dayjs.extend(utc);
  dayjs.extend(timezone);
  console.log("node", node);

  const dispatch = useDispatch();
  const router = useRouter();
  const webcamRef = useRef(null);

  const [edit, setEdit] = useState(
    link === "/attendanceTimeStart" || link === "/attendanceTimeEnd"
      ? true
      : false
  );

  const loading = useSelector((state: RootState) => state.attendance.loading);

  const attendance = useSelector((state: RootState) =>
    state.attendance.attendances.find(
      (attendance) => attendance.id === Number(node.id)
    )
  );
  console.log(attendance);

  const [isAttendance, setIsAttendance] = useState(
    !loading && attendance.isAttendance ? true : false
  ); //true:出勤中 false:退勤中

  const [notEdit, setNotEdit] = useState(
    (isAttendance &&
      dayjs(node.start_time).utc().tz("Asia/Tokyo").format("YYYY/MM/DD") ===
        dayjs().utc().tz("Asia/Tokyo").format("YYYY/MM/DD")) ||
      (isAttendance &&
        dayjs(node.end_time).utc().tz("Asia/Tokyo").format("YYYY/MM/DD") ===
          dayjs().utc().tz("Asia/Tokyo").format("YYYY/MM/DD"))
      ? true
      : false
  );

  const [lateTime, setLateTime] = useState(
    isAttendance &&
      dayjs(node.start_time).utc().tz("Asia/Tokyo").format("YYYY/MM/DD") !==
        dayjs().utc().tz("Asia/Tokyo").format("YYYY/MM/DD")
      ? true
      : false
  );
  console.log(
    "startTime",
    dayjs(node.start_time).utc().tz("Asia/Tokyo").format("YYYY/MM/DD")
  );
  console.log("nowDate", dayjs().utc().tz("Asia/Tokyo").format("YYYY/MM/DD"));
  console.log("lateTime", lateTime);

  const [shotEdit, setShotEdit] = useState(false);

  const [photo, setPhoto] = useState(
    node.start_photo_path === "編集済み" || node.end_photo_path === "編集済み"
      ? null
      : link === "/attendanceTimeStart" &&
        edit &&
        node.start_photo_path !== "編集済み"
      ? node.start_photo_path
      : link === "/attendanceTimeEnd" &&
        edit &&
        node.end_photo_path !== "編集済み"
      ? node.end_photo_path
      : null
  );
  const [time, setTime] = useState<Dayjs | null>(
    link === "/attendanceTimeStart" && node.start_time
      ? dayjs(node.start_time).utc().tz("Asia/Tokyo")
      : link === "/attendanceTimeEnd" && node.end_time
      ? dayjs(node.end_time).utc().tz("Asia/Tokyo")
      : link === "/attendanceTimeShots"
      ? dayjs().utc().tz("Asia/Tokyo")
      : null
  );

  const [showTime, setShowTime] = useState(
    link === "/attendanceTimeStart" && node.start_time
      ? dayjs(node.start_time)
          .utc()
          .tz("Asia/Tokyo")
          .format("YYYY/MM/DD HH:mm:ss")
      : link === "/attendanceTimeEnd" && node.end_time
      ? dayjs(node.end_time)
          .utc()
          .tz("Asia/Tokyo")
          .format("YYYY/MM/DD HH:mm:ss")
      : link === "/attendanceTimesStart" && !node.start_time
      ? "出勤時間が登録されていません"
      : link === "/attendanceTimesEnd" && !node.end_time
      ? "退勤時間が登録されていません"
      : ""
  );

  const [isLoading, setIsLoading] = useState(
    link !== "/attendanceTimeShots" && !lateTime ? false : true
  );

  console.log("edit", edit);

  const [editEnd, setEditEnd] = useState(
    node.start_photo_path === "編集済み" || node.end_photo_path === "編集済み"
      ? true
      : false
  );

  const handleUserMedia = () => {
    setIsLoading(false);
    setShotEdit(true);
  };

  const handleCapture = () => {
    if (
      link === "/attendanceTimeStart" ||
      // && node.start_photo_path
      link === "/attendanceTimeEnd"
      // && node.end_photo_path
    ) {
      const imageSrc = webcamRef.current.getScreenshot();
      setPhoto(imageSrc);
    } else if (link === "/attendanceTimeShots") {
      const imageSrc = webcamRef.current.getScreenshot();
      setPhoto(imageSrc);

      setTime(dayjs().utc().tz("Asia/Tokyo"));
      setShowTime(dayjs().utc().tz("Asia/Tokyo").format("YYYY/MM/DD HH:mm:ss"));
      setShotEdit(true);
    } else {
      const imageSrc = webcamRef.current.getScreenshot();
      setPhoto(imageSrc);
      setShotEdit(true);
    }
  };

  const resetPhoto = () => {
    if (link === "/attendanceTimeShots") {
      setPhoto(null);
      setIsLoading(true);
      setTime(null);
      setShowTime("");
      setShotEdit(false);
    } else {
      setPhoto(null);
      setEditEnd(false);
      setEdit(false);
    }
  };

  const editPhoto = () => {
    setPhoto(null);
    setEditEnd(true);
  };

  const handleStartTime = async () => {
    const getTime = time.toISOString();
    let formData;

    if (!edit) {
      const startTimePhoto = photo;
      formData = {
        start_time: getTime,
        start_photo_path: startTimePhoto,
        attendance_id: node.id,
      };
    } else {
      const startTimePhoto = "編集済み";
      formData = {
        id: node.id,
        start_time: getTime,
        start_photo_path: startTimePhoto,
        attendance_id: node.attendance_id,
      };
    }

    try {
      if (edit) {
        await dispatch(updateStartTime(formData) as any);
        resetPhoto();
        setOpen(false);
      } else {
        await dispatch(createStartTime(formData) as any);
        resetPhoto();
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEndTime = async () => {
    const getTime = time.toISOString();
    let formData;

    if (!edit) {
      const endTimePhoto = photo;
      formData = {
        end_time: getTime,
        end_photo_path: endTimePhoto,
        attendance_id: node.id,
      };
    } else {
      const endTimePhoto = "編集済み";
      formData = {
        id: node.id,
        end_time: getTime,
        end_photo_path: endTimePhoto,
        attendance_id: node.attendance_id,
      };
    }

    try {
      if (edit) {
        await dispatch(updateEndTime(formData) as any);
        resetPhoto();
        setOpen(false);
      } else {
        await dispatch(createEndTime(formData) as any);
        resetPhoto();
        setOpen(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log("link", link);

  return (
    <div
      className="flex justify-center items-center mx-auto pt-4 w-full "
      style={{ flexDirection: "column" }}
    >
      {isLoading ? (
        <div className="flex justify-center items-center w-full bold text-3xl">
          準備中...
        </div>
      ) : (
        ""
      )}
      {/* DateTimePickerの表示式 */}
      {/* 編集リンクで時間登録がされている時 */}
      {notEdit && edit ? (
        "本日の勤怠時間の編集は退勤後にお願いします！"
      ) : (
        <div className="flex justify-center items-center ">
          <DateTimeRangePicker value={time} changer={setTime} />
        </div>
      )}

      {/* 写真が登録されていない場合 出勤退勤時 */}
      {!photo && !edit && !notEdit && !lateTime ? (
        <div
          className="flex justify-center items-center text-2xl w-full"
          style={{ flexDirection: "column" }}
        >
          <div className="flex justify-center items-center text-2xl my-4 w-full">
            {isLoading ? (
              ""
            ) : (
              <div className="flex justify-center items-center w-full">
                本人だと証明できる写真をお願い致します!
              </div>
            )}
          </div>
          <div className="flex justify-center items-center ">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={300}
              height={200}
              onUserMedia={handleUserMedia}
            />
          </div>

          {!isLoading && !notEdit ? (
            <div className="flex justify-end">
              <CameraEnhanceIcon
                onClick={handleCapture}
                className="text-6xl cursor-pointer hover:text-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300  dark:focus:ring-blue-800"
              ></CameraEnhanceIcon>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : // 写真が登録されていて、出勤、退勤ボタンのリンクの時 撮影した写真を表示
      photo &&
        link === "/attendanceTimeShots" &&
        !edit &&
        !notEdit &&
        !lateTime ? (
        <form
          onSubmit={
            link === "/attendanceTimeShots" && !edit && editValue === "出勤"
              ? handleStartTime
              : link === "/attendanceTimeShots" && !edit && editValue === "退勤"
              ? handleEndTime
              : handleEndTime
          }
        >
          <div>
            <div className="flex justify-center items-center mt-4">
              <div className="text-xl mr-4">撮影した写真↓</div>
              <div className="text-2xl">{showTime}</div>
            </div>
            <div className="flex justify-center items-center mt-4">
              <img src={photo} alt="写真がありません" />
            </div>
            <div className="flex justify-between items-center mt-4">
              <span
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-6 py-3 text-center "
                onClick={resetPhoto}
              >
                撮り直す
              </span>
              {time && <PrimaryButton value={startOrEnd + "！"} place="big" />}
            </div>
          </div>
        </form>
      ) : // 写真が登録されていて、編集リンクの時
      (link === "/attendanceTimeStart" &&
          edit &&
          !editEnd &&
          !notEdit &&
          !lateTime) ||
        (link === "/attendanceTimeEnd" &&
          edit &&
          !editEnd &&
          !notEdit &&
          !lateTime) ? (
        <div>
          {photo && edit ? (
            <div className="text-xl">保存されていた写真↓</div>
          ) : !photo && edit ? (
            <div className="mt-6"></div>
          ) : (
            ""
          )}
          <img
            src={
              !photo
                ? "https://dummyimage.com/320x240/000/fff&text=未登録"
                : "http://localhost:8000/attendance_times/images/" + photo
            }
            alt="写真がありません"
          />
          <div className="flex justify-center items-center mt-4">
            <button
              className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-6 py-3 text-center "
              onClick={editPhoto}
            >
              編集済みの写真に変更
            </button>
          </div>
        </div>
      ) : (link === "/attendanceTimeStart" &&
          edit &&
          editEnd &&
          !notEdit &&
          !lateTime) ||
        (link === "/attendanceTimeEnd" &&
          edit &&
          editEnd &&
          !notEdit &&
          !lateTime) ||
        node.start_photo_path === "編集済み" ||
        node.end_photo_path === "編集済み" ? (
        <form
          onSubmit={
            link === "/attendanceTimeStart" && edit && editEnd
              ? handleStartTime
              : link === "/attendanceTimeEnd" && edit && editEnd
              ? handleEndTime
              : handleEndTime
          }
        >
          <div>
            <div className="flex justify-center items-center mt-4">
              <img
                src="https://dummyimage.com/320x240/000/fff&text=編集済み"
                alt="Dummy Image "
              />
            </div>
            <div className="flex justify-center items-center mt-4">
              {time && editEnd && edit ? (
                <PrimaryButton value={startOrEnd + "！"} place="big" />
              ) : (
                ""
              )}
            </div>
          </div>
        </form>
      ) : (
        ""
      )}
    </div>
  );
};

export default AttendanceTimesShotForm;
