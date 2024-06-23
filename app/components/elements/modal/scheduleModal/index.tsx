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
  createCustomerAndSchedule,
  updateSchedule,
  updateCustomerAndSchedule,
  deleteSchedule,
  updateCustomerAndScheduleCreate,
} from "../../../../store/schedules/scheduleSlice";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";
import DeleteMan from "../../../DeleteMan/[DeleteMan]/[id]";
import BackAgainButton from "../../button/RouterButton";
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
  setWhoIsEvent: (value: string) => void;
  setShowModal: (value: boolean) => void;
  setSelectedEvent: (value: any) => void;
  isCustomer: boolean;
  setIsCustomer: (value: boolean) => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({
  showModal,
  selectedEvent,
  whoIsEvent,
  setWhoIsEvent,
  setShowModal,
  setSelectedEvent,
  isCustomer,
  setIsCustomer,
}) => {
  dayjs.locale("ja");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const dispatch = useDispatch();
  const router = useRouter();

  const uniqueId = uuidv4();

  // 顧客情報を取得
  const customers = useSelector((state: RootState) => state.customer.customers);

  // コース情報を取得
  const courses = useSelector((state: RootState) => state.course.course);

  // オプション情報を取得
  const options = useSelector((state: RootState) => state.option.option);

  // 商品情報を取得
  const merchandises = useSelector(
    (state: RootState) => state.merchandise.merchandise
  );

  // ヘアスタイル情報を取得
  const hairstyles = useSelector(
    (state: RootState) => state.hairstyle.hairstyle
  );

  // 担当者情報を取得
  const users = useSelector((state: RootState) => state.auth.auth);

  // 中間テーブルの情報を取得
  const course_customers = useSelector(
    (state: RootState) => state.course_customers.course_customers
  );

  console.log("course_customersだよ");
  console.log(course_customers);
  // 中間テーブルの情報を取得
  const option_customers = useSelector(
    (state: RootState) => state.option_customers.option_customers
  );
  // 中間テーブルの情報を取得
  const merchandise_customers = useSelector(
    (state: RootState) => state.merchandise_customers.merchandise_customers
  );
  // 中間テーブルの情報を取得
  const hairstyle_customers = useSelector(
    (state: RootState) => state.hairstyle_customers.hairstyle_customers
  );
  // 中間テーブルの情報を取得
  const customer_users = useSelector(
    (state: RootState) => state.customer_users.customer_users
  );

  // 顧客情報を取得　上記の情報を元に顧客情報を取得
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
      //user_idを配列にしている
      const customerUsers = customer_users
        .filter((user) => user.customers_id === customer.id)
        .map((user) => user.user_id);

      console.log(customerUsers);

      const userNames = users
        .filter((user) => customerUsers.includes(user.id))
        .map((user) => user.name);

      console.log("userNamesだよ");
      console.log(userNames);

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
        names: userNames,
        updated_at: customer.updated_at,
      };
    }),
  ];

  // 顧客名のみを取得
  const customersNames = nodes.map((node) => node.customer_name);

  //編集時に顧客名を検索し、存在していればtrueを返す
  const searchCustomer =
    whoIsEvent === "編集"
      ? customersNames.includes(selectedEvent.title)
      : false;

  console.log("searchCustomerだよ", searchCustomer);

  const [newReservation, setNewReservation] = useState<boolean>(
    whoIsEvent === "編集" ? false : true
  );

  //trueは新規顧客、falseは既存顧客 顧客予約の場合はfalse　最初は既存顧客を表示
  const [newCustomer, setNewCustomer] = useState(isCustomer ? false : true);

  //新規予約の場合、初期値として最初の顧客情報を取得
  const initialCustomer = nodes[0];

  // 既存顧客で新規予約の場合、初期値として最初の顧客情報を取得
  const [customerId, setCustomerId] = useState(
    !newCustomer ? initialCustomer.id : 0
  );

  //
  const [customerName, setCustomerName] = useState(
    //新規顧客、新規予約の場合は初期値としてnode[0]の顧客名を設定
    !newCustomer && whoIsEvent !== "編集"
      ? initialCustomer.customer_name
      : //編集の場合は選択したイベントの顧客名を設定
      "" || (whoIsEvent === "編集" && searchCustomer)
      ? selectedEvent.title
      : //終日予約で顧客名がない場合は空文字を設定
      "" || (selectedEvent.allDay && !searchCustomer)
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

  const [userNames, setUserNames] = useState(
    !newCustomer ? initialCustomer.names : []
  );

  //編集時に選択したイベントのIDを取得  新規予約の場合は0 scheduleテーブルのID
  const [Sid, setSid] = useState(whoIsEvent === "編集" ? selectedEvent.id : 0);

  //終日予約か時間指定予約かを判定
  const [allDay, setAllDay] = useState(selectedEvent.allDay ? 1 : 0);

  //顧客以外の予約の場合、タイトルを設定
  const [title, setTitle] = useState(
    !isCustomer && whoIsEvent === "編集" ? selectedEvent.title : ""
  );
  //開始時間を設定
  const [startTime, setStartTime] = useState<Dayjs | null>(
    allDay && whoIsEvent === "クリック"
      ? dayjs(selectedEvent.dateStr).utc().tz("Asia/Tokyo")
      : dayjs(selectedEvent.startStr).utc().tz("Asia/Tokyo")
  );
  //終了時間を設定
  const [endTime, setEndTime] = useState<Dayjs | null>(
    allDay && whoIsEvent === "クリック"
      ? dayjs(selectedEvent.dateStr).add(1, "day").utc().tz("Asia/Tokyo")
      : dayjs(selectedEvent.endStr).utc().tz("Asia/Tokyo")
  );

  //顧客名を変更する際に、顧客情報を取得
  useEffect(() => {
    if (whoIsEvent === "編集") {
      changeCustomerState(selectedEvent.title);
    } else {
      return;
    }
  }, [whoIsEvent]);

  const changeCustomerState = (newValue) => {
    //編集時に選択した顧客情報を取得
    const useCustomerState = nodes.find(
      (node) => node.customer_name === newValue
    );

    console.log("useCustomerStateだよ");
    console.log(useCustomerState);

    if (!useCustomerState) {
      setIsCustomer(false);
      return;
    }

    // useCustomerStateが存在する場合、顧客情報を設定
    setIsCustomer(true);
    setCustomerId(useCustomerState.id);
    setCustomerName(newValue);
    setPhoneNumber(useCustomerState.phone_number || "");
    setRemarks(useCustomerState.remarks || "");
    setCourseNames(useCustomerState.course || []);
    setOptionNames(useCustomerState.option || []);
    setMerchandiseNames(useCustomerState.merchandise || []);
    setHairstyleNames(useCustomerState.hairstyle || []);
    setUserNames(useCustomerState.names || []);
  };

  //顧客情報をクリアする関数
  const clearStates = () => {
    setCustomerId(0);
    setCustomerName("");
    setPhoneNumber("");
    setRemarks("");
    setCourseNames([]);
    setOptionNames([]);
    setMerchandiseNames([]);
    setHairstyleNames([]);
    setUserNames([]);
  };

  //MultiCheckboxを使用する際の配列の値を変更していってくれる関数。
  //MultiCheckboxでは、選択した値を配列に格納していくため、
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

  const handleUserChange = (event: SelectChangeEvent<string[]>) => {
    setUserNames(event.target.value as string[]);
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
      user_id: number[];
      Sid: number;
      title: string;
      start_time: string;
      end_time: string;
      allDay: number;
      customers_id: number;
      owner_id: number;
    },
    newCustomer
  ) => {
    try {
      if (
        //新規予約、新規顧客、タイトルなし
        whoIsEvent !== "編集" &&
        newCustomer &&
        !title
      ) {
        await dispatch(
          createCustomerAndSchedule(scheduleAndCustomerFormData) as any
        );
        // const update = "true";
        // router.push({
        //   pathname: "/schedules",
        //   query: { update },
        // });
      } else if (
        //新規予約、既存顧客、タイトルなし
        !newCustomer &&
        whoIsEvent !== "編集" &&
        !title
      ) {
        await dispatch(
          updateCustomerAndScheduleCreate(scheduleAndCustomerFormData) as any
        );
      } else if (
        //予約編集、既存顧客、タイトルなし
        !newCustomer &&
        whoIsEvent === "編集" &&
        !title
      ) {
        await dispatch(
          updateCustomerAndSchedule(scheduleAndCustomerFormData) as any
        );
      } else if (
        //新規予約、顧客以外、タイトルあり
        !isCustomer &&
        whoIsEvent !== "編集" &&
        title
      ) {
        await dispatch(createSchedule(scheduleAndCustomerFormData) as any);
      } else if (
        //予約編集、顧客以外、タイトルあり,編集
        !isCustomer &&
        whoIsEvent === "編集" &&
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
        user_id: users
          .filter((user) => userNames.includes(user.name))
          .map((user) => user.id),
        Sid: Sid ? Sid : 0,
        title: title ? title : "",
        start_time: dayjs(startTime)
          .utc()
          .tz("Asia/Tokyo")
          .format("YYYY-MM-DD hh:mm:ss"),
        end_time: dayjs(endTime)
          .utc()
          .tz("Asia/Tokyo")
          .format("YYYY-MM-DD hh:mm:ss"),
        allDay: allDay,
        customers_id: !newCustomer ? customerId : 0,
        owner_id: Number(localStorage.getItem("owner_id")),
      },
      newCustomer
    );
  };

  const BackAgain = () => {
    setWhoIsEvent("");
    setIsCustomer(true);
    setNewCustomer(false);
    setCustomerId(0);
    setCustomerName("");
    setPhoneNumber("");
    setRemarks("");
    setCourseNames([]);
    setOptionNames([]);
    setMerchandiseNames([]);
    setHairstyleNames([]);
    setUserNames([]);
    setAllDay(0);
    setTitle("");
    setStartTime(null);
    setEndTime(null);
    setNewReservation(false);
    setShowModal(false);
    setSelectedEvent(null);
  };

  const startTimeChange = (e) => {
    console.log("eFです", dayjs(e).utc().tz("Asia/Tokyo"));
    setStartTime(dayjs(e).utc().tz("Asia/Tokyo"));
  };
  console.log("startTimeです", startTime);

  const endTimeChange = (e) => {
    setEndTime(dayjs(e).utc().tz("Asia/Tokyo"));
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
          {whoIsEvent === "編集" ? (
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
                  {whoIsEvent === "編集" && (
                    <div
                      className={`flex justify-center items-center ml-4 ${
                        newReservation ? "" : "opacity-40"
                      } `}
                    >
                      <ControlledCheckbox
                        label="            現在の予約を編集"
                        checked={newReservation ? true : false}
                        onChanger={(newValue) => {
                          setNewReservation(newValue ? true : false);
                        }}
                      />
                    </div>
                  )}

                  {whoIsEvent === "編集" && (
                    <div
                      className={` flex justify-center items-center ml-4 ${
                        !newReservation ? "" : "opacity-40"
                      } `}
                    >
                      <ControlledCheckbox
                        label="選択中の時間に新規予約を追加"
                        checked={newReservation ? false : true}
                        onChanger={(newValue) => {
                          setNewReservation(newValue ? false : true);
                        }}
                      />
                    </div>
                  )}

                  {/* 顧客の場合 */}
                  {isCustomer && (
                    <div
                      className={` flex justify-center items-center ml-4 ${
                        newCustomer ? "" : "opacity-40"
                      } `}
                    >
                      <ControlledCheckbox
                        label="新規顧客:"
                        checked={newCustomer ? true : false}
                        onChanger={(newValue) => {
                          setNewCustomer(newValue ? true : false);
                          if (newValue === true) {
                            clearStates();
                          } else if (newValue === false) {
                            setCustomerName(initialCustomer.customer_name);
                            changeCustomerState(initialCustomer.customer_name);
                          }
                        }}
                        // type={!newCustomer ? "disabled" : ""}
                      />
                    </div>
                  )}
                  {isCustomer && (
                    <div
                      className={` flex justify-center items-center ml-4 ${
                        !newCustomer ? "" : "opacity-40"
                      } `}
                    >
                      <ControlledCheckbox
                        label="既存顧客:"
                        checked={newCustomer ? false : true}
                        onChanger={(newValue) => {
                          setNewCustomer(newValue ? false : true);
                          if (newValue === false) {
                            clearStates();
                          } else if (newValue === true) {
                            setCustomerName(initialCustomer.customer_name);
                            changeCustomerState(initialCustomer.customer_name);
                          }
                        }}
                        // type={whoIsEvent === "編集" ? "disabled" : ""}
                      />
                    </div>
                  )}
                </div>
              </div>

              {!isCustomer && (
                <div className="pt-4 flex justify-center items-center ml-4 mr-4">
                  <div className="w-32 mr-1">タイトル:</div>
                  <BasicTextField
                    type="text"
                    placeholder="タイトル"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              )}

              {!newCustomer && isCustomer && (
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
                      nodesProp="names"
                      optionName={userNames}
                      onChanger={handleUserChange}
                      getOptions={users}
                    />
                  </div>
                </div>
              )}
              {newCustomer && isCustomer && (
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
                      nodesProp="names"
                      optionName={userNames}
                      onChanger={handleUserChange}
                      getOptions={users}
                    />
                  </div>
                </>
              )}

              <div className="flex mt-6 justify-end items-center mr-2">
                <PrimaryButton
                  value={whoIsEvent === "編集" ? "更新" : "作成"}
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
