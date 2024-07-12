import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "../../../store/customers/customerSlice";
import CustomerForm from "../../../components/elements/form/customers/CustomerForm";
import BackAgainButton from "../../../components/elements/button/RouterButton";
import {
  customerStatus,
  customerError,
} from "../../../components/Hooks/selector";
import RouterButton from "../../../components/elements/button/RouterButton";
import BasicAlerts from "../../../components/elements/alert/Alert";

const customersCreate = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cusStatus: string = useSelector(customerStatus);
  const cError: string = useSelector(customerError);

  const handleCreate = async (formData: {
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
      const response = await dispatch(createCustomer(formData) as any);
      if (response.meta.requestStatus === "fulfilled") {
        console.log("Success", response);
        router.push("/customers");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-full">
      {cError && (
        <BasicAlerts type="error" message={cError} space={1} padding={1} />
      )}

      <div className="mt-4 ml-4">
        <RouterButton link={"/customers"} value="顧客画面に戻る" />
      </div>
      {cusStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <CustomerForm onSubmit={handleCreate} />
      )}
    </div>
  );
};

export default customersCreate;
