import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateOption } from "../../../../store/options/optionSlice";
import OptionForm from "../../../../components/elements/form/options/OptionForm";
import {
  optionStatus,
  optionsStore,
  optionError,
} from "../../../../components/Hooks/selector";
import RouterButton from "../../../../components/elements/button/RouterButton";
import BasicAlerts from "../../../../components/elements/alert/Alert";

const optionEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const oStatus: string = useSelector(optionStatus);
  const oError: string = useSelector(optionError);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const option = useSelector(optionsStore).find(
    (option) => option.id === Number(id)
  );
  console.log("optionだよ");
  console.log(option);

  const handleUpdate = async (formData: {
    id: number;
    option_name: string;
    price: number;
  }) => {
    try {
      const response = await dispatch(updateOption(formData) as any);

      if (response.meta.requestStatus === "fulfilled") {
        console.log("Success", response);
        router.push("/options");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="min-h-full ">
      {oError && (
        <BasicAlerts type="error" message={oError} space={1} padding={1} />
      )}
      {oStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="ml-4 mt-4">
            <RouterButton link={"/options"} value="オプション画面に戻る" />
          </div>

          <OptionForm node={option} createOption={handleUpdate} edit={true} />
        </div>
      )}
    </div>
  );
};

export default optionEdit;
