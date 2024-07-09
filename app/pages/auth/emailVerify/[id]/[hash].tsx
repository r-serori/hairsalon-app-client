import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { verifyEmail } from "../../../../store/auth/userSlice";
import { allLogout } from "../../../../components/Hooks/useMethod";

const VerifyEmailComponent = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const { id, hash } = router.query; // URLパラメータからidとhashを取得

  useEffect(() => {
    const verifyEmailFun = async () => {
      console.log("id", id);
      console.log("hash", hash);
      try {
        if (!id || !hash) {
          return;
        }
        const formData = {
          id: Number(id),
          hash: String(hash),
        };

        const response = await dispatch(verifyEmail(formData) as any);

        if (response.payload.status === "success") {
          router.push("/auth/owner");
        } else {
          allLogout(dispatch);
          router.push("/auth/login");
        }
      } catch (error) {
        console.log("error", error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };
    verifyEmailFun();
  }, [router.query, dispatch]);

  return (
    <div>
      <h2>Email認証中...</h2>
      {/* ユーザーには認証中であることを示すUIなどを表示 */}
    </div>
  );
};

export default VerifyEmailComponent;
