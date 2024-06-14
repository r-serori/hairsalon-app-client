import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import AuthRegisterForm from "../../../components/elements/form/auth/AuthRegisterForm";
import { register, secondRegister } from "../../../store/auth/authSlice";
import { RootState } from "../../../redux/store";

const RegisterCreatePage: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoading = useSelector((state: RootState) => state.auth.loading);

  const error = useSelector((state: RootState) => state.auth.error);

  const owner = useSelector((state: RootState) => {
    if (state.owner.owner) {
      return state.owner.owner[0];
    } else {
      return null;
    }
  });

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

  const handleRegister = async (formData: {
    name: string;
    email: string;
    phone_number: string;
    role: string;
    password: string;
    isAttendance: boolean;
    owner_id: number | null;
  }) => {
    console.log(formData);
    try {
      const response = await dispatch(secondRegister(formData) as any);
      console.log("Success", response);
      router.push("/attendances");
    } catch (error) {
      console.log("Error", error);
      return;
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <AuthRegisterForm
          onSubmit={handleRegister}
          errorMessage={error}
          ownerId={owner ? owner.id : null}
        />
      )}
    </div>
  );
};

export default RegisterCreatePage;
