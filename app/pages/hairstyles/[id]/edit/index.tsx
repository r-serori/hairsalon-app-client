import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  updateHairstyle,
  getHairstyle,
  HairstyleState,
} from "../../../../store/hairstyles/hairstyleSlice";
import { RootState } from "../../../../redux/store";
import HairstyleForm from "../../../../components/elements/form/hairstyles/HairstyleForm";
import BackAgainButton from "../../../../components/elements/button/RouterButton";
import RouterButton from "../../../../components/elements/button/RouterButton";

const hairstyleEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.hairstyle.status);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const hairstyle = useSelector((state: RootState) =>
    state.hairstyle.hairstyle.find(
      (hairstyle: HairstyleState) => hairstyle.id === parseInt(id as string)
    )
  );

  console.log("hairstyleだよ");
  console.log(hairstyle);

  const handleUpdate = async (formData: {
    id: number;
    hairstyle_name: string;
  }) => {
    try {
      await dispatch(updateHairstyle(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/hairstyles");
  };

  return (
    <div className="min-h-full ">
      <div className="mt-4 ml-4">
        <RouterButton link={"/hairstyles"} value="へスタイル管理画面に戻る" />
      </div>
      {loading === "loading" ? (
        <p>Loading...</p>
      ) : (
        <HairstyleForm
          node={hairstyle}
          createHairstyle={handleUpdate}
          edit={true}
        />
      )}
    </div>
  );
};

export default hairstyleEdit;
