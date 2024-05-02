import React from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  createCustomer,
  getCustomer,
} from "../../../store/customers/customerSlice";
import { RootState } from "../../../redux/store";
import CustomerForm from "../../../components/elements/form/customers/CustomerForm";
import BackAgainButton from "../../../components/elements/button/BackAgainButton";

const customersCreate = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.customer.loading);

  const handleCreate = async (formData: {
    id: number;
    customer_name: string;
    phone_number: string;
    remarks: string;
    new_customer: string;
    courses_id: number[];
    options_id: number[];
    merchandises_id: number[];
    hairstyles_id: number[];
    attendances_id: number[];
  }) => {
    try {
      try {
        await dispatch(createCustomer(formData) as any);
      } catch (error) {
        console.error(error);
      }
      await dispatch(getCustomer() as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/customers"); // Redirect to the customer list page after creating a customer
  };
  return (
    <div className="min-h-full">
      <BackAgainButton link={"/customers"} />
      {loading ? <p>Loading...</p> : <CustomerForm onSubmit={handleCreate} />}
    </div>
  );
};

export default customersCreate;
