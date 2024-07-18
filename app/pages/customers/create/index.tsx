import React from "react";
import { useRouter, NextRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { createCustomer } from "../../../store/customers/customerSlice";
import CustomerForm from "../../../components/elements/form/customers/CustomerForm";
import {
  customerStatus,
  customerError,
  customerErrorStatus,
} from "../../../components/Hooks/selector";
import RouterButton from "../../../components/elements/button/RouterButton";
import BasicAlerts from "../../../components/elements/alert/BasicAlert";
import { AppDispatch } from "../../../redux/store";
import { renderError } from "../../../store/errorHandler";
import { PermissionsState } from "../../../store/auth/permissionSlice";
import { permissionStore } from "../../../components/Hooks/authSelector";

const customersCreate = () => {
  const dispatch: AppDispatch = useDispatch();
  const router: NextRouter = useRouter();
  const permission: PermissionsState = useSelector(permissionStore);

  const cusStatus: string = useSelector(customerStatus);
  const cError: string | null = useSelector(customerError);
  const cErrorStatus: number = useSelector(customerErrorStatus);

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
        const re = renderError(cErrorStatus, router, dispatch);
        if (re === null) throw new Error("customersの作成に失敗しました");
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
      {cusStatus === "loading" ? (
        <p>Loading...</p>
      ) : permission === null ? (
        <p>あなたに権限はありません。</p>
      ) : (
        <div>
          <div className="mt-4 ml-4">
            <RouterButton link={"/customers"} value="顧客画面に戻る" />
          </div>

          <CustomerForm onSubmit={handleCreate} />
        </div>
      )}
    </div>
  );
};

export default customersCreate;
