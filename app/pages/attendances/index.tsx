import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import BasicAlerts from "../../components/elements/alert/Alert";
import RouterButton from "../../components/elements/button/RouterButton";
import { getUsers } from "../../store/auth/userSlice";
import { UserAllState } from "../../components/Hooks/interface";
import { useState } from "react";
import { useRouter } from "next/router";
import {
  user,
  userError,
  userKey,
  userMessage,
  userStatus,
  permissionStore,
} from "../../components/Hooks/authSelector";
import { ownerPermission, allLogout } from "../../components/Hooks/useMethod";
import _ from "lodash";
import { PermissionsState } from "../../store/auth/permissionSlice";

const Attendances = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const users: UserAllState[] = useSelector(user);

  // const key: string | null = useSelector(userKey);
  const permission: PermissionsState = useSelector(permissionStore);

  useEffect(() => {
    const getStaffs = async () => {
      const response = await dispatch(getUsers({}) as any);
      console.log("response", response);
      localStorage.setItem("userCount", response.payload.userCount);
    };

    const fetchData = async () => {
      try {
        ownerPermission(permission, router);

        const userCount: string = localStorage.getItem("userCount");
        if (
          (permission === "オーナー" && !userCount) ||
          (permission === "オーナー" && userCount === undefined) ||
          (permission === "オーナー" && userCount === null) ||
          (permission === "オーナー" && userCount === "") ||
          (permission === "オーナー" && userCount === "undefined") ||
          (users.length < Number(userCount) && permission === "オーナー")
        ) {
          await getStaffs();
        }
      } catch (error) {
        console.log("Error", error);
        allLogout(dispatch);
        router.push("/auth/login");
      }
    };

    fetchData();
  }, [dispatch]);

  const uStatus: string = useSelector(userStatus);

  const uMessage: string | null = useSelector(userMessage);

  const uError: string | null = useSelector(userError);

  const searchItems = [
    { key: "name", value: "名前" },
    { key: "staff_phone_number", value: "スタッフ電話番号" },
    { key: "role", value: "役職" },
  ];

  const tHeaderItems = [
    "名前",
    "スタッフ電話番号",
    "役職",
    "編集",
    "勤怠時間管理",
  ];

  const nodesProps = [
    { text: "name" },
    { number: "staff_phone_number" },
    { text: "role" },
  ];

  // nodesにusersをマップして処理
  const nodes = users
    .filter((user: UserAllState) => {
      return user.role !== "オーナー";
    })
    .map((user: UserAllState) => {
      return {
        id: user.id,
        name: user.name,
        staff_phone_number: user.phone_number,
        role: user.role,
        isAttendance: user.isAttendance,
      };
    });

  return (
    <div>
      {uMessage && (
        <BasicAlerts
          type="success"
          message={uMessage}
          space={1}
          padding={0.6}
        />
      )}

      {uError && (
        <BasicAlerts type="error" message={uError} space={1} padding={0.6} />
      )}
      <div className="mx-8 mt-4">
        <div className="flex my-4 ml-2">
          <RouterButton link="/auth/staffRegister" value="ユーザー登録" />
        </div>
        {uStatus === "loading" ? (
          <p>Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            nodesProps={nodesProps}
            tHeaderItems={tHeaderItems}
            link="/attendances"
            role={permission}
          />
        )}
      </div>
    </div>
  );
};

export default Attendances;
