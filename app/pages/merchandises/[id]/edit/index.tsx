import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  updateMerchandise,
  getMerchandise,
  MerchandiseState,
} from "../../../../store/merchandises/merchandiseSlice";
import { RootState } from "../../../../redux/store";
import MerchandiseForm from "../../../../components/elements/form/merchandises/MerchandiseForm";
import BackAgainButton from "../../../../components/elements/button/RouterButton";
import {
  merchandiseStatus,
  merchandiseStore,
} from "../../../../components/Hooks/selector";
import RouterButton from "../../../../components/elements/button/RouterButton";

const merchandiseEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const mStatus: string = useSelector(merchandiseStatus);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const merchandise = useSelector(merchandiseStore).find(
    (merchandise) => merchandise.id === Number(id)
  );

  console.log("merchandiseだよ");
  console.log(merchandise);

  const handleUpdate = async (formData: {
    id: number;
    merchandise_name: string;
    price: number;
  }) => {
    try {
      await dispatch(updateMerchandise(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/merchandises");
  };

  return (
    <div className="min-h-full ">
      <div className="my-4 mx-4">
        <RouterButton link={"/merchandises"} value="物販画面に戻る" />
      </div>
      {mStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <MerchandiseForm
          node={merchandise}
          createMerchandise={handleUpdate}
          edit={true}
        />
      )}
    </div>
  );
};

export default merchandiseEdit;
