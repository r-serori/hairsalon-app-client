import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateUser } from "../../store/auth/authSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import UpdateInformationForm from "../../components/elements/form/userProfile/UpdateInformationForm";
import { useEffect } from "react";
import { useState } from "react";

const UpdateUserInformationPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoading = useSelector((state: RootState) => state.auth.loading);
  const message = useSelector((state: RootState) => state.auth.message);
  const error = useSelector((state: RootState) => state.auth.error);

  const handleUpdateUserInformation = async (formData: {
    name: string;
    email: string;
    phone_number: string;
  }) => {
    console.log(formData);
    try {
      await dispatch(updateUser(formData) as any);
      router.push("/attendances");
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      {error && (
        <BasicAlerts type="error" message={error} space={1} padding={0.6} />
      )}

      {message && (
        <BasicAlerts type="success" message={message} space={1} padding={0.6} />
      )}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <UpdateInformationForm
          onSubmitUserInformation={handleUpdateUserInformation}
        />
      )}
    </div>
  );
};

export default UpdateUserInformationPage;
