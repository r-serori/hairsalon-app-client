import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "../../../store/customers/customerSlice";
import CustomerForm from "../../../components/elements/form/customers/CustomerForm";
import BackAgainButton from "../../../components/elements/button/RouterButton";
import { customerStatus } from "../../../components/Hooks/selector";
import RouterButton from "../../../components/elements/button/RouterButton";

const customersCreate = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cusStatus = useSelector(customerStatus);

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
      await dispatch(createCustomer(formData) as any);
    } catch (error) {
      console.error(error);
    } finally {
      router.push("/customers");
    }
  };
  return (
    <div className="min-h-full">
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
