import React, { ReactNode } from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import {
  createStartTime,
  createEndTime,
} from "../../../../../store/attendances/attendance_times/attendance_timesSlice";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Webcam from "react-webcam";
import { useRef } from "react";
import { useState } from "react";
import PrimaryButton from "../../../button/PrimaryButton";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";

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
  const [photo, setPhoto] = useState(null);
  const [time, setTime] = useState<Dayjs | null>(
    dayjs().utc().tz("Asia/Tokyo")
  );
  const [showTome, setShowTime] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const handleUserMedia = () => {
    setIsLoading(false);
  };

  const handleCapture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setPhoto(imageSrc);

    setTime(dayjs().utc().tz("Asia/Tokyo"));
    setShowTime(dayjs().utc().tz("Asia/Tokyo").format("YYYY/MM/DD HH:mm:ss"));
  };

  const resetPhoto = () => {
    setPhoto(null);
    setIsLoading(true);
    setTime(null);
    setShowTime("");
  };

  const handleStartTime = async (event) => {
    event.preventDefault();

    const getTime = time.toISOString();
    const startTimePhoto = photo;

    const formData = {
      start_time: getTime,
      start_photo_path: startTimePhoto,
      attendance_id: node.id,
    };

    try {
      await dispatch(createStartTime(formData) as any);
    } catch (error) {
      console.log(error);
    } finally {
      resetPhoto();
      setOpen(false);
    }
  };

  const handleEndTime = async (event) => {
    event.preventDefault();

    const getTime = time.toISOString();
    const endTimePhoto = photo;

    const formData = {
      end_time: getTime,
      end_photo_path: endTimePhoto,
      attendance_id: node.id,
    };

    try {
      await dispatch(createEndTime(formData) as any);
    } catch (error) {
      console.log(error);
    } finally {
      resetPhoto();
      setOpen(false);
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
      <form onSubmit={startOrEnd === "出勤" ? handleStartTime : handleEndTime}>
        {!photo ? (
          <>
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={380}
              height={380}
              onUserMedia={handleUserMedia}
            />
            {isLoading ? (
              ""
            ) : (
              <div className="flex justify-end mt-2 ">
                <CameraEnhanceIcon
                  onClick={handleCapture}
                  className="text-6xl cursor-pointer hover:text-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300  dark:focus:ring-blue-800"
                ></CameraEnhanceIcon>
              </div>
            )}
          </>
        ) : (
          <div>
            <div className="flex justify-between items-center">
              <div className="text-xl">撮影した写真↓</div>
              <div className="text-2xl">{showTome}</div>
            </div>
            <img src={photo} alt="写真" />
            <div className="flex justify-between items-center mt-4">
              <button
                className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-6 py-3 text-center "
                onClick={resetPhoto}
              >
                撮り直す
              </button>
              {startOrEnd === "出勤" ? (
                <PrimaryButton value="出勤" place="big" />
              ) : (
                <PrimaryButton value="退勤" place="big" />
              )}
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default AttendanceTimesShotForm;
