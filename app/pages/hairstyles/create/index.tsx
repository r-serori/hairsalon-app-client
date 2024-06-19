import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createHairstyle,
  getHairstyle,
} from "../../../store/hairstyles/hairstyleSlice";
import { RootState } from "../../../redux/store";
import HairstyleForm from "../../../components/elements/form/hairstyles/HairstyleForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../components/elements/button/RouterButton";
import RouterButton from "../../../components/elements/button/RouterButton";

const hairstyleCreate = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.hairstyle.loading);

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
    router.push("/hairstyles"); // Redirect to the hairstyle list page after creating a hairstyle
  };
  return (
    <div className="min-h-full ">
      <div className="mt-4 ml-4">
        <RouterButton link={"/hairstyles"} value="ヘアスタイル管理画面に戻る" />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <HairstyleForm createHairstyle={handleCreate} />
      )}
    </div>
  );
};

export default hairstyleCreate;
