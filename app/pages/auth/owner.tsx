import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import { ownerRegister } from "../../store/auth/ownerSlice";
import OwnerRegisterForm from "../../components/elements/form/auth/AuthOwnerForm";
import BasicAlerts from "../../components/elements/alert/Alert";

const OwnerPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.auth.status);

  const message = useSelector((state: RootState) => state.auth.message);

  const error = useSelector((state: RootState) => state.auth.error);

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
      localStorage.setItem("owner_id", ownerId);
      router.push("/dashboard");
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
