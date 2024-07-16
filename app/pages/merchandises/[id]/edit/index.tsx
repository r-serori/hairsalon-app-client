import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateMerchandise } from "../../../../store/merchandises/merchandiseSlice";
import MerchandiseForm from "../../../../components/elements/form/merchandises/MerchandiseForm";
import {
  merchandiseStatus,
  merchandiseStore,
  merchandiseError,
} from "../../../../components/Hooks/selector";
import RouterButton from "../../../../components/elements/button/RouterButton";
import BasicAlerts from "../../../../components/elements/alert/Alert";

const merchandiseEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const mStatus: string = useSelector(merchandiseStatus);
  const mError: string = useSelector(merchandiseError);

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
      const response = await dispatch(updateMerchandise(formData) as any);

      if (response.meta.requestStatus === "fulfilled") {
        console.log("Success", response);
        router.push("/merchandises");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-full ">
      {mError && (
        <BasicAlerts type="error" message={mError} space={1} padding={1} />
      )}
      {mStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="ml-4 mt-4">
            <RouterButton link={"/merchandises"} value="物販画面に戻る" />
          </div>

          <MerchandiseForm
            node={merchandise}
            createMerchandise={handleUpdate}
            edit={true}
          />
        </div>
      )}
    </div>
  );
};

export default merchandiseEdit;
