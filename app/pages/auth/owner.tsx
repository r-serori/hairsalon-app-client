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

  const loading = useSelector((state: RootState) => state.auth.loading);

  const message = useSelector((state: RootState) => state.auth.message);

  const error = useSelector((state: RootState) => state.auth.error);

  //   const handleOwnerRegister = async (formData: {
  //     store_name: string;
  //     address: string;
  //     phone_number: string;
  //     contract_info: string;
  //     user_id: number;
  //   }) => {
  //     console.log(formData);
  //     try {
  //       const response = await dispatch(ownerRegister(formData) as any);
  //       console.log("Success", response);
  //       router.push("/owner");
  //     } catch (error) {
  //       console.log("Error", error);
  //       return;
  //     }

  //     }

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

      {loading ? (
        <p>Loading...</p>
      ) : (
        <OwnerRegisterForm onSubmit={ownerSubmit} />
      )}
    </div>
  );
};

export default OwnerPage;
