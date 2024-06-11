import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

const OwnerPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoading = useSelector((state: RootState) => state.auth.loading);

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

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        // <OwnerRegisterForm onSubmit={handleOwnerRegister} />
        <div>a</div>
      )}
    </div>
  );
};

export default OwnerPage;
