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
    postal_code: string;
    prefecture: string;
    city: string;
    addressLine1: string;
    addressLine2?: string;
    phone_number: string;
    user_id: number;
  }) => {
    console.log(formData);
    try {
      const response = await dispatch(ownerRegister(formData) as any);
      if (
        response.payload.status === 400 ||
        response.payload.status === 401 ||
        response.payload.status === 403 ||
        response.payload.status === 404 ||
        response.payload.status === 500
      ) {
        throw new Error(response.payload.message);
      }
      console.log("Success");

      router.push("/dashboard");
    } catch (error) {
      dispatch(
        changeMessage("登録処理に失敗しました！もう一度お試しください！")
      );
      console.log("Error", error);
      return;
    }
  };

  return (
    <div>
      {UStatus == "idle" && (
        <BasicAlerts
          message="メールの認証が完了しました！続いて、オーナー登録を行ってください！"
          type="info"
          padding={0.8}
          space={1}
        />
      )}
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
