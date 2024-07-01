import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { ownerRegister } from "../../store/auth/ownerSlice";
import OwnerRegisterForm from "../../components/elements/form/auth/AuthOwnerForm";
import BasicAlerts from "../../components/elements/alert/Alert";
import {
  userStatus,
  userMessage,
  userError,
  userKey,
  userKeyStatus,
} from "../../components/Hooks/authSelector";
import { getUserKey, allLogout } from "../../components/Hooks/useMethod";
import { changeMessage } from "../../store/auth/userSlice";

const OwnerPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const UStatus: string = useSelector(userStatus);

  const UMessage: string | null = useSelector(userMessage);

  const UError: string | null = useSelector(userError);

  const ownerSubmit = async (formData: {
    store_name: string;
    address: string;
    phone_number: string;
    user_id: number;
  }) => {
    console.log(formData);
    try {
      await dispatch(ownerRegister(formData) as any);
      console.log("Success");
      router.push("/dashboard");
    } catch (error) {
      await allLogout(dispatch);
      await dispatch(
        changeMessage("登録処理に失敗しました！もう一度お試しください！")
      );
      console.log("Error", error);
      return;
    }
  };

  return (
    <div>
      {UMessage && (
        <BasicAlerts
          message={UMessage}
          type="success"
          padding={0.8}
          space={1}
        />
      )}
      {UError && (
        <BasicAlerts message={UError} type="error" padding={0.8} space={1} />
      )}

      {UStatus == "loading" ? (
        <p>Loading...</p>
      ) : (
        <OwnerRegisterForm onSubmit={ownerSubmit} />
      )}
    </div>
  );
};

export default OwnerPage;
