import { useDispatch, useSelector } from "react-redux";
import { useRouter, NextRouter } from "next/router";
import BasicAlerts from "../../components/elements/alert/BasicAlert";
import UpdateInformationForm from "../../components/elements/form/userProfile/UpdateInformationForm";
import {
  ownerError,
  ownerErrorStatus,
  ownerStore,
  permissionStore,
  user,
  userError,
  userErrorStatus,
  userMessage,
  userStatus,
} from "../../components/Hooks/authSelector";
import { useEffect } from "react";
import {
  ownerPermission,
  staffPermission,
} from "../../components/Hooks/useMethod";
import { PermissionsState } from "../../store/auth/permissionSlice";
import RouterButton from "../../components/elements/button/RouterButton";
import ForgotPasswordButton from "../../components/elements/button/ForgotPasswordButton";
import { AppDispatch } from "../../redux/store";
import { renderError } from "../../store/errorHandler";
import { getOwner, OwnerState, updateOwner } from "../../store/auth/ownerSlice";
import AuthOwnerForm from "../../components/elements/form/auth/AuthOwnerForm";
import { changeMessage } from "../../store/auth/userSlice";

const UpdateOwnerInformationPage: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const router: NextRouter = useRouter();

  const owner: OwnerState = useSelector(ownerStore);

  const oStatus: string = useSelector(userStatus);
  const oMessage: string | null = useSelector(userMessage);
  const oError: string | null = useSelector(ownerError);
  const oErrorStatus: number = useSelector(ownerErrorStatus);

  const permission: PermissionsState = useSelector(permissionStore);

  useEffect(() => {
    dispatch(changeMessage(null));
    const fetchData = async () => {
      try {
        ownerPermission(permission, router);

        if (permission === "オーナー") {
          const response = await dispatch(getOwner() as any);
          if (response.meta.requestStatus === "rejected") {
            const re = renderError(oErrorStatus, router, dispatch);
            if (re === null) throw new Error("店舗情報の取得に失敗しました");
          }
        }
      } catch (error) {
        console.log("Error", error);
        return;
      }
    };

    if (permission) fetchData();
  }, [dispatch, permission]);

  const handleUpdateOwnerInformation = async (formData: OwnerState) => {
    console.log(formData);
    try {
      const response = await dispatch(updateOwner(formData) as any);

      if (response.meta.requestStatus === "fulfilled") {
        router.push("/dashboard");
      } else {
        const re = renderError(oErrorStatus, router, dispatch);
        if (re === null) throw new Error("ownerInfoUpdateに失敗しました");
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <div>
      {oError && (
        <BasicAlerts type="error" message={oError} space={1} padding={0.6} />
      )}

      {oMessage && (
        <BasicAlerts
          type="success"
          message={oMessage}
          space={1}
          padding={0.6}
        />
      )}

      <div className="mx-4">
        <div className="my-4 ">
          <RouterButton link={"/dashboard"} value="一覧画面へ戻る" />
        </div>

        {oStatus === "loading" ? (
          <p>Loading...</p>
        ) : permission === null ? (
          <p>あなたに権限はありません。</p>
        ) : (
          <AuthOwnerForm node={owner} onSubmit={handleUpdateOwnerInformation} />
        )}
      </div>
    </div>
  );
};

export default UpdateOwnerInformationPage;
