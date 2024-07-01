import React, { useEffect, useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import { useSelector } from "react-redux";
import { SelectChangeEvent } from "@mui/material";
import { CustomerState } from "../../../../store/customers/customerSlice";
import {
  coursesStore,
  hairstylesStore,
  merchandiseStore,
  optionsStore,
} from "../../../Hooks/selector";
import { user } from "../../../Hooks/authSelector";

interface CustomerFormProps {
  node?: CustomerState;
  onSubmit: (formData: CustomerState) => void;
  edit?: boolean;
}

const CustomerForm: React.FC<CustomerFormProps> = ({
  node,
  onSubmit,
  edit,
}) => {
  const getCoursesState = useSelector(coursesStore);

  console.log("getCoursesStateだよ");
  console.log(getCoursesState);

  const getCourseNames = getCoursesState.map((course) => course.course_name);

  console.log("getCourseNamesだよ");
  console.log(getCourseNames);

  const getOptionsState = useSelector(optionsStore);

  console.log("getOptionsStateだよ");
  console.log(getOptionsState);

  const getOptionsNames = getOptionsState.map((option) => option.option_name);

  console.log("getOptionsNamesだよ");
  console.log(getOptionsNames);

  const getMerchandisesState = useSelector(merchandiseStore);

  console.log("getMerchandisesStateだよ");
  console.log(getMerchandisesState);

  const getMerchandisesNames = getMerchandisesState.map(
    (merchandise) => merchandise.merchandise_name
  );

  console.log("getMerchandisesNamesだよ");
  console.log(getMerchandisesNames);

  const getHairstylesState = useSelector(hairstylesStore);

  console.log("getHairstylesStateだよ");
  console.log(getHairstylesState);

  const getHairstylesNames = getHairstylesState.map(
    (hairstyle) => hairstyle.hairstyle_name
  );

  console.log("getHairstylesNamesだよ");
  console.log(getHairstylesNames);

  const getUsersState = useSelector(user);

  console.log("getUsersStateだよ");
  console.log(getUsersState);

  const getUsersNames = getUsersState.map((user) => user.name);

  console.log("getUsersNamesだよ");
  console.log(getUsersNames);

  const [customer_name, setCustomer_Name] = useState<string>(
    node ? node.customer_name : ""
  );

  const [phone_number, setPhoneNumber] = useState<string>(
    node ? node.phone_number : ""
  );

  const [remarks, setRemarks] = useState<string>(node ? node.remarks : "");

  const [courses, setCourses] = useState<string[]>(
    node
      ? getCoursesState
          .filter((course) => node.course_id.includes(course.id))
          .map((course) => course.course_name)
      : []
  );
  const [options, setOptions] = useState<string[]>(
    node
      ? getOptionsState
          .filter((option) => node.option_id.includes(option.id))
          .map((option) => option.option_name)
      : []
  );
  const [merchandises, setMerchandises] = useState<string[]>(
    node
      ? getMerchandisesState
          .filter((merchandise) => node.merchandise_id.includes(merchandise.id))
          .map((merchandise) => merchandise.merchandise_name)
      : []
  );
  const [hairstyles, setHairstyles] = useState<string[]>(
    node
      ? getHairstylesState
          .filter((hairstyle) => node.hairstyle_id.includes(hairstyle.id))
          .map((hairstyle) => hairstyle.hairstyle_name)
      : []
  );
  const [users, setUsers] = useState<string[]>(
    node
      ? getUsersState
          .filter((user) => node.user_id.includes(user.id))
          .map((user) => user.name)
      : []
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      id: node ? node.id : 0,
      customer_name: customer_name,
      phone_number: phone_number,
      remarks: remarks,
      course_id: getCoursesState
        .filter((course) => courses.includes(course.course_name))
        .map((course) => course.id),
      option_id: getOptionsState
        .filter((option) => options.includes(option.option_name))
        .map((option) => option.id),
      merchandise_id: getMerchandisesState
        .filter((merchandise) =>
          merchandises.includes(merchandise.merchandise_name)
        )
        .map((merchandise) => merchandise.id),
      hairstyle_id: getHairstylesState
        .filter((hairstyle) => hairstyles.includes(hairstyle.hairstyle_name))
        .map((hairstyle) => hairstyle.id),
      user_id: getUsersState
        .filter((user) => users.includes(user.name))
        .map((user) => user.id),
    });
  };

  const handleCourseChange = (event: SelectChangeEvent<string[]>) => {
    setCourses(event.target.value as string[]);
  };

  const handleOptionChange = (event: SelectChangeEvent<string[]>) => {
    setOptions(event.target.value as string[]);
  };

  const handleMerchandiseChange = (event: SelectChangeEvent<string[]>) => {
    setMerchandises(event.target.value as string[]);
  };

  const handleHairstyleChange = (event: SelectChangeEvent<string[]>) => {
    setHairstyles(event.target.value as string[]);
  };

  const handleUserChange = (event: SelectChangeEvent<string[]>) => {
    setUsers(event.target.value as string[]);
  };

  return (
    <div className="flex items-center justify-center h-full ">
      <div className="max-w-md w-full ">
        <div>
          <h2 className=" text-center text-3xl font-extrabold text-gray-900">
            {edit ? "顧客情報編集" : "顧客情報新規作成"}
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <BasicTextField
            type="text"
            placeholder="顧客名"
            value={customer_name}
            onChange={(e) => setCustomer_Name(e.target.value)}
          />

          <BasicTextField
            type="number"
            placeholder="電話番号"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <BasicTextField
            type="text"
            placeholder="備考"
            value={remarks}
            onChange={(e) => setRemarks(e.target.value)}
          />

          <MultiCheckbox
            getOptions={getCoursesState}
            optionName={courses}
            nodesProp="course"
            onChanger={handleCourseChange}
          />

          <MultiCheckbox
            getOptions={getOptionsState}
            optionName={options}
            nodesProp="option"
            onChanger={handleOptionChange}
          />

          <MultiCheckbox
            getOptions={getMerchandisesState}
            optionName={merchandises}
            nodesProp="merchandise"
            onChanger={handleMerchandiseChange}
          />

          <MultiCheckbox
            getOptions={getHairstylesState}
            optionName={hairstyles}
            nodesProp="hairstyle"
            onChanger={handleHairstyleChange}
          />

          <MultiCheckbox
            getOptions={getUsersState}
            optionName={users}
            nodesProp="names"
            onChanger={handleUserChange}
          />

          <PrimaryButton value={"作成"} />
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
