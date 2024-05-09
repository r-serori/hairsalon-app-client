import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect } from "react";
import {
  CustomerState,
  getCustomer,
  createCustomer,
  updateCustomer,
  updateCustomerInfo,
} from "../../../../store/customers/customerSlice";
import {
  getSchedule,
  createSchedule,
  createCustomerSchedule,
  updateSchedule,
} from "../../../../store/schedules/scheduleSlice";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";
import DeleteMan from "../../../DeleteMan/[DeleteMan]/[id]";
import { SelectChangeEvent, dividerClasses } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  height: "90vh", // ブラウザの高さの80%に設定
  overflowY: "auto", // 縦方向のスクロールを可能にする
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
interface ScheduleModalProps {
  showModal: boolean;
  selectedEvent: any;
  whoIsEvent: string;
  setShowModal: (value: boolean) => void;
  setSelectedEvent: (value: any) => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({
  showModal,
  selectedEvent,
  whoIsEvent,
  setShowModal,
  setSelectedEvent,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const customers = useSelector((state: RootState) => state.customer.customers);

  const courses = useSelector((state: RootState) => state.course.course);

  const options = useSelector((state: RootState) => state.option.option);

  const merchandises = useSelector(
    (state: RootState) => state.merchandise.merchandise
  );

  const hairstyles = useSelector(
    (state: RootState) => state.hairstyle.hairstyle
  );

  const attendances = useSelector(
    (state: RootState) => state.attendance.attendances
  );

  const course_customers = useSelector(
    (state: RootState) => state.course_customers.course_customers
  );

  console.log("course_customersだよ");
  console.log(course_customers);

  const option_customers = useSelector(
    (state: RootState) => state.option_customers.option_customers
  );

  const merchandise_customers = useSelector(
    (state: RootState) => state.merchandise_customers.merchandise_customers
  );

  const hairstyle_customers = useSelector(
    (state: RootState) => state.hairstyle_customers.hairstyle_customers
  );

  const customer_attendances = useSelector(
    (state: RootState) => state.customer_attendances.customer_attendances
  );

  const nodes = [
    ...customers.map((customer) => {
      // customerは一回一番下まで行く。その後、次のcustomerに行く。
      // 顧客に関連するコースの情報を取得
      const customerCourses = course_customers
        .filter((course) => course.customers_id === customer.id)
        .map((course) => course.courses_id);

      console.log(customerCourses);
      //  [1,2,3]

      const courseNames = courses
        .filter((course) => customerCourses.includes(course.id))
        .map((course) => course.course_name);

      console.log("courseNamesだよ");
      console.log(courseNames);

      // 顧客に関連するオプションの情報を取得
      const customerOptions = option_customers
        .filter((option) => option.customers_id === customer.id)
        .map((option) => option.options_id);

      console.log(customerOptions);

      const optionNames = options
        .filter((option) => customerOptions.includes(option.id))
        .map((option) => option.option_name);

      console.log("optionNamesだよ");
      console.log(optionNames);

      // 顧客に関連する商品の情報を取得
      const customerMerchandises = merchandise_customers
        .filter((merchandise) => merchandise.customers_id === customer.id)
        .map((merchandise) => merchandise.merchandises_id);

      console.log(customerMerchandises);

      const merchandiseNames = merchandises
        .filter((merchandise) => customerMerchandises.includes(merchandise.id))
        .map((merchandise) => merchandise.merchandise_name);

      console.log("merchandiseNamesだよ");
      console.log(merchandiseNames);

      // 顧客に関連するヘアスタイルの情報を取得
      const customerHairstyles = hairstyle_customers
        .filter((hairstyle) => hairstyle.customers_id === customer.id)
        .map((hairstyle) => hairstyle.hairstyles_id);

      console.log(customerHairstyles);

      const hairstyleNames = hairstyles
        .filter((hairstyle) => customerHairstyles.includes(hairstyle.id))
        .map((hairstyle) => hairstyle.hairstyle_name);

      console.log("hairstyleNamesだよ");

      console.log(hairstyleNames);

      // 顧客に関連する担当者の情報を取得

      const customerAttendances = customer_attendances
        .filter((attendance) => attendance.customers_id === customer.id)
        .map((attendance) => attendance.attendances_id);

      console.log(customerAttendances);

      const attendanceNames = attendances
        .filter((attendance) => customerAttendances.includes(attendance.id))
        .map((attendance) => attendance.attendance_name);

      console.log("attendanceNamesだよ");
      console.log(attendanceNames);

      // 顧客情報を返す
      return {
        id: customer.id,
        customer_name: customer.customer_name,
        phone_number: customer.phone_number,
        remarks: customer.remarks,
        course: courseNames,
        option: optionNames,
        merchandise: merchandiseNames,
        hairstyle: hairstyleNames,
        attendance: attendanceNames,
        updated_at: customer.updated_at,
      };
    }),
  ];

  const customersNames = nodes.map((node) => node.customer_name);

  const searchCustomer =
    whoIsEvent === "イベントクリック"
      ? customersNames.includes(selectedEvent.title)
      : false;

  console.log("searchCustomerだよ", searchCustomer);

  const initialCustomer = nodes[0];

  const [noCustomer, setNoCustomer] = useState(
    !searchCustomer && whoIsEvent === "イベントクリック" ? "それ以外" : "顧客"
  );

  const [newCustomer, setNewCustomer] = useState(
    noCustomer === "顧客" ? "既存" : ""
  );

  const [customerId, setCustomerId] = useState(
    newCustomer === "既存" ? initialCustomer.id : 0
  );

  const [customerName, setCustomerName] = useState(
    newCustomer === "既存" && whoIsEvent !== "イベントクリック"
      ? initialCustomer.customer_name
      : "" || (whoIsEvent === "イベントクリック" && searchCustomer)
      ? selectedEvent.title
      : "" || (selectedEvent.allDay && !searchCustomer)
      ? ""
      : ""
  );

  console.log("customerNameだよ", customerName);

  const [phone_number, setPhoneNumber] = useState(
    newCustomer === "既存" ? initialCustomer.phone_number : ""
  );

  const [remarks, setRemarks] = useState(
    newCustomer === "既存" ? initialCustomer.remarks : ""
  );

  const [courseNames, setCourseNames] = useState(
    newCustomer === "既存" ? initialCustomer.course : []
  );

  const [optionNames, setOptionNames] = useState(
    newCustomer === "既存" ? initialCustomer.option : []
  );

  const [merchandiseNames, setMerchandiseNames] = useState(
    newCustomer === "既存" ? initialCustomer.merchandise : []
  );

  const [hairstyleNames, setHairstyleNames] = useState(
    newCustomer === "既存" ? initialCustomer.hairstyle : []
  );

  const [attendanceNames, setAttendanceNames] = useState(
    newCustomer === "既存" ? initialCustomer.attendance : []
  );

  const [allDay, setAllDay] = useState(selectedEvent.allDay ? 1 : 0);

  const [title, setTitle] = useState(
    !searchCustomer ? selectedEvent.title : ""
  );

  useEffect(() => {
    if (whoIsEvent === "イベントクリック") {
      changeCustomerState(selectedEvent.title);
    }
  }, [whoIsEvent]);

  const changeCustomerState = (newValue) => {
    setCustomerName(newValue);

    const useCustomerState = nodes.find(
      (node) => node.customer_name === newValue
    );

    console.log("useCustomerStateだよ");
    console.log(useCustomerState);

    if (!useCustomerState) {
      return;
    }

    setCustomerId(useCustomerState.id);
    setPhoneNumber(useCustomerState.phone_number || "");
    setRemarks(useCustomerState.remarks || "");
    setCourseNames(useCustomerState.course || []);
    setOptionNames(useCustomerState.option || []);
    setMerchandiseNames(useCustomerState.merchandise || []);
    setHairstyleNames(useCustomerState.hairstyle || []);
    setAttendanceNames(useCustomerState.attendance);
    setAttendanceNames(useCustomerState.attendance || []);
  };

  const clearStates = () => {
    setCustomerName("");
    setPhoneNumber("");
    setRemarks("");
    setCourseNames([]);
    setOptionNames([]);
    setMerchandiseNames([]);
    setHairstyleNames([]);
    setAttendanceNames([]);
  };

  //MultiCheckboxを使用する際の配列の値を変更していってくれる関数。
  const handleCourseChange = (event: SelectChangeEvent<string[]>) => {
    setCourseNames(event.target.value as string[]);
  };

  const handleOptionChange = (event: SelectChangeEvent<string[]>) => {
    setOptionNames(event.target.value as string[]);
  };

  const handleMerchandiseChange = (event: SelectChangeEvent<string[]>) => {
    setMerchandiseNames(event.target.value as string[]);
  };

  const handleHairstyleChange = (event: SelectChangeEvent<string[]>) => {
    setHairstyleNames(event.target.value as string[]);
  };

  const handleAttendanceChange = (event: SelectChangeEvent<string[]>) => {
    setAttendanceNames(event.target.value as string[]);
  };

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  const customerAndScheduleCreate = async (
    scheduleAndCustomerFormData: {
      id: number;
      customer_name: string;
      phone_number: string;
      remarks: string;
      courses_id: number[];
      options_id: number[];
      merchandises_id: number[];
      hairstyles_id: number[];
      attendances_id: number[];
      Sid: number;
      title: string;
      start_time: string;
      end_time: string;
      allDay: number;
      customers_id: number;
    },
    newCustomer
  ) => {
    try {
      if (newCustomer === "新規" && noCustomer === "顧客") {
        await dispatch(
          createCustomerSchedule(scheduleAndCustomerFormData) as any
        );
      } else if (newCustomer === "既存" && noCustomer === "顧客") {
        await dispatch(updateCustomer(scheduleAndCustomerFormData) as any);
        await dispatch(createSchedule(scheduleAndCustomerFormData) as any);
      } else if (
        noCustomer === "それ以外" &&
        whoIsEvent !== "イベントクリック"
      ) {
        await dispatch(createSchedule(scheduleAndCustomerFormData) as any);
      } else if (
        noCustomer === "それ以外" &&
        whoIsEvent === "イベントクリック"
      ) {
        console.log(
          "scheduleAndCustomerFormDataだよ",
          scheduleAndCustomerFormData
        );
        await dispatch(updateSchedule(scheduleAndCustomerFormData) as any);
      }
    } catch (error) {
      console.error(error);
    } finally {
      handleClose();
      window.location.reload();
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let startTime = "";
    let endTime = "";

    if (
      (selectedEvent.allDay && whoIsEvent === "クリック") ||
      (selectedEvent.allDay &&
        selectedEvent.dateStr &&
        whoIsEvent === "イベントクリック")
    ) {
      // 終日かつクリックの場合
      // dateStr で取得した ISO8601 形式の文字列
      const dateStr = selectedEvent.dateStr;
      // ISO8601 形式の文字列から日付オブジェクトに変換
      const date = new Date(dateStr);
      // 日にちを追加
      date.setDate(date.getDate() + 1);
      // 変更された日付を再び ISO8601 形式の文字列に変換
      const newDateStr = date.toISOString();

      console.log("終日の一日+のnewDateStrだよ", newDateStr); // 日にちを追加した新しい ISO8601 形式の文字列
      startTime = selectedEvent.dateStr;
      endTime = newDateStr;
      setAllDay(1);
    } else if (
      (selectedEvent.allDay && whoIsEvent === "選択") ||
      (selectedEvent.allDay &&
        selectedEvent.startStr &&
        whoIsEvent === "イベントクリック")
    ) {
      // 終日かつ範囲選択の場合
      startTime = selectedEvent.startStr;
      endTime = selectedEvent.endStr;
      setAllDay(1);
    } else if (
      (!selectedEvent.allDay && whoIsEvent === "クリック") ||
      (!selectedEvent.allDay &&
        selectedEvent.dateStr &&
        whoIsEvent === "イベントクリック")
    ) {
      // クリックされたとき
      // dateStr で取得した ISO8601 形式の文字列
      const dateStr = selectedEvent.dateStr;
      // ISO8601 形式の文字列から日付オブジェクトに変換
      const date = new Date(dateStr);
      // 日にちを追加
      date.setMinutes(date.getMinutes() + 15);
      // 変更された日付を再び ISO8601 形式の文字列に変換
      const newDateStr = date.toISOString();

      console.log("終日なしのクリックの15分後のnewDateStrだよ", newDateStr); // 15分後の新しい ISO8601 形式の文字列

      startTime = selectedEvent.dateStr;
      endTime = newDateStr;
    } else if (
      (!selectedEvent.allDay && whoIsEvent === "選択") ||
      (!selectedEvent.allDay &&
        selectedEvent.startStr &&
        whoIsEvent === "イベントクリック")
    ) {
      // 範囲選択されたとき
      startTime = selectedEvent.startStr;
      endTime = selectedEvent.endStr;
      console.log("範囲選択startTimeだよ", startTime);
      console.log("範囲選択endTimeだよ", endTime);
    } else {
      console.log("エラー");
    }
    console.log("startTimeだよ", startTime);
    console.log("endTimeだよ", endTime);
    try {
      customerAndScheduleCreate(
        {
          id: newCustomer === "既存" ? customerId : 0,
          customer_name: customerName,
          phone_number: phone_number,
          remarks: remarks,
          courses_id: courses
            .filter((course) => courseNames.includes(course.course_name))
            .map((course) => course.id),
          options_id: options
            .filter((option) => optionNames.includes(option.option_name))
            .map((option) => option.id),
          merchandises_id: merchandises
            .filter((merchandise) =>
              merchandiseNames.includes(merchandise.merchandise_name)
            )
            .map((merchandise) => merchandise.id),
          hairstyles_id: hairstyles
            .filter((hairstyle) =>
              hairstyleNames.includes(hairstyle.hairstyle_name)
            )
            .map((hairstyle) => hairstyle.id),
          attendances_id: attendances
            .filter((attendance) =>
              attendanceNames.includes(attendance.attendance_name)
            )
            .map((attendance) => attendance.id),
          Sid: whoIsEvent === "イベントクリック" ? selectedEvent.id : 0,
          title: title ? title : "",
          start_time: selectedEvent ? startTime : "",
          end_time: selectedEvent ? endTime : "",
          allDay: allDay,
          customers_id: customerId,
        },
        newCustomer
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="text-xl text-gray-900 cursor-pointer hover:bg-gray-400 
        hover:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
      ></Button>

      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="rounded-xl">
          {/* モーダルのタイトル */}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="flex justify-center items-center ">予約内容</div>
            <form onSubmit={handleSubmit}>
              <div className="pt-4 flex justify-center items-center ml-4 mr-4">
                <h2>{allDay === 1 ? "終日" : "時間指定"}</h2>
              </div>
              {selectedEvent.allDay && whoIsEvent === "クリック" ? (
                <div>
                  {/* 終日かつクリックの場合 */}
                  <div className="flex justify-center items-center pt-4">
                    開始時間:
                    {selectedEvent ? selectedEvent.date.getFullYear() : ""}年
                    {selectedEvent ? selectedEvent.date.getMonth() + 1 : ""}月
                    {selectedEvent ? selectedEvent.date.getDate() : ""}日{" "}
                    {selectedEvent ? selectedEvent.date.getHours() : ""}時
                    {selectedEvent ? selectedEvent.date.getMinutes() : ""}分
                  </div>
                  <div className="flex justify-center items-center pt-4 ">
                    {" "}
                    終了時間:{" "}
                    {selectedEvent ? selectedEvent.date.getFullYear() : ""}年
                    {selectedEvent ? selectedEvent.date.getMonth() + 1 : ""}月
                    {selectedEvent ? selectedEvent.date.getDate() + 1 : ""}日{" "}
                    {selectedEvent ? selectedEvent.date.getHours() : ""}時
                    {selectedEvent ? selectedEvent.date.getMinutes() : ""}分
                  </div>
                </div>
              ) : (
                ""
              )}

              {(selectedEvent.allDay && whoIsEvent === "選択") ||
              (selectedEvent.allDay && whoIsEvent === "イベントクリック") ? (
                <div>
                  {/* 終日かつ範囲選択の場合 */}
                  <div className="flex justify-center items-center pt-4">
                    開始時間:
                    {selectedEvent ? selectedEvent.start.getFullYear() : ""}年
                    {selectedEvent ? selectedEvent.start.getMonth() + 1 : ""}月
                    {selectedEvent ? selectedEvent.start.getDate() : ""}日{" "}
                    {selectedEvent ? selectedEvent.start.getHours() : ""}時
                    {selectedEvent ? selectedEvent.start.getMinutes() : ""}分
                  </div>
                  <div className="flex justify-center items-center pt-4 ">
                    {" "}
                    終了時間:{" "}
                    {selectedEvent ? selectedEvent.end.getFullYear() : ""}年
                    {selectedEvent ? selectedEvent.end.getMonth() + 1 : ""}月
                    {selectedEvent ? selectedEvent.end.getDate() : ""}日{" "}
                    {selectedEvent ? selectedEvent.end.getHours() : ""}時
                    {selectedEvent ? selectedEvent.end.getMinutes() : ""}分
                  </div>
                </div>
              ) : (
                ""
              )}

              {!selectedEvent.allDay && whoIsEvent === "クリック" ? (
                <div>
                  {/* クリックされたとき */}

                  <div className="flex justify-center items-center pt-4">
                    開始時間:
                    {selectedEvent ? selectedEvent.date.getFullYear() : ""}年
                    {selectedEvent ? selectedEvent.date.getMonth() + 1 : ""}月
                    {selectedEvent ? selectedEvent.date.getDate() : ""}日{" "}
                    {selectedEvent ? selectedEvent.date.getHours() : ""}時
                    {selectedEvent ? selectedEvent.date.getMinutes() : ""}分
                  </div>
                  <div className="flex justify-center items-center pt-4 ">
                    {" "}
                    終了時間:{" "}
                    {selectedEvent ? selectedEvent.date.getFullYear() : ""}年
                    {selectedEvent ? selectedEvent.date.getMonth() + 1 : ""}月
                    {selectedEvent ? selectedEvent.date.getDate() : ""}日{" "}
                    {selectedEvent
                      ? selectedEvent.date.getMinutes() + 15 >= 60
                        ? selectedEvent.date.getHours() + 1
                        : selectedEvent.date.getHours()
                      : ""}
                    時
                    {selectedEvent
                      ? (selectedEvent.date.getMinutes() + 15) % 60
                      : ""}
                    分{/* 分の加算が60を超える場合、時間を繰り上げる */}
                  </div>
                </div>
              ) : (
                ""
              )}

              {(!selectedEvent.allDay && whoIsEvent === "選択") ||
              (!selectedEvent.allDay && whoIsEvent === "イベントクリック") ? (
                <div>
                  {/* 範囲選択されたとき */}
                  <div className="flex justify-center items-center pt-4">
                    開始時間:
                    {selectedEvent ? selectedEvent.start.getFullYear() : ""}年
                    {selectedEvent ? selectedEvent.start.getMonth() + 1 : ""}月
                    {selectedEvent ? selectedEvent.start.getDate() : ""}日{" "}
                    {selectedEvent ? selectedEvent.start.getHours() : ""}時
                    {selectedEvent ? selectedEvent.start.getMinutes() : ""}分
                  </div>
                  <div className="flex justify-center items-center pt-4 ">
                    {" "}
                    終了時間:{" "}
                    {selectedEvent ? selectedEvent.end.getFullYear() : ""}年
                    {selectedEvent ? selectedEvent.end.getMonth() + 1 : ""}月
                    {selectedEvent ? selectedEvent.end.getDate() : ""}日{" "}
                    {selectedEvent ? selectedEvent.end.getHours() : ""}時
                    {selectedEvent ? selectedEvent.end.getMinutes() : ""}分
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="pt-4 flex justify-center items-center ml-4 mr-4">
                <div className="w-32 mr-1">顧客？:</div>
                <SingleCheckBox
                  label="顧客orそれ以外"
                  value={noCustomer}
                  onChange={(newValue) => {
                    setNoCustomer(newValue);
                    if (newValue === "それ以外") {
                      setTitle("");

                      setNewCustomer("");
                      setCustomerId(0);
                      setCustomerName("");
                      setPhoneNumber("");
                      setRemarks("");
                      setCourseNames([]);
                      setOptionNames([]);
                      setMerchandiseNames([]);
                      setHairstyleNames([]);
                      setAttendanceNames([]);
                    } else if (newValue === "顧客") {
                      setNewCustomer("既存");
                      setCustomerName(initialCustomer.customer_name);
                      changeCustomerState(initialCustomer.customer_name);
                    }
                  }}
                  getOptions={["顧客", "それ以外"]}
                />
              </div>

              {noCustomer === "それ以外" ? (
                <div className="pt-4 flex justify-center items-center ml-4 mr-4">
                  <div className="w-32 mr-1">タイトル:</div>
                  <BasicTextField
                    type="text"
                    placeholder="タイトル"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              ) : (
                <div>
                  <div className="pt-4 flex justify-center items-center ml-4 mr-4">
                    <div className="w-32 mr-1">新規？:</div>
                    <SingleCheckBox
                      label="新規or既存"
                      value={newCustomer}
                      onChange={(newValue) => {
                        setNewCustomer(newValue);
                        if (newValue === "新規") {
                          clearStates();
                        } else if (newValue === "既存") {
                          setCustomerName(initialCustomer.customer_name);
                          changeCustomerState(initialCustomer.customer_name);
                        }
                      }}
                      getOptions={["新規", "既存"]}
                    />
                  </div>

                  {newCustomer === "既存" ? (
                    <div className="pt-4 ">
                      <div className="pt-4 flex justify-center items-center ml-4 mr-4">
                        <div className="w-32 mr-1">顧客名:</div>
                        <SingleCheckBox
                          label="顧客名"
                          onChange={(newValue) => {
                            changeCustomerState(newValue);
                          }}
                          getOptions={customersNames}
                          value={customerName}
                        />
                      </div>
                      <div className="pt-4 flex justify-center items-center ml-4 mr-4">
                        <span className="w-32 flex items-left">電話番号:</span>
                        <BasicTextField
                          type="number"
                          placeholder="電話番号"
                          value={phone_number}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>
                      <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                        <div className="w-32 mr-1">備考:</div>
                        <BasicTextField
                          type="text"
                          placeholder="備考"
                          value={remarks}
                          onChange={(e) => setRemarks(e.target.value)}
                        />
                      </div>
                      <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                        <div className="w-32 mr-1">コース名:</div>
                        <MultiCheckbox
                          nodesProp="course"
                          optionName={courseNames}
                          onChanger={handleCourseChange}
                          getOptions={courses}
                        />
                      </div>
                      <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                        <div className="w-32 mr-1">オプション名:</div>
                        <MultiCheckbox
                          nodesProp="option"
                          optionName={optionNames}
                          onChanger={handleOptionChange}
                          getOptions={options}
                        />
                      </div>
                      <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                        <div className="w-32 mr-1">商品名:</div>
                        <MultiCheckbox
                          nodesProp="merchandise"
                          optionName={merchandiseNames}
                          onChanger={handleMerchandiseChange}
                          getOptions={merchandises}
                        />
                      </div>
                      <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                        <div className="w-32 mr-1">ヘアスタイル名:</div>
                        <MultiCheckbox
                          nodesProp="hairstyle"
                          optionName={hairstyleNames}
                          onChanger={handleHairstyleChange}
                          getOptions={hairstyles}
                        />
                      </div>
                      <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                        <div className="w-32 mr-1">担当者名:</div>
                        <MultiCheckbox
                          nodesProp="attendance"
                          optionName={attendanceNames}
                          onChanger={handleAttendanceChange}
                          getOptions={attendances}
                        />
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="pt-4 flex justify-center items-center ml-4 mr-4">
                        <span className="w-32 flex items-left">顧客名:</span>
                        <BasicTextField
                          type="text"
                          placeholder="顧客名"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                        />
                      </div>

                      <div className="pt-4 flex justify-center items-center ml-4 mr-4">
                        <span className="w-32 flex items-left">電話番号:</span>
                        <BasicTextField
                          type="number"
                          placeholder="電話番号"
                          value={phone_number}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                      </div>

                      <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                        <span className="w-32 flex items-left">備考:</span>
                        <BasicTextField
                          type="text"
                          placeholder="備考"
                          value={remarks}
                          onChange={(e) => setRemarks(e.target.value)}
                        />
                      </div>

                      <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                        <div className="w-32 mr-1">コース:</div>
                        <MultiCheckbox
                          nodesProp="course"
                          optionName={courseNames}
                          onChanger={handleCourseChange}
                          getOptions={courses}
                        />
                      </div>
                      <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                        <div className="w-32 mr-1">オプション:</div>
                        <MultiCheckbox
                          nodesProp="option"
                          optionName={optionNames}
                          onChanger={handleOptionChange}
                          getOptions={options}
                        />
                      </div>
                      <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                        <div className="w-32 mr-1">商品:</div>
                        <MultiCheckbox
                          nodesProp="merchandise"
                          optionName={merchandiseNames}
                          onChanger={handleMerchandiseChange}
                          getOptions={merchandises}
                        />
                      </div>
                      <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                        <div className="w-32 mr-1">髪型:</div>
                        <MultiCheckbox
                          nodesProp="hairstyle"
                          optionName={hairstyleNames}
                          onChanger={handleHairstyleChange}
                          getOptions={hairstyles}
                        />
                      </div>
                      <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                        <div className="w-32 mr-1">担当者:</div>
                        <MultiCheckbox
                          nodesProp="attendance"
                          optionName={attendanceNames}
                          onChanger={handleAttendanceChange}
                          getOptions={attendances}
                        />
                      </div>
                    </>
                  )}
                </div>
              )}
              {whoIsEvent === "イベントクリック" ? (
                <div className="flex mt-6 justify-center items-center gap-32">
                  <DeleteMan id={selectedEvent.id} link={"/schedules"} />
                  <PrimaryButton value={"更新"} />
                </div>
              ) : (
                <div className="flex mt-4 justify-center items-center">
                  <PrimaryButton value={"作成"} />
                </div>
              )}
            </form>
          </Typography>
          {/* モーダルの内容 */}
        </Box>
      </Modal>
    </div>
  );
};

export default ScheduleModal;
