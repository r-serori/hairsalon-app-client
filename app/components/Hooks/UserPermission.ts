import { useEffect } from "react";
import { useRouter } from "next/router";

export const UserPermission = (setRole) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const role = localStorage.getItem("role");
      if (
        role === "スタッフ" ||
        role === "マネージャー" ||
        role === "オーナー"
      ) {
        setRole(role);
      } else {
        router.push("/dashboard");
      }
    }
  }, []);
};
