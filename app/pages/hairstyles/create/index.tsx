import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createHairstyle } from "../../../store/hairstyles/hairstyleSlice";
import { RootState } from "../../../redux/store";
import HairstyleForm from "../../../components/elements/form/hairstyles/HairstyleForm";
import { useRouter } from "next/router";
import RouterButton from "../../../components/elements/button/RouterButton";

const hairstyleCreate = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.hairstyle.status);

  const handleCreate = async (formData: {
    id: number;
    hairstyle_name: string;
    owner_id: number;
    created_at: string;
    updated_at: string;
  }) => {
    try {
      await dispatch(createHairstyle(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/hairstyles");
  };
  return (
    <div className="min-h-full ">
      <div className="mt-4 ml-4">
        <RouterButton link={"/hairstyles"} value="ヘアスタイル管理画面に戻る" />
      </div>
      {loading === "loading" ? (
        <p>Loading...</p>
      ) : (
        <HairstyleForm createHairstyle={handleCreate} />
      )}
    </div>
  );
};

export default hairstyleCreate;
