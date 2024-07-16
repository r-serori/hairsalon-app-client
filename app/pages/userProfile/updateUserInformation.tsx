import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateUser, UserState } from "../../store/auth/userSlice";
import BasicAlerts from "../../components/elements/alert/Alert";
import UpdateInformationForm from "../../components/elements/form/userProfile/UpdateInformationForm";
import {
  permissionStore,
  user,
  userError,
  userMessage,
  userStatus,
} from "../../components/Hooks/authSelector";
import { useEffect } from "react";
import { staffPermission } from "../../components/Hooks/useMethod";
import { PermissionsState } from "../../store/auth/permissionSlice";
import { showUser } from "../../store/auth/userSlice";
import RouterButton from "../../components/elements/button/RouterButton";

const UpdateUserInformationPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const editUser: UserState[] = useSelector(user);

  const uError: string | null = useSelector(userError);

  const uStatus: string = useSelector(userStatus);

  const uMessage: string | null = useSelector(userMessage);

  const permission: PermissionsState = useSelector(permissionStore);

  useEffect(() => {
    const fetchData = async () => {
      try {
        staffPermission(permission, router);

        if (
          permission === "オーナー" ||
          permission === "マネージャー" ||
          permission === "スタッフ"
        ) {
          await dispatch(showUser({}) as any);
        } else {
          return;
        }
      } catch (error) {
        console.log("Error", error);
        return;
      }
    };
    fetchData();
  }, [dispatch]);

  const handleUpdateUserInformation = async (formData: {
    name: string;
    email: string;
    phone_number: string;
  }) => {
    console.log(formData);
    try {
      const response = await dispatch(updateUser(formData) as any);

      if (response.meta.requestStatus === "fulfilled") {
        router.push("/dashboard");
      } else {
        throw new Error();
      }
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
      <div className="mx-4">
        <div className="flex justify-between my-4 ">
          <RouterButton
            link={"/userProfile/updatePassword"}
            value="パスワードを変更する場合はこちら"
          />
          <RouterButton
            link={"/userProfile/resetPassword"}
            value="パスワードを忘れてしまった場合はこちら"
          />
        </div>

        {uStatus === "loading" ? (
          <p>Loading...</p>
        ) : (
          <UpdateInformationForm
            onSubmitUserInformation={handleUpdateUserInformation}
            node={Object(editUser)}
          />
        )}
      </div>
    </div>
  );
};

export default UpdateUserInformationPage;
