import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../../../redux/store";
import AttendanceForm from "../../../../components/elements/form/attendances/AttendanceForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../../components/elements/button/RouterButton";
import RouterButton from "../../../../components/elements/button/RouterButton";
import {
  updateUserPermission,
  deleteUser,
  showUser,
} from "../../../../store/auth/userSlice";
import UserUpdateForm from "../../../../components/elements/form/attendances/AttendanceForm";
import DeleteButton from "../../../../components/elements/button/DeleteButton";
import { useState } from "react";

const attenDanceEdit: React.FC = () => {
  const [role, setRole] = useState<string>("");

  const dispatch = useDispatch();

  const loading = useSelector((state: RootState) => state.auth.status);
  const router = useRouter();

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  let user = useSelector((state: RootState) =>
    state.auth.auth.find((user) => user.id === Number(id))
  );

  const [dispatchLoading, setDispatchLoading] = useState<boolean>(false);
  useEffect(() => {
    setDispatchLoading(true);
    const role = localStorage.getItem("role");
    if (role === "オーナー") {
      setRole(role);
    } else {
      router.push("/dashboard");
    }
    try {
      if (!user && role === "オーナー") {
        const response = dispatch(showUser(Number(id)) as any);
        user = response.payload.responseUser;
      } else {
        console.log("user", user);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setDispatchLoading(false);
    }
  }, [user, id, dispatch]);

  const handleUpdate = async (formData: { id: number; role: string }) => {
    try {
      await dispatch(updateUserPermission(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/attendances");
  };

  const handleDeleteUser = async () => {
    try {
      await dispatch(deleteUser(user.id) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/attendances");
  };

  return (
    <div className="min-h-full ">
      <div>
        <div className="flex justify-between mt-4 mx-4">
          <RouterButton link={"/attendances"} value="スタッフ画面に戻る" />

          <DeleteButton value="退職する" onClicker={handleDeleteUser} />
        </div>
      </div>

      {loading === "loading" || dispatchLoading || !user ? (
        <p>Loading...</p>
      ) : (
        <div>
          <UserUpdateForm onSubmit={handleUpdate} node={user} />
        </div>
      )}
    </div>
  );
};

export default attenDanceEdit;
