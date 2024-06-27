import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { ownerRegister } from "../../store/auth/ownerSlice";
import OwnerRegisterForm from "../../components/elements/form/auth/AuthOwnerForm";
import BasicAlerts from "../../components/elements/alert/Alert";
import CryptoJS from "crypto-js";
import { getKey } from "../../store/auth/keySlice";

const OwnerPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.auth.status);

  const message = useSelector((state: RootState) => state.auth.message);

  const error = useSelector((state: RootState) => state.auth.error);

  const key = useSelector((state: RootState) => state.key.key);

  const keyStatus = useSelector((state: RootState) => state.key.status);

  const ownerSubmit = async (formData: {
    store_name: string;
    address: string;
    phone_number: string;
    user_id: number;
  }) => {
    console.log(formData);
    try {
      const response = await dispatch(ownerRegister(formData) as any);
      console.log("Success", response);
      const ownerId = response.payload.responseOwner.id;

      try {
        if (loading === "success" && key === null) {
          await dispatch(getKey({}) as any);
        }
      } catch (error) {
        throw new Error("キーの取得に失敗しました！");
      }

      const ownerIdString = JSON.stringify(ownerId);

      const encryptedOwnerId = CryptoJS.AES.encrypt(
        ownerIdString,
        key
      ).toString();

      if (ownerId && keyStatus === "success") {
        localStorage.setItem("owner_id", encryptedOwnerId);
        router.push("/dashboard");
      } else {
        throw new Error("オーナー登録に失敗しました");
      }
    } catch (error) {
      console.log("Error", error);
      return;
    }
  };

  return (
    <div>
      {message && (
        <BasicAlerts message={message} type="success" padding={0.8} space={1} />
      )}
      {error && (
        <BasicAlerts message={error} type="error" padding={0.8} space={1} />
      )}

      {loading == "loading" ? (
        <p>Loading...</p>
      ) : (
        <OwnerRegisterForm onSubmit={ownerSubmit} />
      )}
    </div>
  );
};

export default OwnerPage;
