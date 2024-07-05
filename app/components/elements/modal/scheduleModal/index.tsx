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
import {
  course_customersStore,
  coursesStore,
  customer_usersStore,
  customersStore,
  hairstyle_customersStore,
  hairstylesStore,
  merchandiseStore,
  merchandise_customersStore,
  option_customersStore,
  optionsStore,
} from "../../../Hooks/selector";
import { user } from "../../../Hooks/authSelector";
import { CourseState } from "../../../../store/courses/courseSlice";
import { OptionState } from "../../../../store/options/optionSlice";
import { MerchandiseState } from "../../../../store/merchandises/merchandiseSlice";
import { HairstyleState } from "../../../../store/hairstyles/hairstyleSlice";
import { RoleState, UserAllState } from "../../../Hooks/interface";
import { Course_customersState } from "../../../../store/middleTable/customers/course_customersSlice";
import { Option_customersState } from "../../../../store/middleTable/customers/option_customersSlice";
import { Merchandise_customersState } from "../../../../store/middleTable/customers/merchandise_customersSlice";
import { Hairstyle_customersState } from "../../../../store/middleTable/customers/hairstyle_customersSlice";
import { Customer_usersState } from "../../../../store/middleTable/customers/customer_usersSlice";
import BasicNumberField from "../../input/BasicNumberField";

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
  role: RoleState;
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
  role,
}) => {
  dayjs.locale("ja");
  dayjs.extend(utc);
  dayjs.extend(timezone);

  const dispatch = useDispatch();
  const router = useRouter();

  const uniqueId = uuidv4();

  // 顧客情報を取得
  const customers: CustomerState[] = useSelector(customersStore);

  // コース情報を取得
  const courses: CourseState[] = useSelector(coursesStore);

  // オプション情報を取得
  const options: OptionState[] = useSelector(optionsStore);

  // 商品情報を取得
  const merchandises: MerchandiseState[] = useSelector(merchandiseStore);

  // ヘアスタイル情報を取得
  const hairstyles: HairstyleState[] = useSelector(hairstylesStore);

  // 担当者情報を取得
  const users: UserAllState[] = useSelector(user);
  // console.log("userです", users);

  // 中間テーブルの情報を取得
  const course_customers: Course_customersState[] = useSelector(
    course_customersStore
  );

  // console.log("course_customersだよ");
  // console.log(course_customers);
  // 中間テーブルの情報を取得
  const option_customers: Option_customersState[] = useSelector(
    option_customersStore
  );
  // 中間テーブルの情報を取得
  const merchandise_customers: Merchandise_customersState[] = useSelector(
    merchandise_customersStore
  );
  // 中間テーブルの情報を取得
  const hairstyle_customers: Hairstyle_customersState[] = useSelector(
    hairstyle_customersStore
  );

  // 中間テーブルの情報を取得
  const customer_users: Customer_usersState[] =
    useSelector(customer_usersStore);

  // 顧客情報を取得　上記の情報を元に顧客情報を取得
  const nodes = customers
    ? [
        ...customers.map((customer) => {
          // customerは一回一番下まで行く。その後、次のcustomerに行く。
          // 顧客に関連するコースの情報を取得
          const customerCourses: number[] = course_customers
            .filter((course) => course.customer_id === customer.id)
            .map((course) => course.course_id);

          // console.log(customerCourses);
          //  [1,2,3]

          const courseNames: string[] = courses
            .filter((course) => customerCourses.includes(course.id))
            .map((course) => course.course_name);

          // console.log("courseNamesだよ");
          // console.log(courseNames);

          // 顧客に関連するオプションの情報を取得
          const customerOptions: number[] = option_customers
            .filter((option) => option.customer_id === customer.id)
            .map((option) => option.option_id);

          // console.log(customerOptions);

          const optionNames: string[] = options
            .filter((option) => customerOptions.includes(option.id))
            .map((option) => option.option_name);

          // console.log("optionNamesだよ");
          // console.log(optionNames);

          // 顧客に関連する商品の情報を取得
          const customerMerchandises: number[] = merchandise_customers
            .filter((merchandise) => merchandise.customer_id === customer.id)
            .map((merchandise) => merchandise.merchandise_id);

          // console.log(customerMerchandises);

          const merchandiseNames: string[] = merchandises
            .filter((merchandise) =>
              customerMerchandises.includes(merchandise.id)
            )
            .map((merchandise) => merchandise.merchandise_name);

          // console.log("merchandiseNamesだよ");
          // console.log(merchandiseNames);

          // 顧客に関連するヘアスタイルの情報を取得
          const customerHairstyles: number[] = hairstyle_customers
            .filter((hairstyle) => hairstyle.customer_id === customer.id)
            .map((hairstyle) => hairstyle.hairstyle_id);

          // console.log("cusHair", customerHairstyles);

          // console.log("hairstylesだよ", hairstyles);

          const hairstyleNames: string[] = hairstyles
            .filter((hairstyle) => customerHairstyles.includes(hairstyle.id))
            .map((hairstyle) => hairstyle.hairstyle_name);

          // console.log("hairstyleNamesだよ");

          // console.log(hairstyleNames);

          // 顧客に関連する担当者の情報を取得
          //user_idを配列にしている
          const customerUsers: number[] = customer_users
            .filter((user) => user.customer_id === customer.id)
            .map((user) => user.user_id);

          // console.log("customerUsers", customerUsers);

          // console.log("users前", users);

          const userNames: string[] = users
            .filter((user) => customerUsers.includes(user.id))
            .map((user) => user.name);

          // console.log("userNames", userNames);

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
          };
        }),
      ]
    : [];

  // console.log("nodes", nodes);

  // 顧客名のみを取得
  const customersNames: string[] = nodes.map((node) => node.customer_name);

  //編集時に顧客名を検索し、存在していればtrueを返す
  const searchCustomer: boolean =
    whoIsEvent === "編集" && customersNames.includes(selectedEvent.title)
      ? true
      : false;

  // console.log("searchCustomerだよ", searchCustomer);

  //新規予約の場合、初期値として最初の顧客情報を取得
  const initialCustomer = nodes[0] ? nodes[0] : null;

  const [newReservation, setNewReservation] = useState<boolean>(
    initialCustomer === null ? true : whoIsEvent === "編集" ? false : true
  );

  //trueは新規顧客、falseは既存顧客 顧客予約の場合はfalse　最初は既存顧客を表示
  const [newCustomer, setNewCustomer] = useState<boolean>(
    initialCustomer === null ? true : isCustomer ? false : true
  );

  // 既存顧客で新規予約の場合、初期値として最初の顧客情報を取得
  const [customerId, setCustomerId] = useState<number>(
    initialCustomer === null
      ? 0
      : !newCustomer && initialCustomer.id
      ? initialCustomer.id
      : 0
  );

  //
  const [customerName, setCustomerName] = useState<string>(
    //新規顧客、新規予約の場合は初期値としてnode[0]の顧客名を設定
    initialCustomer === null
      ? ""
      : !newCustomer && whoIsEvent !== "編集"
      ? initialCustomer.customer_name
      : //編集の場合は選択したイベントの顧客名を設定
      "" || (whoIsEvent === "編集" && searchCustomer)
      ? selectedEvent.title
      : //終日予約で顧客名がない場合は空文字を設定
      "" || (selectedEvent.allDay && !searchCustomer)
      ? ""
      : ""
  );

  // console.log("customerNameだよ", customerName);

  const [phone_number, setPhoneNumber] = useState<string>(
    initialCustomer === null
      ? ""
      : !newCustomer
      ? initialCustomer.phone_number
      : ""
  );

  const [remarks, setRemarks] = useState<string>(
    initialCustomer === null ? "" : !newCustomer ? initialCustomer.remarks : ""
  );

  const [courseNames, setCourseNames] = useState(
    initialCustomer === null ? [] : !newCustomer ? initialCustomer.course : []
  );

  const [optionNames, setOptionNames] = useState(
    initialCustomer === null ? [] : !newCustomer ? initialCustomer.option : []
  );

  const [merchandiseNames, setMerchandiseNames] = useState(
    initialCustomer === null
      ? []
      : !newCustomer
      ? initialCustomer.merchandise
      : []
  );

  const [hairstyleNames, setHairstyleNames] = useState(
    initialCustomer === null
      ? []
      : !newCustomer
      ? initialCustomer.hairstyle
      : []
  );

  const [userNames, setUserNames] = useState(
    initialCustomer === null ? [] : !newCustomer ? initialCustomer.names : []
  );

  const [customerNameValidate, setCustomerNameValidate] =
    useState<boolean>(false);

  const [usernameValidate, setUsernameValidate] = useState<boolean>(false);

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

    // console.log("useCustomerStateだよ");
    // console.log(useCustomerState);

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
      course_id: number[];
      option_id: number[];
      merchandise_id: number[];
      hairstyle_id: number[];
      user_id: number[];
      Sid: number;
      title: string;
      start_time: string;
      end_time: string;
      allDay: number;
      customer_id: number;
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
      // console.error(error);
    } finally {
      handleClose();
      // window.location.reload();
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isCustomer && (!customerNameValidate || !usernameValidate)) {
      return;
    }

    customerAndScheduleCreate(
      {
        id: !newCustomer ? customerId : 0,
        customer_name: customerName,
        phone_number: phone_number,
        remarks: remarks,
        course_id: courses
          .filter((course) => courseNames.includes(course.course_name))
          .map((course) => course.id),
        option_id: options
          .filter((option) => optionNames.includes(option.option_name))
          .map((option) => option.id),
        merchandise_id: merchandises
          .filter((merchandise) =>
            merchandiseNames.includes(merchandise.merchandise_name)
          )
          .map((merchandise) => merchandise.id),
        hairstyle_id: hairstyles
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
        customer_id: !newCustomer ? customerId : 0,
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
    // console.log("eFです", dayjs(e).utc().tz("Asia/Tokyo"));
    setStartTime(dayjs(e).utc().tz("Asia/Tokyo"));
  };
  // console.log("startTimeです", startTime);

  const endTimeChange = (e) => {
    setEndTime(dayjs(e).utc().tz("Asia/Tokyo"));
  };

  // console.log("endTimeです", endTime);

  // console.log("ScheIdです", Sid);

  // console.log("uniqueIdです", uniqueId);

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
              {role === "オーナー" ||
                (role === "マネージャー" && (
                  <DeleteMan id={Sid} link={"/schedules"} />
                ))}
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
                <div className="flex justify-center items-center pt-6">
                  <span className="mr-2 text-right">開始時間:</span>
                  <DateTimeRangePicker
                    value={startTime}
                    changer={startTimeChange}
                    isAllDay={allDay === 1 ? true : false}
                    role={role}
                  />
                </div>
                <div className="flex justify-center items-center pt-6 ">
                  <span className=" text-right mr-2">終了時間:</span>
                  <DateTimeRangePicker
                    value={endTime}
                    changer={endTimeChange}
                    isAllDay={allDay === 1 ? true : false}
                    role={role}
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
                        label="現在の予約を編集"
                        checked={newReservation ? true : false}
                        onChanger={(newValue) => {
                          setNewReservation(newValue ? true : false);
                        }}
                        role={role}
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
                        role={role}
                      />
                    </div>
                  )}

                  {/* 顧客の場合 */}
                  {isCustomer && initialCustomer && (
                    <div
                      className={` flex justify-center items-center ml-4 ${
                        newCustomer || initialCustomer === null
                          ? ""
                          : "opacity-40"
                      } `}
                    >
                      <ControlledCheckbox
                        label={initialCustomer === null ? "" : "新規顧客:"}
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
                        // type={initialCustomer === null ? "disabled" : ""}
                        role={role}
                      />
                    </div>
                  )}
                  {isCustomer && initialCustomer && (
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
                        role={role}
                        // type={whoIsEvent === "編集" ? "disabled" : ""}
                      />
                    </div>
                  )}
                </div>
              </div>

              {!isCustomer && (
                <div className="pt-4 flex justify-center items-center ml-4 mr-4">
                  <div className="w-32 mr-2 text-right">タイトル:</div>
                  <BasicTextField
                    id={uniqueId}
                    placeholder="タイトル"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    role={role}
                    decideLength={50}
                  />
                </div>
              )}

              {!newCustomer && isCustomer && (
                <div className="pt-4">
                  <div className="pt-4 flex justify-center items-center ml-4 mr-4">
                    <div className="w-32 mr-2 text-right">顧客名:</div>
                    <SingleCheckBox
                      onChange={(newValue) => {
                        changeCustomerState(newValue);
                      }}
                      nodeId={customerId + uniqueId}
                      getOptions={customersNames}
                      value={customerName}
                      role={role}
                      onValidationChange={(newValue) =>
                        setCustomerNameValidate(newValue)
                      }
                    />
                  </div>
                  <div className="pt-4 flex justify-center items-center ml-4 mr-4">
                    <span className="w-32 mr-2 text-right">電話番号:</span>
                    <BasicNumberField
                      id={uniqueId}
                      placeholder="電話番号"
                      value={phone_number}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      role={role}
                      required={false}
                    />
                  </div>
                  <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                    <div className="w-32 mr-2 text-right">備考:</div>
                    <BasicTextField
                      id={uniqueId}
                      placeholder="備考"
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                      role={role}
                      decideLength={150}
                      multiline={true}
                      rows={4}
                      required={false}
                    />
                  </div>
                  <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                    <div className="w-32 mr-2 text-right">コース名:</div>
                    <MultiCheckbox
                      nodesProp="course"
                      optionName={courseNames}
                      onChanger={handleCourseChange}
                      getOptions={courses}
                      role={role}
                      required={false}
                    />
                  </div>
                  <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                    <div className="w-32 mr-2 text-right">オプション名:</div>
                    <MultiCheckbox
                      nodesProp="option"
                      optionName={optionNames}
                      onChanger={handleOptionChange}
                      getOptions={options}
                      role={role}
                      required={false}
                    />
                  </div>
                  <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                    <div className="w-32 mr-2 text-right">商品名:</div>
                    <MultiCheckbox
                      nodesProp="merchandise"
                      optionName={merchandiseNames}
                      onChanger={handleMerchandiseChange}
                      getOptions={merchandises}
                      role={role}
                      required={false}
                    />
                  </div>
                  <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                    <div className="w-32 mr-2 text-right">ヘアスタイル名:</div>
                    <MultiCheckbox
                      nodesProp="hairstyle"
                      optionName={hairstyleNames}
                      onChanger={handleHairstyleChange}
                      getOptions={hairstyles}
                      role={role}
                      required={false}
                    />
                  </div>
                  <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                    <div className="w-32 mr-2 text-right">担当者名:</div>
                    <MultiCheckbox
                      nodesProp="names"
                      optionName={userNames}
                      onChanger={handleUserChange}
                      getOptions={users}
                      role={role}
                      onValidationChange={(newValue) =>
                        setUsernameValidate(newValue)
                      }
                    />
                  </div>
                </div>
              )}
              {newCustomer && isCustomer && (
                <div className="w-full">
                  <div className="pt-4 flex justify-center items-center ml-4 mr-4 ">
                    <span className="w-32 text-right mr-2 ">顧客名:</span>
                    <BasicTextField
                      id={uniqueId}
                      placeholder="顧客名"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      role={role}
                      onValidationChange={(newValue) =>
                        setCustomerNameValidate(newValue)
                      }
                    />
                  </div>

                  <div className="pt-4 flex justify-center items-center ml-4 mr-4">
                    <span className="w-32 text-right mr-2">電話番号:</span>
                    <BasicNumberField
                      id={uniqueId}
                      placeholder="電話番号"
                      value={phone_number}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      role={role}
                      required={false}
                    />
                  </div>

                  <div className="pt-6 flex items-center ml-4 mr-4">
                    <span className="w-32 text-right mr-2">備考:</span>
                    <BasicTextField
                      id={uniqueId}
                      placeholder="備考"
                      value={remarks}
                      onChange={(e) => setRemarks(e.target.value)}
                      role={role}
                      decideLength={150}
                      multiline={true}
                      rows={4}
                      required={false}
                    />
                  </div>

                  <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                    <div className="w-32 mr-2 text-right ">コース:</div>
                    <MultiCheckbox
                      nodesProp="course"
                      optionName={courseNames}
                      onChanger={handleCourseChange}
                      getOptions={courses}
                      role={role}
                      required={false}
                    />
                  </div>
                  <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                    <div className="w-32 mr-2 text-right">オプション:</div>
                    <MultiCheckbox
                      nodesProp="option"
                      optionName={optionNames}
                      onChanger={handleOptionChange}
                      getOptions={options}
                      role={role}
                      required={false}
                    />
                  </div>

                  <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                    <div className="w-32 mr-2 text-right">商品:</div>
                    <MultiCheckbox
                      nodesProp="merchandise"
                      optionName={merchandiseNames}
                      onChanger={handleMerchandiseChange}
                      getOptions={merchandises}
                      role={role}
                      required={false}
                    />
                  </div>
                  <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                    <div className="w-32 mr-2 text-right">髪型:</div>
                    <MultiCheckbox
                      nodesProp="hairstyle"
                      optionName={hairstyleNames}
                      onChanger={handleHairstyleChange}
                      getOptions={hairstyles}
                      role={role}
                      required={false}
                    />
                  </div>
                  <div className="pt-6 flex justify-center items-center ml-4 mr-4">
                    <div className="w-32 mr-2 text-right">担当者:</div>
                    <MultiCheckbox
                      nodesProp="names"
                      optionName={userNames}
                      onChanger={handleUserChange}
                      getOptions={users}
                      role={role}
                      onValidationChange={(newValue) =>
                        setUsernameValidate(newValue)
                      }
                      required={true}
                      error={true}
                    />
                  </div>
                </div>
              )}
              {role === "オーナー" ||
                (role === "マネージャー" && (
                  <div className="flex mt-6 justify-end items-center mr-2">
                    <PrimaryButton
                      value={whoIsEvent === "編集" ? "更新" : "作成"}
                    />
                  </div>
                ))}
            </form>
          </Typography>
          {/* モーダルの内容 */}
        </Box>
      </Modal>
    </div>
  );
};

export default ScheduleModal;
