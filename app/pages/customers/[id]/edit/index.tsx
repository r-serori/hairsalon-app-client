import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  updateCustomer,
  getCustomer,
} from "../../../../store/customers/customerSlice";
import { RootState } from "../../../../redux/store";
import CustomerForm from "../../../../components/elements/form/customers/CustomerForm";
import BackAgainButton from "../../../../components/elements/button/RouterButton";
import { ManagerPermission } from "../../../../components/Hooks/ManagerPermission";

const customersEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.customer.status);

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

  const customer_users = useSelector((state: RootState) =>
    state.customer_users.customer_users
      .filter(
        (customer_user) => customer_user.customers_id === parseInt(id as string)
      )
      .map((customer_user) => customer_user.user_id)
  );

  console.log("customer_usersだよ");
  console.log(customer_users);

  const customer = {
    ...getCustomer,
    courses_id: course_customers,
    options_id: option_customers,
    merchandises_id: merchandise_customers,
    hairstyles_id: hairstyle_customers,
    user_id: customer_users,
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
    user_id: number[];
    owner_id: number;
    created_at: string;
    updated_at: string;
  }) => {
    try {
      await dispatch(updateCustomer(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/customers"); // Redirect to the customer list page after updating a customer
  };
  return (
    <div className="min-h-full ">
      <BackAgainButton link={"/customers"} />
      {loading === "loading" ? (
        <p>Loading...</p>
      ) : (
        <CustomerForm node={customer} onSubmit={handleUpdate} edit={true} />
      )}
    </div>
  );
};

export default customersEdit;
