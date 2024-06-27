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

const merchandiseEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.merchandise.status);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const merchandise = useSelector((state: RootState) =>
    state.merchandise.merchandise.find(
      (merchandise) => merchandise.id === parseInt(id as string)
    )
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
    router.push("/merchandises"); // Redirect to the merchandise list page after updating a merchandise
  };

  return (
    <div className="min-h-full ">
      <BackAgainButton link={"/merchandises"} />
      {loading === "loading" ? (
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
