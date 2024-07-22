import React, { ReactNode, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import {
  createStartTime,
  createEndTime,
  updateStartTime,
  updateEndTime,
  pleaseEditEndTime,
  Attendance_timeState,
} from "../../../../store/attendance_times/attendance_timesSlice";
import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import { useRef } from "react";
import { useState } from "react";
import PrimaryButton from "../../button/PrimaryButton";
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";
import DateTimeRangePicker from "../../input/DateTimePicker";
import { useSelector } from "react-redux";
import BasicAlerts from "../../alert/BasicAlert";
import { user } from "../../../Hooks/authSelector";
import {
  attendance_timeErrorStatus,
  attendance_timesStore,
} from "../../../Hooks/selector";
import {
  changeMessage,
  falseIsAttendance,
  trueIsAttendance,
  UserState,
} from "../../../../store/auth/userSlice";
import { AppDispatch } from "../../../../redux/store";
import { renderError } from "../../../../store/errorHandler";
import { useRouter } from "next/router";
import { allLogout } from "../../../Hooks/useMethod";

interface UserTimesShotFormProps {
  node: any;
  link: string;
  startOrEnd: string;
  open: boolean;
  setOpen: (open: boolean) => void;
  editValue?: any;
}

const UserTimesShotForm: React.FC<UserTimesShotFormProps> = ({
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

  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();

  const atErrorStatus: number = useSelector(attendance_timeErrorStatus);

  const webcamRef = useRef(null);

  // 出勤時間、退勤時間の編集モード
  const [edit, setEdit] = useState<boolean>(
    link == "/attendanceTimeStart" || link === "/attendanceTimeEnd"
      ? true
      : false
  );
  console.log("nodeeeeee", node);

  const userId: number =
    link === "/attendanceTimeShots" ? node.id : node.user_id;

  //ボタンを押したユーザーの情報を取得
  const attendanceUser: UserState = useSelector(user).find(
    (user) => user.id === Number(userId)
  );

  // console.log("user", user);

  // 編集する時のユーザーが持っている出勤時間、退勤時間の情報を取得
  const attendanceTimes: Attendance_timeState[] = useSelector(
    attendance_timesStore
  ).filter((time) => time.user_id === node.user_id);

  const lastAttendanceTime: Attendance_timeState | null =
    attendanceTimes.length > 0
      ? attendanceTimes[attendanceTimes.length - 1]
      : null;

  //出勤中か退勤中かの判定
  const [isAttendance, setIsAttendance] = useState<boolean>(
    attendanceUser.isAttendance ? true : false
  ); //true:出勤中 false:退勤中

  //出勤中の時、オーナーが本日の出勤時間、退勤時間の編集を不可にする
  const [notEdit, setNotEdit] = useState<boolean>(
    (edit &&
      isAttendance &&
      dayjs(node.start_time).utc().tz("Asia/Tokyo").format("YYYY/MM/DD") ===
        dayjs().utc().tz("Asia/Tokyo").format("YYYY/MM/DD")) ||
      (edit &&
        isAttendance &&
        dayjs(node.end_time).utc().tz("Asia/Tokyo").format("YYYY/MM/DD") ===
          dayjs().utc().tz("Asia/Tokyo").format("YYYY/MM/DD"))
      ? true
      : false
  );
  console.log("notEdit", notEdit);
  // console.log("node.start_time", attendanceTime.start_time);

  //出勤する時に、昨日の退勤時間が登録されていない時　true　編集依頼を出すため
  const [lateTime, setLateTime] = useState<boolean>(
    isAttendance &&
      lastAttendanceTime &&
      lastAttendanceTime.start_time !== null &&
      dayjs(lastAttendanceTime.start_time)
        .utc()
        .tz("Asia/Tokyo")
        .format("YYYY/MM/DD") !==
        dayjs().utc().tz("Asia/Tokyo").format("YYYY/MM/DD")
      ? true
      : false
  );
  console.log("lateTime", lateTime);

  //出勤時間、退勤時間の編集モードの時、編集済みの写真を表示
  const [shotEdit, setShotEdit] = useState<boolean>(false);

  //出勤時間、退勤時間の編集モードの時、編集済みの写真を表示
  const [photo, setPhoto] = useState<string | null>(
    node.start_photo_path === "111222" || node.end_photo_path === "111222"
      ? null
      : link === "/attendanceTimeStart" &&
        edit &&
        node.start_photo_path !== "111222"
      ? node.start_photo_path
      : link === "/attendanceTimeEnd" &&
        edit &&
        node.end_photo_path !== "111222"
      ? node.end_photo_path
      : null
  );
  // 時間
  const [time, setTime] = useState<Dayjs | null>(
    link === "/attendanceTimeStart" && node.start_time
      ? dayjs(node.start_time).utc().tz("Asia/Tokyo")
      : link === "/attendanceTimeEnd" && node.end_time
      ? dayjs(node.end_time).utc().tz("Asia/Tokyo")
      : link === "/attendanceTimeShots"
      ? dayjs().utc().tz("Asia/Tokyo")
      : null
  );

  const [timeValidate, setTimeValidate] = useState<boolean>(true);

  // 時間の表示
  const [showTime, setShowTime] = useState<string>(
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

  // 出勤時間、退勤時間の編集モードの時、写真を撮るボタンを押した時、ローディングを表示
  const [isLoading, setIsLoading] = useState<boolean>(
    link !== "/attendanceTimeShots" && !lateTime ? false : true
  );
  console.log("isLoading", isLoading);

  console.log("edit", edit);

  // 出勤時間、退勤時間の編集モードの時、写真を撮るボタンを押した時、編集済みの写真を表示
  const [editEnd, setEditEnd] = useState<boolean>(
    node.start_photo_path === "111222" || node.end_photo_path === "111222"
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
    if (!timeValidate) return;
    const getTime: string = dayjs(time).format("YYYY-MM-DD HH:mm:ss");
    let formData;

    if (!edit) {
      const startTimePhoto: string = photo;
      formData = {
        start_time: getTime,
        start_photo_path: startTimePhoto,
        user_id: node.id,
      };
    } else {
      const startTimePhoto: string = "111222";
      formData = {
        id: node.id,
        start_time: getTime,
        start_photo_path: startTimePhoto,
        user_id: node.user_id,
      };
    }

    try {
      if (edit) {
        const response = await dispatch(updateStartTime(formData) as any);
        if (response.meta.requestStatus === "fulfilled") {
          resetPhoto();
          setOpen(false);
        } else {
          dispatch(changeMessage(""));
          const re = renderError(atErrorStatus, router, dispatch);
          if (re === null) throw new Error("更新に失敗しました");
        }
      } else {
        const response = await dispatch(createStartTime(formData) as any);
        console.log("responseCreate", response);
        if (response.meta.requestStatus === "fulfilled") {
          dispatch(trueIsAttendance(userId) as any);
          resetPhoto();
          setOpen(false);
        } else {
          dispatch(changeMessage(""));
          const re = renderError(atErrorStatus, router, dispatch);
          if (re === null) throw new Error("更新に失敗しました");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEndTime = async () => {
    if (!timeValidate) return;
    const getTime: string = dayjs(time).format("YYYY-MM-DD HH:mm:ss");
    let formData;

    if (!edit) {
      const endTimePhoto: string = photo;
      formData = {
        end_time: getTime,
        end_photo_path: endTimePhoto,
        user_id: node.id,
      };
    } else {
      const endTimePhoto: string = "111222";
      formData = {
        id: node.id,
        end_time: getTime,
        end_photo_path: endTimePhoto,
        user_id: node.user_id,
      };
    }

    try {
      if (edit) {
        const response = await dispatch(updateEndTime(formData) as any);
        if (response.meta.requestStatus === "fulfilled") {
          resetPhoto();
          setOpen(false);
        } else {
          dispatch(changeMessage(""));
          const re = renderError(atErrorStatus, router, dispatch);
          if (re === null) throw new Error("更新に失敗しました");
        }
      } else {
        const response = await dispatch(createEndTime(formData) as any);
        if (response.meta.requestStatus === "fulfilled") {
          dispatch(falseIsAttendance(formData.user_id) as any);
          resetPhoto();
          setOpen(false);
        } else {
          dispatch(changeMessage(""));
          const re = renderError(atErrorStatus, router, dispatch);
          if (re === null) throw new Error("更新に失敗しました");
        }
        // router.push("/attendanceTimeShots");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const pleaseEdit = async () => {
  //   let formData;

  //   if (link === "/attendanceTimeShots") {
  //     formData = {
  //       id: lastAttendanceTime.id,
  //       end_time: "9999-12-31 23:59:59",
  //       end_photo_path: "111222",
  //       user_id: node.user_id,
  //     };

  //     await dispatch(pleaseEditEndTime(formData) as any);
  //     resetPhoto();
  //     setLateTime(false);
  //     setOpen(false);
  //   }
  // };

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
          <DateTimeRangePicker
            value={time}
            changer={setTime}
            onValidateChange={setTimeValidate}
          />
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
                : process.env.NEXT_PUBLIC_BACKEND_IMG_URL +
                  decodeURIComponent(photo)
            }
            alt="写真が無いか、登録されていません"
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
        node.start_photo_path === "111222" ||
        node.end_photo_path === "111222" ? (
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
              {time && editEnd && edit && !lateTime ? (
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
      {/* 
      {lateTime && (
        <div className="flex justify-center items-center mt-4">
          <BasicAlerts
            type="warning"
            message="昨日の退勤時間が登録されていません！編集依頼ボタンを押して、その後出勤ボタンを押してください！"
            space={1}
            padding={0.6}
          />

          <PrimaryButton value="編集依頼" place="big" onChanger={pleaseEdit} />
        </div>
      )} */}
    </div>
  );
};

export default UserTimesShotForm;
