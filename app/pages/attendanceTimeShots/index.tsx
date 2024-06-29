import Link from "next/link";
import { useState } from "react";
import ComponentTable from "../../components/elements/table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../redux/store";
import BasicAlerts from "../../components/elements/alert/Alert";
import { UserAllState } from "../../components/Hooks/interface";
import { getAttendanceUsers } from "../../store/auth/userSlice";
import { useRouter } from "next/router";
import {
  user,
  userError,
  userMessage,
  userStatus,
} from "../../components/Hooks/authSelector";
import {
  attendance_timeError,
  attendance_timeMessage,
  attendance_timesStore,
  attendance_timeStatus,
} from "../../components/Hooks/selector";
import { userKey } from "../../components/Hooks/authSelector";
import { getUserKey } from "../../components/Hooks/useMethod";
import {
  getRole,
  getOwnerId,
  getVioRoleData,
} from "../../components/Hooks/getLocalStorage";
import { staffPermission } from "../../components/Hooks/useMethod";
import _ from "lodash";
import { allLogout } from "../../components/Hooks/useMethod";

const AttendanceTimeShots = () => {
  const [ownerId, setOwnerId] = useState<number | null>(null);
  const [firstRender, setFirstRender] = useState(true);
  const [permission, setPermission] = useState<
    "オーナー" | "マネージャー" | "スタッフ" | null
  >(null);

  const router = useRouter();

  const dispatch = useDispatch();

  const users: UserAllState[] = useSelector(user);
  console.log("users", users);
  const uStatus: string = useSelector(userStatus);

  const uMessage: string | null = useSelector(userMessage);

  const uError: string | null = useSelector(userError);

  const key: string | null = useSelector(userKey);

  useEffect(() => {
    const getStaffs = async () => {
      const response = await dispatch(getAttendanceUsers(ownerId) as any);
      console.log("response", response);
      localStorage.setItem("userCount", response.payload.userCount);
    };

    const fetchData = async () => {
      try {
        if (key === null) {
          const userKey: string = await getUserKey(dispatch);

          if (userKey !== null) {
            const roleData: string | null = await getRole(userKey);
            const ownerId: number | null = await getOwnerId(userKey);

            const vioRole: "オーナー" | "マネージャー" | "スタッフ" | null =
              await getVioRoleData(userKey);

            if (roleData !== null && ownerId !== null && vioRole !== null) {
              setOwnerId(ownerId);
              setPermission(vioRole);
            } else {
              throw new Error("RoleData or ownerId is null");
            }
          } else {
            throw new Error("UserKey is null");
          }
        }

        staffPermission(permission, router);

        const userCount = localStorage.getItem("userCount");

        if (
          !userCount ||
          userCount === "undefined" ||
          userCount === null ||
          userCount === "" ||
          userCount === undefined ||
          (users.length < Number(userCount) && firstRender)
        ) {
          getStaffs();
        }
      } catch (error) {
        console.log("Error", error);
        allLogout(dispatch);
        router.push("/auth/login");
      } finally {
        setFirstRender(false);
      }
    };

    fetchData();
  }, [dispatch, key, ownerId, permission, users, firstRender]);

  const atimeStatus = useSelector(attendance_timeStatus);

  const atimeMessage = useSelector(attendance_timeMessage);

  const atimeError = useSelector(attendance_timeError);

  const searchItems = [{ key: "shotUserName", value: "名前" }];

  const tHeaderItems = ["名前", "勤務中？", "出勤", "退勤"];

  const nodesProps = [{ text: "shotUserName" }, { text: "attendanceNow" }];

  const nodes = users.map((user) => {
    return {
      id: user.id,
      shotUserName: user.name,
      attendanceNow: user.isAttendance ? "勤務中" : "退勤中",
      isAttendance: user.isAttendance,
    };
  });
  console.log("nodes", nodes);

  return (
    <div>
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
          <BasicAlerts
            type="error"
            message={atimeError}
            space={1}
            padding={0.6}
          />
        )}
      </div>
      <div className="mx-8 mt-4">
        {uStatus === "loading" || !nodes ? (
          <p className="py-4 text-blue-700">Loading...</p>
        ) : (
          <ComponentTable
            nodes={nodes}
            searchItems={searchItems}
            tHeaderItems={tHeaderItems}
            nodesProps={nodesProps}
            link="/attendanceTimeShots"
            role={permission}
          />
        )}
      </div>
    </div>
  );
};

export default AttendanceTimeShots;
