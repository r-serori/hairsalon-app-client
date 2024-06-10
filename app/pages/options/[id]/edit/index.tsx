import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  updateOption,
  getOptionById,
  getOption,
} from "../../../../store/options/optionSlice";
import { RootState } from "../../../../redux/store";
import OptionForm from "../../../../components/elements/form/options/OptionForm";
import BackAgainButton from "../../../../components/elements/button/RouterButton";

const optionEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.option.loading);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const option = useSelector((state: RootState) =>
    state.option.option.find((option) => option.id === parseInt(id as string))
  );

  console.log("optionだよ");
  console.log(option);

  const handleUpdate = async (formData: {
    id: number;
    option_name: string;
    price: number;
    created_at: string;
    updated_at: string;
  }) => {
    try {
      try {
        await dispatch(updateOption(formData) as any);
      } catch (error) {
        console.error(error);
      }
      await dispatch(getOption as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/options"); // Redirect to the option list page after updating a option
  };
  return (
    <div className="min-h-full ">
      <BackAgainButton link={"/options"} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <OptionForm node={option} createOption={handleUpdate} edit={true} />
      )}
    </div>
  );
};

export default optionEdit;
