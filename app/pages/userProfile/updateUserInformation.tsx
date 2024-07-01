import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateUser } from "../../store/auth/userSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import UpdateInformationForm from "../../components/elements/form/userProfile/UpdateInformationForm";
import {
  userError,
  userMessage,
  userStatus,
} from "../../components/Hooks/authSelector";
const UpdateUserInformationPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const uError: string | null = useSelector(userError);

  const uStatus: string = useSelector(userStatus);

  const uMessage: string | null = useSelector(userMessage);

  const handleUpdateUserInformation = async (formData: {
    name: string;
    email: string;
    phone_number: string;
  }) => {
    console.log(formData);
    try {
      await dispatch(updateUser(formData) as any);
      router.push("/dashboard");
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      {uError && (
        <BasicAlerts type="error" message={uError} space={1} padding={0.6} />
      )}

      {uMessage && (
        <BasicAlerts
          type="success"
          message={uMessage}
          space={1}
          padding={0.6}
        />
      )}

      {uStatus === "loading" ? (
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
