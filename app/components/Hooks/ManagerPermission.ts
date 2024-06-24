import { useEffect } from "react";
import { useRouter } from "next/router";

export const ManagerPermission = (setRole) => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const role = localStorage.getItem("role");
      if (role === "マネージャー" || role === "オーナー") {
        setRole(role);
        return;
      } else {
        router.push("/dashboard");
      }
    }
  }, []);
};
