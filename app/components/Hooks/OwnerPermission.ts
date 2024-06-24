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
