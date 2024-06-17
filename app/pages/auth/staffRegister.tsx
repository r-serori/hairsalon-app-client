import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import AuthStaffRegisterForm from "../../components/elements/form/auth/AuthStaffRegisterForm";
import { staffRegister } from "../../store/auth/authSlice";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";

const StaffRegisterPage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoading = useSelector((state: RootState) => state.auth.loading);

  const error = useSelector((state: RootState) => state.auth.error);

  const owner = useSelector((state: RootState) => state.owner.owner);

  const ownerError = useSelector((state: RootState) => state.owner.error);

  const ownerMessage = useSelector((state: RootState) => state.owner.message);

  // useEffect(() => {
  //   const hasLaravelSessionCookie = () => {
  //     // ブラウザのCookieからlaravel_session Cookieを取得する
  //     const cookies = document.cookie;
  //     console.log("cookies", cookies);

  //     if (cookies.startsWith("XSRF-TOKEN")) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   };

  //   if (hasLaravelSessionCookie()) {
  //     console.log("XCSRF存在します");
  //     router.push("/dashboard");
  //     // ログイン済みの場合の処理を記述する
  //   } else {
  //     console.log("XCSRFが存在しません");
  //     // 未ログインの場合の処理を記述する
  //   }
  // }, []); // useEffectの依存配列を空にすることで、初回のみ実行されるようにする

  const handleStaffRegister = async (formData: {
    name: string;
    email: string;
    phone_number: string;
    password: string;
    role: string;
    isAttendance: boolean;
    owner_id: number;
  }) => {
    console.log(formData);
    try {
      const response = await dispatch(staffRegister(formData) as any);
      console.log("Success", response);
      router.push("/attendances");
    } catch (error) {
      console.log("Error", error);
      return;
    }
  };

  return (
    <div>
      {ownerError && (
        <BasicAlerts
          type={error}
          message={ownerError}
          space={1}
          padding={0.6}
        />
      )}

      {error && (
        <BasicAlerts type={error} message={error} space={1} padding={0.6} />
      )}

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <AuthStaffRegisterForm
          onSubmitStaff={handleStaffRegister}
          errorMessage={error}
        />
      )}
    </div>
  );
};

export default StaffRegisterPage;
