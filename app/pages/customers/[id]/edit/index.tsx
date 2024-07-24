import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, NextRouter } from "next/router";
import {
  updateCustomer,
  CustomerOnlyState,
} from "../../../../store/customers/customerSlice";
import CustomerForm from "../../../../components/elements/form/customers/CustomerForm";
import {
  course_customersStore,
  customerError,
  customerErrorStatus,
  customerStatus,
  customer_usersStore,
  customersStore,
  hairstyle_customersStore,
  merchandise_customersStore,
  option_customersStore,
} from "../../../../components/Hooks/selector";
import RouterButton from "../../../../components/elements/button/RouterButton";
import BasicAlerts from "../../../../components/elements/alert/BasicAlert";
import { AppDispatch } from "../../../../redux/store";
import { renderError } from "../../../../store/errorHandler";
import { PermissionsState } from "../../../../store/auth/permissionSlice";
import { permissionStore } from "../../../../components/Hooks/authSelector";

const CustomersEdit: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const router: NextRouter = useRouter();
  const permission: PermissionsState = useSelector(permissionStore);

  const cStatus: string = useSelector(customerStatus);
  const cError: string = useSelector(customerError);
  const cErrorStatus: number = useSelector(customerErrorStatus);

  const { id } = router.query; // idを取得

  const getCustomer: CustomerOnlyState = useSelector(customersStore)?.find(
    (customer) => customer.id === Number(id)
  ) || {
    id: 0,
    customer_name: "",
    phone_number: "",
    remarks: "",
  };

  const course_customers: number[] =
    useSelector(course_customersStore)
      ?.filter(
        (course_customer) =>
          course_customer.customer_id === parseInt(id as string)
      )
      ?.map((course_customer) => course_customer.course_id) || [];

  const option_customers: number[] =
    useSelector(option_customersStore)
      ?.filter(
        (option_customer) =>
          option_customer.customer_id === parseInt(id as string)
      )
      ?.map((option_customer) => option_customer.option_id) || [];

  const merchandise_customers: number[] =
    useSelector(merchandise_customersStore)
      ?.filter(
        (merchandise_customer) =>
          merchandise_customer.customer_id === parseInt(id as string)
      )
      ?.map((merchandise_customer) => merchandise_customer.merchandise_id) ||
    [];

  const hairstyle_customers: number[] =
    useSelector(hairstyle_customersStore)
      ?.filter(
        (hairstyle_customer) =>
          hairstyle_customer.customer_id === parseInt(id as string)
      )
      ?.map((hairstyle_customer) => hairstyle_customer.hairstyle_id) || [];

  const customer_users: number[] =
    useSelector(customer_usersStore)
      ?.filter(
        (customer_user) => customer_user.customer_id === parseInt(id as string)
      )
      ?.map((customer_user) => customer_user.user_id) || [];

  const customer = {
    ...getCustomer,
    course_id: course_customers,
    option_id: option_customers,
    merchandise_id: merchandise_customers,
    hairstyle_id: hairstyle_customers,
    user_id: customer_users,
  };

  const handleUpdate = async (formData: {
    id: number;
    customer_name: string;
    phone_number: string;
    remarks: string;
    course_id: number[];
    option_id: number[];
    merchandise_id: number[];
    hairstyle_id: number[];
    user_id: number[];
  }) => {
    try {
      const response = await dispatch(updateCustomer(formData) as any);

      if (response.meta.requestStatus === "fulfilled") {
        router.push("/customers");
      } else {
        const re = renderError(cErrorStatus, router, dispatch);
        if (re === null) throw new Error("customersの作成に失敗しました");
      }
    } catch (error) {}
  };
  return (
    <div className="min-h-full ">
      {cError && (
        <BasicAlerts type="error" message={cError} space={1} padding={1} />
      )}
      {cStatus === "loading" ? (
        <p>Loading...</p>
      ) : permission === null ? (
        <p>あなたに権限はありません。</p>
      ) : (
        <div>
          <div className="my-4 ml-4">
            <RouterButton link={"/customers"} value="顧客画面に戻る" />
          </div>

          <CustomerForm node={customer} onSubmit={handleUpdate} edit={true} />
        </div>
      )}
    </div>
  );
};

export default CustomersEdit;
