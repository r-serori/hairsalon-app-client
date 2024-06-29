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
  merchandiseMessage,
  merchandiseError,
  merchandiseStore,
} from "../../../../components/Hooks/selector";
import { userKey } from "../../../../components/Hooks/authSelector";
import { getUserKey } from "../../../../components/Hooks/useMethod";
import { getOwnerId } from "../../../../components/Hooks/getLocalStorage";

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
    owner_id: number;
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
      <BackAgainButton link={"/merchandises"} />
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
