import { useEffect } from "react";
import { useRouter } from "next/router";

export const OwnerPermission = (setRole) => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const role = localStorage.getItem("role");
      if (role === "オーナー") {
        setRole(role);
        return;
      } else {
        router.push("/dashboard");
      }
    }
  }, []);
};

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
        return;
      } else {
        router.push("/dashboard");
      }
    }
  }, []);
};
