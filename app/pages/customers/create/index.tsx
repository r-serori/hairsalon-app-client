import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  createCustomer,
  getCustomer,
} from "../../../store/customers/customerSlice";
import { RootState } from "../../../redux/store";
import CustomerForm from "../../../components/elements/form/customers/CustomerForm";
import BackAgainButton from "../../../components/elements/button/RouterButton";

const customersCreate = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.customer.loading);

  const handleCreate = async (formData: {
    id: number;
    customer_name: string;
    phone_number: string;
    remarks: string;
    courses_id: number[];
    options_id: number[];
    merchandises_id: number[];
    hairstyles_id: number[];
    attendances_id: number[];
    created_at: string;
    updated_at: string;
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
        <BackAgainButton link={"/customers"} value="顧客管理画面に戻る" />
      </div>
      {loading ? <p>Loading...</p> : <CustomerForm onSubmit={handleCreate} />}
    </div>
  );
};

export default customersCreate;
