import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createHairstyle } from "../../../store/hairstyles/hairstyleSlice";
import HairstyleForm from "../../../components/elements/form/hairstyles/HairstyleForm";
import { useRouter } from "next/router";
import RouterButton from "../../../components/elements/button/RouterButton";
import {
  hairstyleError,
  hairstyleStatus,
} from "../../../components/Hooks/selector";
import BasicAlerts from "../../../components/elements/alert/Alert";

const hairstyleCreate = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const hStatus: string = useSelector(hairstyleStatus);
  const hError: string = useSelector(hairstyleError);

  const handleCreate = async (formData: {
    id: number;
    hairstyle_name: string;
  }) => {
    try {
      const response = await dispatch(createHairstyle(formData) as any);

      if (response.meta.requestStatus === "fulfilled") {
        router.push("/hairstyles");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-full ">
      {hError && (
        <BasicAlerts type="error" message={hError} space={1} padding={1} />
      )}
      <div className="mt-4 ml-4">
        <RouterButton link={"/hairstyles"} value="髪型画面に戻る" />
      </div>
      {hStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <HairstyleForm createHairstyle={handleCreate} />
      )}
    </div>
  );
};

export default hairstyleCreate;
