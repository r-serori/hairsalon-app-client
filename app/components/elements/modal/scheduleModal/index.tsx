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
} from "../../../../store/customers/customerSlice";
import {
  getSchedule,
  createSchedule,
  createCustomerSchedule,
  updateSchedule,
  updateCustomerSchedule,
  deleteSchedule,
  updateCustomerOnlySchedule,
} from "../../../../store/schedules/scheduleSlice";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";
import DeleteMan from "../../../DeleteMan/[DeleteMan]/[id]";
import BackAgainButton from "../../button/BackAgainButton";
import ControlledCheckbox from "../../input/checkbox/SimpleCheckBox";
import { SelectChangeEvent, dividerClasses } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
import DateTimeRangePicker from "../../input/DateTimePicker";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ja";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { v4 as uuidv4 } from "uuid";

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
  dayjs.locale("ja");
  dayjs.extend(utc);
  dayjs.extend(timezone);
  const dispatch = useDispatch();
  const router = useRouter();

  const uniqueId = uuidv4();

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

  const [isCustomer, setIsCustomer] = useState(true);
  //trueは顧客、falseはそれ以外

  const [newCustomer, setNewCustomer] = useState(isCustomer ? false : true);
  //trueは新規、falseは既存

  const [newReservation, setNewReservation] = useState(
    whoIsEvent === "イベントクリック" ? false : true
  );
  //trueは新規予約、falseは現在の予約を編集

  const [customerId, setCustomerId] = useState(
    !newCustomer ? initialCustomer.id : 0
  );

  const [customerName, setCustomerName] = useState(
    !newCustomer && whoIsEvent !== "イベントクリック"
      ? initialCustomer.customer_name
      : "" || (whoIsEvent === "イベントクリック" && searchCustomer)
      ? selectedEvent.title
      : "" || (selectedEvent.allDay && !searchCustomer)
      ? ""
      : ""
  );

  console.log("customerNameだよ", customerName);

  const [phone_number, setPhoneNumber] = useState(
    !newCustomer ? initialCustomer.phone_number : ""
  );

  const [remarks, setRemarks] = useState(
    !newCustomer ? initialCustomer.remarks : ""
  );

  const [courseNames, setCourseNames] = useState(
    !newCustomer ? initialCustomer.course : []
  );

  const [optionNames, setOptionNames] = useState(
    !newCustomer ? initialCustomer.option : []
  );

  const [merchandiseNames, setMerchandiseNames] = useState(
    !newCustomer ? initialCustomer.merchandise : []
  );

  const [hairstyleNames, setHairstyleNames] = useState(
    !newCustomer ? initialCustomer.hairstyle : []
  );

  const [attendanceNames, setAttendanceNames] = useState(
    !newCustomer ? initialCustomer.attendance : []
  );

  const [Sid, setSid] = useState(
    whoIsEvent === "イベントクリック" ? selectedEvent.id : 0
  );

  const [allDay, setAllDay] = useState(selectedEvent.allDay ? 1 : 0);

  const [title, setTitle] = useState(
    !searchCustomer ? selectedEvent.title : ""
  );

  const [startTime, setStartTime] = useState(selectedEvent.startStr);

  const [endTime, setEndTime] = useState(selectedEvent.endStr);

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
      if (
        //新規予約、新規顧客、タイトルなし
        newReservation &&
        newCustomer &&
        !title
      ) {
        await dispatch(
          createCustomerSchedule(scheduleAndCustomerFormData) as any
        );
      } else if (
        //新規予約、既存顧客、タイトルなし,イベントクリック以外
        newReservation &&
        !newCustomer &&
        whoIsEvent !== "イベントクリック" &&
        !title
      ) {
        await dispatch(
          updateCustomerOnlySchedule(scheduleAndCustomerFormData) as any
        );
      } else if (
        //予約編集、既存顧客、タイトルなし、イベントクリック
        !newReservation &&
        !newCustomer &&
        whoIsEvent === "イベントクリック" &&
        !title
      ) {
        await dispatch(
          updateCustomerSchedule(scheduleAndCustomerFormData) as any
        );
      } else if (
        //新規予約、顧客以外、タイトルあり
        newReservation &&
        !isCustomer &&
        whoIsEvent !== "イベントクリック" &&
        title
      ) {
        await dispatch(createSchedule(scheduleAndCustomerFormData) as any);
      } else if (
        //予約編集、顧客以外、タイトルあり,イベントクリック
        !newReservation &&
        !isCustomer &&
        whoIsEvent === "イベントクリック" &&
        title
      ) {
        await dispatch(updateSchedule(scheduleAndCustomerFormData) as any);
      }
    } catch (error) {
      console.error(error);
    } finally {
      handleClose();
      // window.location.reload();
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    customerAndScheduleCreate(
      {
        id: !newCustomer ? customerId : 0,
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
        Sid: Sid ? Sid : 0,
        title: title ? title : "",
        start_time: startTime,
        end_time: endTime,
        allDay: allDay,
        customers_id: customerId,
      },
      newCustomer
    );
  };

  const BackAgain = () => {
    setIsCustomer(true);
    setNewCustomer(true);
    setCustomerId(0);
    setCustomerName("");
    setPhoneNumber("");
    setRemarks("");
    setCourseNames([]);
    setOptionNames([]);
    setMerchandiseNames([]);
    setHairstyleNames([]);
    setAttendanceNames([]);
    setAllDay(0);
    setTitle("");
    setShowModal(false);
  };

  const startTimeChange = (e) => {
    console.log("eFです", dayjs(e).utc().tz("Asia/Tokyo").format());
    setStartTime(dayjs(e).utc().tz("Asia/Tokyo").format());
  };
  console.log("startTimeです", startTime);

  const endTimeChange = (e) => {
    setEndTime(dayjs(e).utc().tz("Asia/Tokyo").format());
  };

  console.log("endTimeです", endTime);

  console.log("ScheIdです", Sid);

  console.log("uniqueIdです", uniqueId);

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
          {whoIsEvent === "イベントクリック" && !newReservation ? (
            <div className="flex justify-between items-center ml-2">
              <DeleteMan id={Sid} link={"/schedules"} />
              <button
                onClick={BackAgain}
                className="md:w-auto text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-4 py-2 text-center cursor-pointer mr-2"
              >
                戻る
              </button>
            </div>
          ) : (
            <div className="flex justify-end ">
              <BackAgainButton onChanger={BackAgain} />
            </div>
          )}

          {/* モーダルのタイトル */}
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className="flex justify-center items-center  text-4xl">
              予約内容
            </div>

            <form onSubmit={handleSubmit}>
              <div className="pt-6 flex justify-center items-center ml-4 mr-4 text-3xl">
                <h2>{allDay === 1 ? "終日" : "時間指定"}</h2>
              </div>

              <div className="flex justify-center items-center  gap-4">
                <div className="flex justify-center items-center pt-6 gap-4">
                  開始時間:{" "}
                  <DateTimeRangePicker
                    value={startTime}
                    changer={startTimeChange}
                    isAllDay={allDay === 1 ? true : false}
                  />
                </div>
                <div className="flex justify-center items-center pt-6 gap-4">
                  終了時間:{" "}
                  <DateTimeRangePicker
                    value={endTime}
                    changer={endTimeChange}
                    isAllDay={allDay === 1 ? true : false}
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-center items-center ml-4 mr-4 ">
                <div className="flex justify-center items-center ">
                  {whoIsEvent === "イベントクリック" ? (
                    <div className="flex justify-center items-center mr-4">
                      <div>{newReservation ? "新規予約" : "予約編集"}:</div>
                      <ControlledCheckbox
                        checked={newReservation}
                        onChanger={(newValue) => {
                          setNewReservation(newValue);
                        }}
                      />
                    </div>
                  ) : (
                    ""
                  )}

                  <div>{isCustomer ? "顧客" : "その他"}:</div>
                  <ControlledCheckbox
                    checked={isCustomer}
                    onChanger={(newValue) => {
                      setIsCustomer(newValue);
                      if (!newValue) {
                        setTitle("");

                        setNewCustomer(true);
                        setCustomerId(0);
                        setCustomerName("");
                        setPhoneNumber("");
                        setRemarks("");
                        setCourseNames([]);
                        setOptionNames([]);
                        setMerchandiseNames([]);
                        setHairstyleNames([]);
                        setAttendanceNames([]);
                      } else if (newValue) {
                        setNewCustomer(false);
                        setCustomerName(initialCustomer.customer_name);
                        changeCustomerState(initialCustomer.customer_name);
                      }
                    }}
                    type={whoIsEvent === "イベントクリック" ? "disabled" : ""}
                  />
                </div>
                {isCustomer ? (
                  <div className="flex justify-center items-center ml-4">
                    <div>{newCustomer ? "新規" : "既存"}:</div>
                    <ControlledCheckbox
                      checked={newCustomer}
                      onChanger={(newValue) => {
                        setNewCustomer(newValue);
                        if (newValue) {
                          clearStates();
                        } else if (!newValue) {
                          setCustomerName(initialCustomer.customer_name);
                          changeCustomerState(initialCustomer.customer_name);
                        }
                      }}
                      type={!newReservation ? "disabled" : ""}
                    />
                  </div>
                ) : (
                  ""
                )}
              </div>
              {!isCustomer ? (
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
                  {!newCustomer ? (
                    <div className="pt-4 ">
                      <div className="pt-4 flex justify-center items-center ml-4 mr-4">
                        <div className="w-32 mr-1">顧客名:</div>
                        <SingleCheckBox
                          label="顧客名"
                          onChange={(newValue) => {
                            changeCustomerState(newValue);
                          }}
                          nodeId={customerId + uniqueId}
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

              <div className="flex mt-6 justify-end items-center mr-2">
                <PrimaryButton
                  value={
                    whoIsEvent === "イベントクリック" && !newReservation
                      ? "更新"
                      : "作成"
                  }
                />
              </div>
            </form>
          </Typography>
          {/* モーダルの内容 */}
        </Box>
      </Modal>
    </div>
  );
};

export default ScheduleModal;
