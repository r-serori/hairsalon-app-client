import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  updateCustomer,
  getCustomer,
  CustomerState,
} from "../../../../store/customers/customerSlice";
import { RootState } from "../../../../redux/store";
import CustomerForm from "../../../../components/elements/form/customers/CustomerForm";
import BackAgainButton from "../../../../components/elements/button/RouterButton";
import {
  course_customersStore,
  customerStatus,
  customer_usersStore,
  customersStore,
  hairstyle_customersStore,
  merchandise_customersStore,
  option_customersStore,
} from "../../../../components/Hooks/selector";
import { userKey } from "../../../../components/Hooks/authSelector";

const customersEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cStatus = useSelector(customerStatus);

  const key: string | null = useSelector(userKey);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const getCustomer: CustomerState = useSelector(customersStore).find(
    (customer) => customer.id === Number(id)
  );

  console.log("getCustomerだよ");
  console.log(getCustomer);

  const course_customers: number[] = useSelector(course_customersStore)
    .filter(
      (course_customer) =>
        course_customer.customer_id === parseInt(id as string)
    )
    .map((course_customer) => course_customer.course_id);

  console.log("course_customersだよ");
  console.log(course_customers);

  const option_customers: number[] = useSelector(option_customersStore)
    .filter(
      (option_customer) =>
        option_customer.customer_id === parseInt(id as string)
    )
    .map((option_customer) => option_customer.option_id);

  console.log("option_customersだよ");
  console.log(option_customers);

  const merchandise_customers: number[] = useSelector(
    merchandise_customersStore
  )
    .filter(
      (merchandise_customer) =>
        merchandise_customer.customer_id === parseInt(id as string)
    )
    .map((merchandise_customer) => merchandise_customer.merchandise_id);

  console.log("merchandise_customersだよ");
  console.log(merchandise_customers);

  const hairstyle_customers: number[] = useSelector(hairstyle_customersStore)
    .filter(
      (hairstyle_customer) =>
        hairstyle_customer.customer_id === parseInt(id as string)
    )
    .map((hairstyle_customer) => hairstyle_customer.hairstyle_id);

  console.log("hairstyle_customersだよ");
  console.log(hairstyle_customers);

  const customer_users: number[] = useSelector(customer_usersStore)
    .filter(
      (customer_user) => customer_user.customer_id === parseInt(id as string)
    )
    .map((customer_user) => customer_user.user_id);

  console.log("customer_usersだよ");
  console.log(customer_users);

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
    new_customer: string;
    course_id: number[];
    option_id: number[];
    merchandise_id: number[];
    hairstyle_id: number[];
    user_id: number[];
  }) => {
    try {
      await dispatch(updateCustomer(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/customers");
  };
  return (
    <div className="min-h-full ">
      <BackAgainButton link={"/customers"} />
      {cStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <CustomerForm node={customer} onSubmit={handleUpdate} edit={true} />
      )}
    </div>
  );
};

export default customersEdit;
