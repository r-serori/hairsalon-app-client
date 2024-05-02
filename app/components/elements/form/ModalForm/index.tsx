import React, { useState, useEffect } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import PrimaryButton from "../../button/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../../../redux/store";
import {
  getAttendance,
  updateAttendanceInfo,
  updateAttendance,
} from "../../../../store/attendances/attendanceSlice";
import {
  getCourse,
  updateCourseInfo,
  updateCourse,
} from "../../../../store/courses/courseSlice";
import {
  getOption,
  updateOptionInfo,
  updateOption,
} from "../../../../store/options/optionSlice";
import {
  getMerchandise,
  updateMerchandiseInfo,
  updateMerchandise,
} from "../../../../store/merchandises/merchandiseSlice";
import {
  getHairstyle,
  updateHairstyleInfo,
  updateHairstyle,
} from "../../../../store/hairstyles/hairstyleSlice";
import {
  getStockCategory,
  updateStockCategoryInfo,
  updateStockCategory,
} from "../../../../store/stocks/stock_categories/stock_categorySlice";
import {
  updateStockInfo,
  updateStock,
} from "../../../../store/stocks/stockSlice";
import {
  updateCustomerInfo,
  updateCustomer,
  getCustomer,
} from "../../../../store/customers/customerSlice";
import {
  updateDailySalesInfo,
  updateDaily_sales,
} from "../../../../store/sales/daily_sales/daily_saleSlice";
import {
  updateMonthlySalesInfo,
  updateMonthly_sales,
} from "../../../../store/sales/monthly_sales/monthly_saleSlice";
import {
  updateYearlySalesInfo,
  updateYearly_sales,
} from "../../../../store/sales/yearly_sales/yearly_saleSlice";
import {
  updateCourse_customersInfo,
  deleteCourse_customersInfo,
  Course_customersState,
} from "../../../../store/middleTable/customers/course_customersSlice";
import {
  updateOption_customersInfo,
  deleteOption_customersInfo,
  Option_customersState,
} from "../../../../store/middleTable/customers/option_customersSlice";
import {
  updateMerchandise_customersInfo,
  deleteMerchandise_customersInfo,
  Merchandise_customersState,
} from "../../../../store/middleTable/customers/merchandise_customersSlice";
import {
  updateHairstyle_customersInfo,
  deleteHairstyle_customersInfo,
  Hairstyle_customersState,
} from "../../../../store/middleTable/customers/hairstyle_customersSlice";
import {
  updateCustomer_attendancesInfo,
  deleteCustomer_attendancesInfo,
  Customer_attendancesState,
} from "../../../../store/middleTable/customers/customer_attendancesSlice";

import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";
import BasicTextField from "../../input/BasicTextField";
import Link from "next/link";
import courses from "../../../../pages/courses";

interface ModalFormProps {
  type: any;
  editValue: any;
  editNode: any;
  NodesProp: any;
  link: any;
  open: boolean;
  setOpen: any;
  isLoading: boolean;
}

const ModalForm: React.FC<ModalFormProps> = ({
  type,
  editValue,
  editNode,
  NodesProp,
  link,
  open,
  setOpen,
  isLoading,
}) => {
  const [EditValue, setEditValue] = useState(editValue);
  const [EditNode, setEditNode] = useState(editNode);
  const [checkName, setCheckName] = React.useState<string[]>([]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (
      NodesProp === "course" ||
      NodesProp === "option" ||
      NodesProp === "merchandise" ||
      NodesProp === "hairstyle" ||
      NodesProp === "attendance"
    ) {
      const slicer = () => {
        const splitEditValue = EditValue.split(", ");

        setCheckName(splitEditValue);
        console.log("splitEditValueだよ");
        console.log(splitEditValue);
        return splitEditValue;
      };
      slicer();
    } else {
      return;
    }
  }, [NodesProp, EditValue]);

  const getCheckBoxCategoriesState = useSelector(
    (state: RootState) => state.stock_category.stock_category
  );

  console.log("useCheckBoxCategoriesStateだよ");
  console.log(getCheckBoxCategoriesState);

  const getOptionCategories = getCheckBoxCategoriesState.map(
    (category) => category.category
  );

  console.log("getOptionCategoriesだよ");
  console.log(getOptionCategories);

  const getCoursesState = useSelector(
    (state: RootState) => state.course.course
  );

  console.log("getCoursesStateだよ");
  console.log(getCoursesState);

  const getOptionsState = useSelector(
    (state: RootState) => state.option.option
  );

  console.log("getOptionsStateだよ");
  console.log(getOptionsState);

  const getMerchandisesState = useSelector(
    (state: RootState) => state.merchandise.merchandise
  );

  console.log("getMerchandisesStateだよ");
  console.log(getMerchandisesState);

  const getHairstylesState = useSelector(
    (state: RootState) => state.hairstyle.hairstyle
  );

  console.log("getHairstylesStateだよ");
  console.log(getHairstylesState);

  const getAttendancesState = useSelector(
    (state: RootState) => state.attendance.attendances
  );

  console.log("getAttendancesStateだよ");
  console.log(getAttendancesState);

  const getCourse_customers = useSelector(
    (state: RootState) => state.course_customers.course_customers
  );

  console.log("getCourse_customersだよ");
  console.log(getCourse_customers);

  const getOption_customers = useSelector(
    (state: RootState) => state.option_customers.option_customers
  );

  console.log("getOption_customersだよ");
  console.log(getOption_customers);

  const getMerchandise_customers = useSelector(
    (state: RootState) => state.merchandise_customers.merchandise_customers
  );

  console.log("getMerchandise_customersだよ");
  console.log(getMerchandise_customers);

  const getHairstyle_customers = useSelector(
    (state: RootState) => state.hairstyle_customers.hairstyle_customers
  );

  console.log("getHairstyle_customersだよ");
  console.log(getHairstyle_customers);

  const getCustomer_attendances = useSelector(
    (state: RootState) => state.customer_attendances.customer_attendances
  );

  console.log("getCustomer_attendancesだよ");
  console.log(getCustomer_attendances);

  const changeMan = () => {
    const changeCourses_id = () => {
      const courses_id = getCoursesState
        .filter((course) => checkName.includes(course.course_name))
        .map((course) => course.id);
      return courses_id;
    };

    console.log("changeCourses_idだよ");
    console.log(changeCourses_id());

    const defaultChangeCourses_id = () => {
      const courses = EditNode.course.split(", ");
      const courses_id = getCoursesState
        .filter((course) => courses.includes(course.course_name))
        .map((course) => course.id);
      return courses_id;
    };

    console.log("defaultChangeCourses_idだよ");
    console.log(defaultChangeCourses_id());

    const changeOptions_id = () => {
      const options_id = getOptionsState
        .filter((option) => checkName.includes(option.option_name))
        .map((option) => option.id);
      return options_id;
    };

    console.log("changeOptions_idだよ");
    console.log(changeOptions_id());

    const defaultChangeOptions_id = () => {
      const options = EditNode.option.split(", ");
      const options_id = getOptionsState
        .filter((option) => options.includes(option.option_name))
        .map((option) => option.id);
      return options_id;
    };

    console.log("defaultChangeOptions_idだよ");
    console.log(defaultChangeOptions_id());

    const changeMerchandises_id = () => {
      const merchandises_id = getMerchandisesState
        .filter((merchandise) =>
          checkName.includes(merchandise.merchandise_name)
        )
        .map((merchandise) => merchandise.id);
      return merchandises_id;
    };

    console.log("changeMerchandises_idだよ");
    console.log(changeMerchandises_id());

    const defaultChangeMerchandises_id = () => {
      const merchandises = EditNode.merchandise.split(", ");
      const merchandises_id = getMerchandisesState
        .filter((merchandise) =>
          merchandises.includes(merchandise.merchandise_name)
        )
        .map((merchandise) => merchandise.id);
      return merchandises_id;
    };

    console.log("defaultChangeMerchandises_idだよ");
    console.log(defaultChangeMerchandises_id());

    const changeHairstyles_id = () => {
      const hairstyles_id = getHairstylesState
        .filter((hairstyle) => checkName.includes(hairstyle.hairstyle_name))
        .map((hairstyle) => hairstyle.id);
      return hairstyles_id;
    };

    console.log("changeHairstyles_idだよ");
    console.log(changeHairstyles_id());

    const defaultChangeHairstyles_id = () => {
      const hairstyles = EditNode.hairstyle.split(", ");
      const hairstyles_id = getHairstylesState
        .filter((hairstyle) => hairstyles.includes(hairstyle.hairstyle_name))
        .map((hairstyle) => hairstyle.id);
      return hairstyles_id;
    };

    console.log("defaultChangeHairstyles_idだよ");
    console.log(defaultChangeHairstyles_id());

    const changeAttendances_id = () => {
      const attendances_id = getAttendancesState
        .filter((attendance) => checkName.includes(attendance.attendance_name))
        .map((attendance) => attendance.id);
      return attendances_id;
    };

    console.log("changeAttendances_idだよ");
    console.log(changeAttendances_id());

    const defaultChangeAttendances_id = () => {
      const attendances = EditNode.attendance.split(", ");
      const attendances_id = getAttendancesState
        .filter((attendance) =>
          attendances.includes(attendance.attendance_name)
        )
        .map((attendance) => attendance.id);
      return attendances_id;
    };

    console.log("defaultChangeAttendances_idだよ");
    console.log(defaultChangeAttendances_id());

    return {
      changeCourses_id,
      defaultChangeCourses_id,
      changeOptions_id,
      defaultChangeOptions_id,
      changeMerchandises_id,
      defaultChangeMerchandises_id,
      changeHairstyles_id,
      defaultChangeHairstyles_id,
      changeAttendances_id,
      defaultChangeAttendances_id,
    };
  };

  const updateBoy = async () => {
    // matchMan();
    const updatedNode = { ...EditNode }; // 元のeditNodeをコピーして新しいオブジェクトを作成
    updatedNode[NodesProp] = EditValue; // NodesProp番目に新しい値を追加
    console.log("updatedNodeだよ");
    console.log(updatedNode);
    try {
      switch (link) {
        case "/attendances":
          await dispatch(updateAttendanceInfo(updatedNode) as any); // 更新されたeditNodeをstoreに保存
          break;
        case "/courses":
          await dispatch(updateCourseInfo(updatedNode) as any);
          break;
        case "/options":
          await dispatch(updateOptionInfo(updatedNode) as any);
          break;
        case "/merchandises":
          await dispatch(updateMerchandiseInfo(updatedNode) as any);
          break;
        case "/hairstyles":
          await dispatch(updateHairstyleInfo(updatedNode) as any);
          break;
        case "/stock_categories":
          await dispatch(updateStockCategoryInfo(updatedNode) as any);
          break;
        case "/stocks":
          if (NodesProp === "category_name") {
            const { category_name, ...newUpdatedNode } = updatedNode;
            const superUpdatedNode = {
              ...newUpdatedNode,
              stock_category_id: changeCategoryId(),
            };
            await dispatch(updateStockInfo(superUpdatedNode) as any);
          } else {
            const objInCategoryID = getCheckBoxCategoriesState.find(
              (category) => category.category === EditNode.category_name
            ).id;
            const { category, ...newUpdatedNode } = updatedNode;
            const superUpdatedNode = {
              ...newUpdatedNode,
              stock_category_id: objInCategoryID,
            };
            await dispatch(updateStockInfo(superUpdatedNode) as any);
          }
          break;
        case "/customers":
          changeMan();
          if (NodesProp === "course") {
            dispatch(deleteCourse_customersInfo(EditNode.id));
            const courses_id = changeMan().changeCourses_id();
            const newCourseInfo: Course_customersState[] = await Promise.all(
              courses_id.map(async (course_id) => {
                return {
                  courses_id: course_id,
                  customers_id: Number(EditNode.id),
                };
              })
            );
            console.log("newCourseInfoだよ");
            console.log(newCourseInfo);

            await dispatch(updateCourse_customersInfo(newCourseInfo));
            await dispatch(updateCustomerInfo(updatedNode) as any);
          } else if (NodesProp === "option") {
            dispatch(deleteOption_customersInfo(EditNode.id));
            const options_id = changeMan().changeOptions_id();
            const newOptionInfo: Option_customersState[] = await Promise.all(
              options_id.map(async (option_id) => {
                return {
                  options_id: option_id,
                  customers_id: Number(EditNode.id),
                };
              })
            );
            await dispatch(updateOption_customersInfo(newOptionInfo));
          } else if (NodesProp === "merchandise") {
            dispatch(deleteMerchandise_customersInfo(EditNode.id));
            const merchandises_id = changeMan().changeMerchandises_id();
            const newMerchandiseInfo: Merchandise_customersState[] =
              await Promise.all(
                merchandises_id.map(async (merchandise_id) => {
                  return {
                    merchandises_id: merchandise_id,
                    customers_id: Number(EditNode.id),
                  };
                })
              );

            await dispatch(updateMerchandise_customersInfo(newMerchandiseInfo));
          } else if (NodesProp === "hairstyle") {
            dispatch(deleteHairstyle_customersInfo(EditNode.id));
            const hairstyles_id = changeMan().changeHairstyles_id();
            const newHairstyleInfo: Hairstyle_customersState[] =
              await Promise.all(
                hairstyles_id.map(async (hairstyle_id) => {
                  return {
                    hairstyles_id: hairstyle_id,
                    customers_id: Number(EditNode.id),
                  };
                })
              );

            await dispatch(updateHairstyle_customersInfo(newHairstyleInfo));
          } else if (NodesProp === "attendance") {
            dispatch(deleteCustomer_attendancesInfo(EditNode.id));
            const attendances_id = changeMan().changeAttendances_id();
            const newAttendanceInfo: Customer_attendancesState[] =
              await Promise.all(
                attendances_id.map(async (attendance_id) => {
                  return {
                    attendances_id: attendance_id,
                    customers_id: Number(EditNode.id),
                  };
                })
              );

            await dispatch(
              updateCustomer_attendancesInfo(newAttendanceInfo) as any
            );
          } else {
            await dispatch(updateCustomerInfo(updatedNode) as any);
          }
          break;
        case "/daily_sales":
          await dispatch(updateDailySalesInfo(updatedNode) as any);
          break;
        case "/monthly_sales":
          await dispatch(updateMonthlySalesInfo(updatedNode) as any);
          break;
        case "/yearly_sales":
          await dispatch(updateYearlySalesInfo(updatedNode) as any);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(error);
    }
    console.log("新規updatedNodeだよ");
    console.log(updatedNode);
    return updatedNode;
  };

  const handleChange = (e) => {
    try {
      const newValue = e.target.value;
      setEditValue(newValue);
    } catch (error) {
      console.error(error);
    } finally {
      // updateStateCreate();
    }
  };

  const changeCategoryId = () => {
    const categoryId = getCheckBoxCategoriesState.find(
      (category) => category.category === EditValue
    ).id;
    return categoryId;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedNode = await updateBoy();
    console.log("updatedNodeだよ");
    console.log(updatedNode);
    console.log(EditNode.id);
    try {
      switch (link) {
        case "/attendances":
          await dispatch(updateAttendance(updatedNode) as any);
          break;
        case "/courses":
          await dispatch(updateCourse(updatedNode) as any);
          break;
        case "/options":
          await dispatch(updateOption(updatedNode) as any);
          break;
        case "/merchandises":
          await dispatch(updateMerchandise(updatedNode) as any);
          break;
        case "/hairstyles":
          await dispatch(updateHairstyle(updatedNode) as any);
          break;
        case "/stock_categories":
          await dispatch(updateStockCategory(updatedNode) as any);
          break;
        case "/stocks":
          if (NodesProp === "category_name") {
            const { category_name, ...newUpdatedNode } = updatedNode;
            const superUpdatedNode = {
              ...newUpdatedNode,
              stock_category_id: changeCategoryId(),
            };
            await dispatch(updateStock(superUpdatedNode) as any);
          } else {
            const objInCategoryID = getCheckBoxCategoriesState.find(
              (category) => category.category === EditNode.category_name
            ).id;
            const { category_name, ...newUpdatedNode } = updatedNode;
            const superUpdatedNode = {
              ...newUpdatedNode,
              stock_category_id: objInCategoryID,
            };
            await dispatch(updateStock(superUpdatedNode) as any);
          }
          break;
        case "/customers":
          changeMan();
          if (NodesProp === "course") {
            const courses_id = changeMan().changeCourses_id();
            const options_id = changeMan().defaultChangeOptions_id();
            const merchandises_id = changeMan().defaultChangeMerchandises_id();
            const hairstyles_id = changeMan().defaultChangeHairstyles_id();
            const attendances_id = changeMan().defaultChangeAttendances_id();
            const {
              course,
              option,
              merchandise,
              hairstyle,
              attendance,
              ...newUpdatedNode
            } = updatedNode;
            const superUpdatedNode = {
              ...newUpdatedNode,
              courses_id: courses_id,
              options_id: options_id,
              merchandises_id: merchandises_id,
              hairstyles_id: hairstyles_id,
              attendances_id: attendances_id,
            };
            console.log("superUpdatedNodeだよ");
            console.log(superUpdatedNode);

            await dispatch(updateCustomer(superUpdatedNode) as any);
          } else if (NodesProp === "option") {
            const courses_id = changeMan().defaultChangeCourses_id;
            const options_id = changeMan().changeOptions_id();
            const merchandises_id = changeMan().defaultChangeMerchandises_id();
            const hairstyles_id = changeMan().defaultChangeHairstyles_id();
            const attendances_id = changeMan().defaultChangeAttendances_id();
            const {
              course,
              option,
              merchandise,
              hairstyle,
              attendance,
              ...newUpdatedNode
            } = updatedNode;
            const superUpdatedNode = {
              ...newUpdatedNode,
              courses_id: courses_id,
              options_id: options_id,
              merchandises_id: merchandises_id,
              hairstyles_id: hairstyles_id,
              attendances_id: attendances_id,
            };
            await dispatch(updateCustomer(superUpdatedNode) as any);
          } else if (NodesProp === "merchandise") {
            const courses_id = changeMan().defaultChangeCourses_id();
            const options_id = changeMan().defaultChangeOptions_id();
            const merchandises_id = changeMan().changeMerchandises_id();
            const hairstyles_id = changeMan().defaultChangeHairstyles_id();
            const attendances_id = changeMan().defaultChangeAttendances_id();
            const {
              course,
              option,
              merchandise,
              hairstyle,
              attendance,
              ...newUpdatedNode
            } = updatedNode;
            const superUpdatedNode = {
              ...newUpdatedNode,
              courses_id: courses_id,
              options_id: options_id,
              merchandises_id: merchandises_id,
              hairstyles_id: hairstyles_id,
              attendances_id: attendances_id,
            };
            await dispatch(updateCustomer(superUpdatedNode) as any);
          } else if (NodesProp === "hairstyle") {
            const courses_id = changeMan().defaultChangeCourses_id();
            const options_id = changeMan().defaultChangeOptions_id();
            const merchandises_id = changeMan().defaultChangeMerchandises_id();
            const hairstyles_id = changeMan().changeHairstyles_id();
            const attendances_id = changeMan().defaultChangeAttendances_id();
            const {
              course,
              option,
              merchandise,
              hairstyle,
              attendance,
              ...newUpdatedNode
            } = updatedNode;
            const superUpdatedNode = {
              ...newUpdatedNode,
              courses_id: courses_id,
              options_id: options_id,
              merchandises_id: merchandises_id,
              hairstyles_id: hairstyles_id,
              attendances_id: attendances_id,
            };
            await dispatch(updateCustomer(superUpdatedNode) as any);
          } else if (NodesProp === "attendance") {
            const courses_id = changeMan().defaultChangeCourses_id();
            const options_id = changeMan().defaultChangeOptions_id();
            const merchandises_id = changeMan().defaultChangeMerchandises_id();
            const hairstyles_id = changeMan().defaultChangeHairstyles_id();
            const attendances_id = changeMan().changeAttendances_id();
            const {
              course,
              option,
              merchandise,
              hairstyle,
              attendance,
              ...newUpdatedNode
            } = updatedNode;
            const superUpdatedNode = {
              ...newUpdatedNode,
              courses_id: courses_id,
              options_id: options_id,
              merchandises_id: merchandises_id,
              hairstyles_id: hairstyles_id,
              attendances_id: attendances_id,
            };
            await dispatch(updateCustomer(superUpdatedNode) as any);
          } else {
            const courses_id = changeMan().defaultChangeCourses_id();
            const options_id = changeMan().defaultChangeOptions_id();
            const merchandises_id = changeMan().defaultChangeMerchandises_id();
            const hairstyles_id = changeMan().defaultChangeHairstyles_id();
            const attendances_id = changeMan().defaultChangeAttendances_id();
            const {
              course,
              option,
              merchandise,
              hairstyle,
              attendance,
              ...newUpdatedNode
            } = updatedNode;
            const superUpdatedNode = {
              ...newUpdatedNode,
              courses_id: courses_id,
              options_id: options_id,
              merchandises_id: merchandises_id,
              hairstyles_id: hairstyles_id,
              attendances_id: attendances_id,
            };
            await dispatch(updateCustomer(superUpdatedNode) as any);
          }
          break;
        case "/daily_sales":
          await dispatch(updateDaily_sales(updatedNode) as any);
          break;
        case "/monthly_sales":
          await dispatch(updateMonthly_sales(updatedNode) as any);
          break;
        case "/yearly_sales":
          await dispatch(updateYearly_sales(updatedNode) as any);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  const singleCheckBoxLabelCreate = () => {
    switch (NodesProp) {
      case "position":
        return "役職";
      case "category_name":
        return "在庫カテゴリー";
      case "course":
        return "コース";
      default:
        return "";
    }
  };

  const singleCheckBoxLabel = singleCheckBoxLabelCreate();

  console.log("singleCheckBoxLabelだよ");
  console.log(singleCheckBoxLabel); //役職

  console.log("NodesPropだよ");
  console.log(NodesProp); //attendance_name
  console.log("EditNodeだよ");
  console.log(EditNode); // address: "東京都渋谷区";
  // attendance_name: "田中店長";
  // created_at: "2024-04-13T03:51:09.000000Z";
  // id: 1;
  // phone_number: "09012345678";
  // position: "オーナー";
  // updated_at: null;
  console.log("EditValueだよ");
  console.log(EditValue); //田中店長
  console.log("EditNodeIdだよ");
  console.log(EditNode.id); //1
  console.log(type); ///text
  console.log(link); //"/attendances"
  console.log("checkNameだよ");
  console.log(checkName);

  // const matchMan = () => {
  //   if (NodesProp === "course") {
  //     const defaultCourses_id = defaultChangeCourses_id();
  //     const afterChangeCourses_id = changeCourses_id();
  //     const matchCourseCustomer = getCourse_customers.map(
  //       (course_customer) => {
  //         afterChangeCourses_id.find(newItem => new)

  //         course_customer.customers_id === EditNode.id
  //     );

  //     const matchCourses = matchCourseCustomer.filter((course_customer) =>
  //       defaultCourses_id.includes(course_customer.courses_id)
  //     );

  //     console.log("matchCoursesだよ");
  //     console.log(matchCourses);
  //   }
  // };

  const handleCheckChange = (event: SelectChangeEvent<typeof checkName>) => {
    const {
      target: { value },
    } = event;
    setCheckName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setEditNode({ ...EditNode, [NodesProp]: (value as string[]).join(", ") });
  };

  const renderComponent = () => {
    switch (NodesProp) {
      case "position":
        return (
          <SingleCheckBox
            label={singleCheckBoxLabel}
            value={EditValue}
            nodeId={EditNode.id.toString()}
            getOptions={["オーナー", "マネージャー", "社員"]}
            onChange={(newValue) => setEditValue(newValue)}
          />
        );
      case "category_name":
        return (
          <SingleCheckBox
            label={singleCheckBoxLabel}
            value={EditValue}
            nodeId={EditNode.id.toString()}
            getOptions={getOptionCategories}
            onChange={(newValue) => setEditValue(newValue)}
          />
        );
      case "new_customer":
        return (
          <SingleCheckBox
            label="新規or既存"
            value={EditValue}
            nodeId={EditNode.id.toString()}
            getOptions={["新規", "既存"]}
            onChange={(newValue) => setEditValue(newValue)}
          />
        );
      case "course":
        return (
          <MultiCheckbox
            getOptions={getCoursesState}
            optionName={checkName}
            onChanger={handleCheckChange}
            nodesProp={NodesProp}
          />
        );
      case "option":
        return (
          <MultiCheckbox
            getOptions={getOptionsState}
            optionName={checkName}
            onChanger={handleCheckChange}
            nodesProp={NodesProp}
          />
        );
      case "merchandise":
        return (
          <MultiCheckbox
            getOptions={getMerchandisesState}
            optionName={checkName}
            onChanger={handleCheckChange}
            nodesProp={NodesProp}
          />
        );
      case "hairstyle":
        return (
          <MultiCheckbox
            getOptions={getHairstylesState}
            optionName={checkName}
            onChanger={handleCheckChange}
            nodesProp={NodesProp}
          />
        );
      case "attendance":
        return (
          <MultiCheckbox
            getOptions={getAttendancesState}
            optionName={checkName}
            onChanger={handleCheckChange}
            nodesProp={NodesProp}
          />
        );
      default:
        return (
          <BasicTextField
            type={type} // typeに応じた入力タイプを設定
            placeholder={EditValue}
            value={EditValue}
            onChange={handleChange}
          />
        );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div className="mt-8 border-t  border-gray-300 py-4 flex">
          <input id="updateValueId" type="hidden" value={EditNode.id} />

          {renderComponent()}

          <PrimaryButton value="更新" />
        </div>
      )}
    </form>
  );
};

export default ModalForm;
