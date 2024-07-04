import React, { useState, useEffect } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import PrimaryButton from "../../button/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "../../../../redux/store";
import { updateCourse } from "../../../../store/courses/courseSlice";
import { updateOption } from "../../../../store/options/optionSlice";
import { updateMerchandise } from "../../../../store/merchandises/merchandiseSlice";
import { updateHairstyle } from "../../../../store/hairstyles/hairstyleSlice";
import { updateStockCategory } from "../../../../store/stocks/stock_categories/stock_categorySlice";
import { updateStock } from "../../../../store/stocks/stockSlice";
import { updateCustomer } from "../../../../store/customers/customerSlice";
import { updateDaily_sales } from "../../../../store/sales/daily_sales/daily_saleSlice";
import { updateMonthly_sales } from "../../../../store/sales/monthly_sales/monthly_saleSlice";
import { updateYearly_sales } from "../../../../store/sales/yearly_sales/yearly_saleSlice";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";
import BasicTextField from "../../input/BasicTextField";
import {
  course_customersStore,
  coursesStore,
  customer_usersStore,
  hairstyle_customersStore,
  hairstylesStore,
  merchandiseStore,
  merchandise_customersStore,
  option_customersStore,
  optionsStore,
  stock_categoriesStore,
} from "../../../Hooks/selector";
import { user } from "../../../Hooks/authSelector";

interface ModalFormProps {
  type: any;
  editValue: any;
  editNode: any;
  NodesProp: string;
  link: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalForm: React.FC<ModalFormProps> = ({
  type,
  editValue,
  editNode,
  NodesProp,
  link,
  open,
  setOpen,
}) => {
  const [EditValue, setEditValue] = useState<any>(editValue);
  const [EditNode, setEditNode] = useState<any>(editNode);
  const [checkName, setCheckName] = React.useState<string[]>([]);

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (
      NodesProp === "course" ||
      NodesProp === "option" ||
      NodesProp === "merchandise" ||
      NodesProp === "hairstyle" ||
      NodesProp === "names"
    ) {
      const slicer = () => {
        const splitEditValue = EditValue.split(",\n");
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

  const getCheckBoxCategoriesState = useSelector(stock_categoriesStore);

  console.log("useCheckBoxCategoriesStateだよ");
  console.log(getCheckBoxCategoriesState);

  const getOptionCategories = getCheckBoxCategoriesState.map(
    (category) => category.category
  );

  console.log("getOptionCategoriesだよ");
  console.log(getOptionCategories);

  const getCoursesState = useSelector(coursesStore);
  console.log("getCoursesStateだよ");
  console.log(getCoursesState);

  const getOptionsState = useSelector(optionsStore);

  console.log("getOptionsStateだよ");
  console.log(getOptionsState);

  const getMerchandisesState = useSelector(merchandiseStore);

  console.log("getMerchandisesStateだよ");
  console.log(getMerchandisesState);

  const getHairstylesState = useSelector(hairstylesStore);

  console.log("getHairstylesStateだよ");
  console.log(getHairstylesState);

  const getUsersState = useSelector(user);

  console.log("getUsersStateだよ");
  console.log(getUsersState);

  const getCourse_customers = useSelector(course_customersStore);
  console.log("getCourse_customersだよ");
  console.log(getCourse_customers);

  const getOption_customers = useSelector(option_customersStore);

  console.log("getOption_customersだよ");
  console.log(getOption_customers);

  const getMerchandise_customers = useSelector(merchandise_customersStore);

  console.log("getMerchandise_customersだよ");
  console.log(getMerchandise_customers);

  const getHairstyle_customers = useSelector(hairstyle_customersStore);

  console.log("getHairstyle_customersだよ");
  console.log(getHairstyle_customers);

  const getCustomer_users = useSelector(customer_usersStore);
  console.log("getCustomer_usersだよ");
  console.log(getCustomer_users);

  const changeMan = () => {
    const changeCourses_id = () => {
      const course_id = getCoursesState
        .filter((course) => checkName.includes(course.course_name))
        .map((course) => course.id);
      return course_id;
    };

    console.log("changeCourses_idだよ");
    console.log(changeCourses_id());

    const defaultChangeCourses_id = () => {
      const courses = EditNode.course.split(",\n");
      const course_id = getCoursesState
        .filter((course) => courses.includes(course.course_name))
        .map((course) => course.id);
      return course_id;
    };

    console.log("defaultChangeCourses_idだよ");
    console.log(defaultChangeCourses_id());

    const changeOptions_id = () => {
      const option_id = getOptionsState
        .filter((option) => checkName.includes(option.option_name))
        .map((option) => option.id);
      return option_id;
    };

    console.log("changeOptions_idだよ");
    console.log(changeOptions_id());

    const defaultChangeOptions_id = () => {
      const options = EditNode.option.split(",\n");
      const option_id = getOptionsState
        .filter((option) => options.includes(option.option_name))
        .map((option) => option.id);
      return option_id;
    };

    console.log("defaultChangeOptions_idだよ");
    console.log(defaultChangeOptions_id());

    const changeMerchandises_id = () => {
      const merchandise_id = getMerchandisesState
        .filter((merchandise) =>
          checkName.includes(merchandise.merchandise_name)
        )
        .map((merchandise) => merchandise.id);
      return merchandise_id;
    };

    console.log("changeMerchandises_idだよ");
    console.log(changeMerchandises_id());

    const defaultChangeMerchandises_id = () => {
      const merchandises = EditNode.merchandise.split(",\n");
      const merchandise_id = getMerchandisesState
        .filter((merchandise) =>
          merchandises.includes(merchandise.merchandise_name)
        )
        .map((merchandise) => merchandise.id);
      return merchandise_id;
    };

    console.log("defaultChangeMerchandises_idだよ");
    console.log(defaultChangeMerchandises_id());

    const changeHairstyles_id = () => {
      const hairstyle_id = getHairstylesState
        .filter((hairstyle) => checkName.includes(hairstyle.hairstyle_name))
        .map((hairstyle) => hairstyle.id);
      return hairstyle_id;
    };

    console.log("changeHairstyles_idだよ");
    console.log(changeHairstyles_id());

    const defaultChangeHairstyles_id = () => {
      const hairstyles = EditNode.hairstyle.split(",\n");
      const hairstyle_id = getHairstylesState
        .filter((hairstyle) => hairstyles.includes(hairstyle.hairstyle_name))
        .map((hairstyle) => hairstyle.id);
      return hairstyle_id;
    };

    console.log("defaultChangeHairstyles_idだよ");
    console.log(defaultChangeHairstyles_id());

    const changeUsers_id = () => {
      const user_id = getUsersState
        .filter((user) => checkName.includes(user.name))
        .map((user) => user.id);
      return user_id;
    };

    console.log("changeUsers_idだよ");
    console.log(changeUsers_id());

    const defaultChangeUsers_id = () => {
      const users = EditNode.names.split(",\n");
      const user_id = getUsersState
        .filter((user) => users.includes(user.name))
        .map((user) => user.id);
      return user_id;
    };

    console.log("defaultChangeUsers_idだよ");
    console.log(defaultChangeUsers_id());

    return {
      changeCourses_id,
      defaultChangeCourses_id,
      changeOptions_id,
      defaultChangeOptions_id,
      changeMerchandises_id,
      defaultChangeMerchandises_id,
      changeHairstyles_id,
      defaultChangeHairstyles_id,
      changeUsers_id,
      defaultChangeUsers_id,
    };
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

    const updatedNode = {
      ...EditNode,
      [NodesProp]: EditValue,
    };
    const update = true;
    console.log("updatedNodeだよ");
    console.log(updatedNode);
    console.log(EditNode.id);
    try {
      switch (link) {
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
            const course_id = changeMan().changeCourses_id();
            const option_id = changeMan().defaultChangeOptions_id();
            const merchandise_id = changeMan().defaultChangeMerchandises_id();
            const hairstyle_id = changeMan().defaultChangeHairstyles_id();
            const user_id = changeMan().defaultChangeUsers_id();
            const {
              course,
              option,
              merchandise,
              hairstyle,
              user,
              ...newUpdatedNode
            } = updatedNode;
            const superUpdatedNode = {
              ...newUpdatedNode,
              course_id: course_id,
              option_id: option_id,
              merchandise_id: merchandise_id,
              hairstyle_id: hairstyle_id,
              user_id: user_id,
            };
            console.log("superUpdatedNodeだよ");
            console.log(superUpdatedNode);

            await dispatch(updateCustomer(superUpdatedNode) as any);
            router.push({
              pathname: "/customers",
              query: { update },
            });
          } else if (NodesProp === "option") {
            const course_id = changeMan().defaultChangeCourses_id();
            const option_id = changeMan().changeOptions_id();
            const merchandise_id = changeMan().defaultChangeMerchandises_id();
            const hairstyle_id = changeMan().defaultChangeHairstyles_id();
            const user_id = changeMan().defaultChangeUsers_id();
            const {
              course,
              option,
              merchandise,
              hairstyle,
              user,
              ...newUpdatedNode
            } = updatedNode;
            const superUpdatedNode = {
              ...newUpdatedNode,
              course_id: course_id,
              option_id: option_id,
              merchandise_id: merchandise_id,
              hairstyle_id: hairstyle_id,
              user_id: user_id,
            };
            await dispatch(updateCustomer(superUpdatedNode) as any);
            router.push({
              pathname: "/customers",
              query: { update },
            });
          } else if (NodesProp === "merchandise") {
            const course_id = changeMan().defaultChangeCourses_id();
            const option_id = changeMan().defaultChangeOptions_id();
            const merchandise_id = changeMan().changeMerchandises_id();
            const hairstyle_id = changeMan().defaultChangeHairstyles_id();
            const user_id = changeMan().defaultChangeUsers_id();
            const {
              course,
              option,
              merchandise,
              hairstyle,
              user,
              ...newUpdatedNode
            } = updatedNode;
            const superUpdatedNode = {
              ...newUpdatedNode,
              course_id: course_id,
              option_id: option_id,
              merchandise_id: merchandise_id,
              hairstyle_id: hairstyle_id,
              user_id: user_id,
            };
            await dispatch(updateCustomer(superUpdatedNode) as any);
            router.push({
              pathname: "/customers",
              query: { update },
            });
          } else if (NodesProp === "hairstyle") {
            const course_id = changeMan().defaultChangeCourses_id();
            const option_id = changeMan().defaultChangeOptions_id();
            const merchandise_id = changeMan().defaultChangeMerchandises_id();
            const hairstyle_id = changeMan().changeHairstyles_id();
            const user_id = changeMan().defaultChangeUsers_id();
            const {
              course,
              option,
              merchandise,
              hairstyle,
              user,
              ...newUpdatedNode
            } = updatedNode;
            const superUpdatedNode = {
              ...newUpdatedNode,
              course_id: course_id,
              option_id: option_id,
              merchandise_id: merchandise_id,
              hairstyle_id: hairstyle_id,
              user_id: user_id,
            };
            await dispatch(updateCustomer(superUpdatedNode) as any);
            router.push({
              pathname: "/customers",
              query: { update },
            });
          } else if (NodesProp === "names") {
            const course_id = changeMan().defaultChangeCourses_id();
            const option_id = changeMan().defaultChangeOptions_id();
            const merchandise_id = changeMan().defaultChangeMerchandises_id();
            const hairstyle_id = changeMan().defaultChangeHairstyles_id();
            const user_id = changeMan().changeUsers_id();
            const {
              course,
              option,
              merchandise,
              hairstyle,
              user,
              ...newUpdatedNode
            } = updatedNode;
            const superUpdatedNode = {
              ...newUpdatedNode,
              course_id: course_id,
              option_id: option_id,
              merchandise_id: merchandise_id,
              hairstyle_id: hairstyle_id,
              user_id: user_id,
            };
            await dispatch(updateCustomer(superUpdatedNode) as any);
            router.push({
              pathname: "/customers",
              query: { update },
            });
          } else {
            const course_id = changeMan().defaultChangeCourses_id();
            const option_id = changeMan().defaultChangeOptions_id();
            const merchandise_id = changeMan().defaultChangeMerchandises_id();
            const hairstyle_id = changeMan().defaultChangeHairstyles_id();
            const user_id = changeMan().defaultChangeUsers_id();
            const {
              course,
              option,
              merchandise,
              hairstyle,
              user,
              ...newUpdatedNode
            } = updatedNode;
            const superUpdatedNode = {
              ...newUpdatedNode,
              course_id: course_id,
              option_id: option_id,
              merchandise_id: merchandise_id,
              hairstyle_id: hairstyle_id,
              user_id: user_id,
            };
            await dispatch(updateCustomer(superUpdatedNode) as any);
            router.push({
              pathname: "/customers",
              query: { update },
            });
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
      // setOpen(false);
    }
  };

  const singleCheckBoxLabelCreate = () => {
    switch (NodesProp) {
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
  console.log(NodesProp); //user_name
  console.log("EditNodeだよ");
  console.log(EditNode); // address: "東京都渋谷区";
  // user_name: "田中店長";
  // id: 1;
  // phone_number: "09012345678";
  // position: "オーナー";
  console.log("EditValueだよ");
  console.log(EditValue); //田中店長
  console.log("EditNodeIdだよ");
  console.log(EditNode.id); //1
  console.log(type); ///text
  console.log(link); //"/users"
  console.log("checkNameだよ");
  console.log(checkName);

  const handleCheckChange = (event: SelectChangeEvent<typeof checkName>) => {
    const {
      target: { value },
    } = event;
    setCheckName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",\n") : value
    );
    setEditNode({ ...EditNode, [NodesProp]: (value as string[]).join(",\n") });
  };

  const renderComponent = () => {
    switch (NodesProp) {
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
      case "names":
        return (
          <MultiCheckbox
            getOptions={getUsersState}
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
            nodeProp={NodesProp}
          />
        );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="border-gray-300 py-4 flex">
        <input id="updateValueId" type="hidden" value={EditNode.id} />

        {renderComponent()}

        <PrimaryButton value="更新" />
      </div>
    </form>
  );
};

export default ModalForm;
