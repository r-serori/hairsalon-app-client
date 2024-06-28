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
import { pushOwnerId } from "../../components/Hooks/pushLocalStorage";
import { changeMessage } from "../../store/auth/userSlice";

const OwnerPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const UStatus: string = useSelector(userStatus) as string;

  const UMessage: string | null = useSelector(userMessage) as string | null;

  const UError: string | null = useSelector(userError) as string | null;

  const keyStatus: string | null = useSelector(userKeyStatus) as string | null;
  const key: string | null = useSelector(userKey) as string | null;

  const ownerSubmit = async (formData: {
    store_name: string;
    address: string;
    phone_number: string;
    user_id: number;
  }) => {
    console.log(formData);
    try {
      const response: any = await dispatch(ownerRegister(formData) as any);
      console.log("Success", response);
      const ownerId: number = response.payload.responseOwner.id as number;

      if (key === null) {
        (await getUserKey(dispatch)) as string | null;
      }

      const pushOwner: boolean = (await pushOwnerId(ownerId, key)) as boolean;

      if (pushOwner) {
        router.push("/dashboard");
      } else {
        throw new Error("オーナー登録に失敗しました");
      }
    } catch (error) {
      allLogout(dispatch);
      changeMessage("登録処理に失敗しました！もう一度お試しください！");
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
