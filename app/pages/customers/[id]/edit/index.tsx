import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  updateCustomer,
  getCustomerById,
} from "../../../../store/customers/customerSlice";
import { RootState } from "../../../../redux/store";
import CustomerForm from "../../../../components/elements/form/customers/CustomerForm";
import BackAgainButton from "../../../../components/elements/button/BackAgainButton";

const customersEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.customer.loading);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const getCustomer = useSelector((state: RootState) =>
    state.customer.customers.find(
      (customer) => customer.id === parseInt(id as string)
    )
  );

  console.log("getCustomerだよ");
  console.log(getCustomer);

  const course_customers = useSelector((state: RootState) =>
    state.course_customers.course_customers
      .filter(
        (course_customer) =>
          course_customer.customers_id === parseInt(id as string)
      )
      .map((course_customer) => course_customer.courses_id)
  );

  console.log("course_customersだよ");
  console.log(course_customers);

  const option_customers = useSelector((state: RootState) =>
    state.option_customers.option_customers
      .filter(
        (option_customer) =>
          option_customer.customers_id === parseInt(id as string)
      )
      .map((option_customer) => option_customer.options_id)
  );

  console.log("option_customersだよ");
  console.log(option_customers);

  const merchandise_customers = useSelector((state: RootState) =>
    state.merchandise_customers.merchandise_customers
      .filter(
        (merchandise_customer) =>
          merchandise_customer.customers_id === parseInt(id as string)
      )
      .map((merchandise_customer) => merchandise_customer.merchandises_id)
  );

  console.log("merchandise_customersだよ");
  console.log(merchandise_customers);

  const hairstyle_customers = useSelector((state: RootState) =>
    state.hairstyle_customers.hairstyle_customers
      .filter(
        (hairstyle_customer) =>
          hairstyle_customer.customers_id === parseInt(id as string)
      )
      .map((hairstyle_customer) => hairstyle_customer.hairstyles_id)
  );

  console.log("hairstyle_customersだよ");
  console.log(hairstyle_customers);

  const customer_attendances = useSelector((state: RootState) =>
    state.customer_attendances.customer_attendances
      .filter(
        (customer_attendance) =>
          customer_attendance.customers_id === parseInt(id as string)
      )
      .map((customer_attendance) => customer_attendance.attendances_id)
  );

  console.log("customer_attendancesだよ");
  console.log(customer_attendances);

  const customer = {
    ...getCustomer,
    courses_id: course_customers,
    options_id: option_customers,
    merchandises_id: merchandise_customers,
    hairstyles_id: hairstyle_customers,
    attendances_id: customer_attendances,
  };

  const handleUpdate = async (formData: {
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
        await dispatch(updateCustomer(formData) as any);
      } catch (error) {
        console.error(error);
      }
      await dispatch(getCustomerById as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/customers"); // Redirect to the customer list page after updating a customer
  };
  return (
    <div className="min-h-full ">
      <BackAgainButton link={"/customers"} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <CustomerForm node={customer} onSubmit={handleUpdate} />
      )}
    </div>
  );
};

export default customersEdit;
