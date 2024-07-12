import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import AuthStaffRegisterForm from "../../components/elements/form/auth/AuthStaffRegisterForm";
import { staffRegister } from "../../store/auth/userSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { useState } from "react";
import { userError, userStatus } from "../../components/Hooks/authSelector";

const StaffRegisterPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const uStatus: string = useSelector(userStatus);

  const uError: string | null = useSelector(userError);

  const handleStaffRegister = async (formData: {
    name: string;
    email: string;
    phone_number: string;
    password: string;
    role: string;
    isAttendance: boolean;
  }) => {
    console.log(formData);
    try {
      const response: any = await dispatch(staffRegister(formData) as any);
      if (response.meta.requestStatus === "fulfilled") {
        router.push("/attendances");
      } else {
        throw new Error("e");
      }
    } catch (error) {
      console.log("Error", error);
      return;
    }
  };

  return (
    <div className="min-h-full ">
      {uError && (
        <BasicAlerts type="error" message={uError} space={1} padding={0.6} />
      )}
      <div className="mt-4 ml-4">
        <RouterButton link={"/attendances"} value="スタッフ画面に戻る" />
      </div>
      {uStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <AuthStaffRegisterForm onSubmitStaff={handleStaffRegister} />
      )}
    </div>
  );
};

export default StaffRegisterPage;
