import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../../../redux/store";
import AttendanceForm from "../../../../components/elements/form/attendances/AttendanceForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../../components/elements/button/RouterButton";
import RouterButton from "../../../../components/elements/button/RouterButton";
import { updateUserPermission } from "../../../../store/auth/authSlice";
import UserUpdateForm from "../../../../components/elements/form/attendances/AttendanceForm";

const attenDanceEdit: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.auth.loading);
  const router = useRouter();

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const user = useSelector((state: RootState) =>
    state.auth.auth.find((auth) => auth.id === Number(id))
  );

  console.log("userだよ");
  console.log(user);

  const handleUpdate = async (formData: { id: number; role: string }) => {
    try {
      await dispatch(updateUserPermission(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/attendances");
  };

  return (
    <div className="min-h-full ">
      <div className="mt-4 ml-4">
        <RouterButton link={"/attendances"} value="スタッフ画面に戻る" />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserUpdateForm onSubmit={handleUpdate} node={user} />
      )}
    </div>
  );
};

export default attenDanceEdit;
