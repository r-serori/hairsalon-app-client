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

interface AttendanceTimesShotFormProps {
  node: any;
  link: string;
  startOrEnd: string;
  open: boolean;
  setOpen: any;
}

const AttendanceTimesShotForm: React.FC<AttendanceTimesShotFormProps> = ({
  node,
  link,
  startOrEnd,
  open,
  setOpen,
}): ReactNode => {
  dayjs.locale("ja");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const dispatch = useDispatch();
  const router = useRouter();
  const webcamRef = useRef(null);
  const [photo, setPhoto] = useState(
    link === "/attendance_timesStart"
      ? node.start_photo_path
      : link === "/attendance_timesEnd"
      ? node.end_photo_path
      : null
  );
  const [time, setTime] = useState<Dayjs | null>(
    link === "/attendance_timesStart"
      ? dayjs(node.start_time).utc().tz("Asia/Tokyo")
      : link === "/attendance_timesEnd"
      ? dayjs(node.end_time).utc().tz("Asia/Tokyo")
      : dayjs().utc().tz("Asia/Tokyo")
  );
  const [showTime, setShowTime] = useState(
    link === "/attendance_timesStart" && node.start_time
      ? dayjs(node.start_time)
          .utc()
          .tz("Asia/Tokyo")
          .format("YYYY/MM/DD HH:mm:ss")
      : link === "/attendance_timesEnd" && node.end_time
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
    link === "/attendanceTimeShots" ? true : false
  );

  const [edit, setEdit] = useState(false);

  const handleUserMedia = () => {
    setIsLoading(false);
  };

  const handleCapture = () => {
    if (
      link === "/attendance_timesStart" ||
      // && node.start_photo_path
      link === "/attendance_timesEnd"
      // && node.end_photo_path
    ) {
      const imageSrc = webcamRef.current.getScreenshot();
      setPhoto(imageSrc);
    } else if (link === "/attendanceTimeShots") {
      const imageSrc = webcamRef.current.getScreenshot();
      setPhoto(imageSrc);

      setTime(dayjs().utc().tz("Asia/Tokyo"));
      setShowTime(dayjs().utc().tz("Asia/Tokyo").format("YYYY/MM/DD HH:mm:ss"));
    } else {
      const imageSrc = webcamRef.current.getScreenshot();
      setPhoto(imageSrc);
    }
  };

  const resetPhoto = () => {
    if (link === "/attendanceTimeShots") {
      setPhoto(null);
      setIsLoading(true);
      setTime(null);
      setShowTime("");
    } else {
      setPhoto(null);
      setEdit(true);
      setIsLoading(true);
    }
  };

  const handleStartTime = async (event) => {
    event.preventDefault();

    const getTime = time.toISOString();
    const startTimePhoto = photo;
    let formData;

    if (!edit) {
      formData = {
        start_time: getTime,
        start_photo_path: startTimePhoto,
        attendance_id: node.id,
      };
    } else {
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
      } else {
        await dispatch(createStartTime(formData) as any);
      }
    } catch (error) {
      console.log(error);
    } finally {
      resetPhoto();
      setOpen(false);
      window.location.reload();
    }
  };

  const handleEndTime = async (event) => {
    event.preventDefault();

    const getTime = dayjs().utc().tz("Asia/Tokyo").toISOString();
    const endTimePhoto = photo;

    let formData;

    if (!edit) {
      formData = {
        end_time: getTime,
        end_photo_path: endTimePhoto,
        attendance_id: node.id,
      };
    } else {
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
      } else {
        await dispatch(createEndTime(formData) as any);
      }
    } catch (error) {
      console.log(error);
    } finally {
      resetPhoto();
      setOpen(false);
      window.location.reload();
    }
  };

  return (
    <div className="flex justify-center items-center mx-auto pt-4 w-full">
      {isLoading ? (
        <div className="flex justify-center items-center w-full bold text-3xl">
          準備中...
        </div>
      ) : (
        ""
      )}
      <form
        onSubmit={
          startOrEnd === "出勤" || startOrEnd === "出勤時間と写真を編集"
            ? handleStartTime
            : handleEndTime
        }
      >
        {(link === "/attendance_timesStart" && node.start_time) ||
        (link === "/attendance_timesEnd" && node.end_time) ? (
          <div className="flex justify-center items-center mb-4">
            <DateTimeRangePicker value={time} changer={setTime} />
          </div>
        ) : (link === "/attendance_timesStart" && !node.start_time) ||
          (link === "/attendance_timesEnd" && !node.end_time) ? (
          <div className="flex justify-center items-center mb-4">
            {showTime}
            <DateTimeRangePicker value={time} changer={setTime} />
          </div>
        ) : (
          ""
        )}

        {!photo ? (
          <>
            <div className="flex justify-center items-center text-2xl  my-4">
              {isLoading ? "" : "本人だと証明できる写真をお願い致します!"}
            </div>
            <div className="flex justify-center items-center ">
              <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={320}
                height={320}
                onUserMedia={handleUserMedia}
              />
            </div>

            {isLoading ? (
              ""
            ) : (
              <div className="flex justify-end">
                <CameraEnhanceIcon
                  onClick={handleCapture}
                  className="text-6xl cursor-pointer hover:text-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300  dark:focus:ring-blue-800"
                ></CameraEnhanceIcon>
              </div>
            )}
          </>
        ) : photo && link === "/attendanceTimeShots" ? (
          <div>
            <div className="flex justify-center items-center mt-4">
              <div className="text-xl mr-4">撮影した写真↓</div>
              <div className="text-2xl">{showTime}</div>
            </div>
            <div className="flex justify-center items-center mt-4">
              <img src={photo} alt="写真がありません" />
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-6 py-3 text-center "
                onClick={resetPhoto}
              >
                撮り直す
              </button>

              <PrimaryButton value={startOrEnd + "！"} place="big" />
            </div>
          </div>
        ) : (photo &&
            link === "/attendance_timesStart" &&
            node.start_photo_path &&
            !edit) ||
          (photo &&
            link === "/attendance_timesEnd" &&
            node.end_photo_path &&
            !edit) ? (
          <div>
            <div className="flex justify-between items-center">
              <div className="text-xl">保存されていた写真↓</div>
            </div>
            <img
              src={"http://localhost:8000/attendance_times/images/" + photo}
              alt="写真がありません"
            />
            <div className="flex justify-center items-center mt-4">
              <button
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-6 py-3 text-center "
                onClick={resetPhoto}
              >
                編集者の写真を撮影してください
              </button>
            </div>
          </div>
        ) : (photo &&
            link === "/attendance_timesStart" &&
            node.start_photo_path &&
            edit) ||
          (photo &&
            link === "/attendance_timesEnd" &&
            node.end_photo_path &&
            edit) ? (
          <div>
            <div className="flex justify-between items-center">
              <div className="text-xl">撮影した写真↓</div>
            </div>
            <img src={photo} alt="写真がありません" />
            <div className="flex justify-between items-center mt-4">
              <button
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-6 py-3 text-center "
                onClick={resetPhoto}
              >
                撮り直す
              </button>

              <PrimaryButton value={startOrEnd + "！"} place="big" />
            </div>
          </div>
        ) : (
          ""
        )}
      </form>
    </div>
  );
};

export default AttendanceTimesShotForm;
