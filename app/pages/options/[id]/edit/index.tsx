import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateOption, getOption } from "../../../../store/options/optionSlice";
import { RootState } from "../../../../redux/store";
import OptionForm from "../../../../components/elements/form/options/OptionForm";
import BackAgainButton from "../../../../components/elements/button/RouterButton";
import {
  optionStatus,
  optionsStore,
} from "../../../../components/Hooks/selector";
import { userKey } from "../../../../components/Hooks/authSelector";
import { getUserKey } from "../../../../components/Hooks/useMethod";
import { getOwnerId } from "../../../../components/Hooks/getLocalStorage";

const optionEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const oStatus: string = useSelector(optionStatus);

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
    owner_id: number;
  }) => {
    try {
      await dispatch(updateOption(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/options"); // Redirect to the option list page after updating a option
  };
  return (
    <div className="min-h-full ">
      <BackAgainButton link={"/options"} />
      {oStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <OptionForm node={option} createOption={handleUpdate} edit={true} />
      )}
    </div>
  );
};

export default optionEdit;
