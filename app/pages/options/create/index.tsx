import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOption, getOption } from "../../../store/options/optionSlice";
import OptionForm from "../../../components/elements/form/options/OptionForm";
import { useRouter } from "next/router";
import { optionStatus, optionError } from "../../../components/Hooks/selector";
import RouterButton from "../../../components/elements/button/RouterButton";
import BasicAlerts from "../../../components/elements/alert/Alert";

const optionCreate: React.FC = () => {
  const dispatch = useDispatch();

  const router = useRouter();

  const oStatus: string = useSelector(optionStatus);
  const oError: string = useSelector(optionError);

  const handleCreate = async (formData: {
    id: number;
    option_name: string;
    price: number;
  }) => {
    try {
      const response = await dispatch(createOption(formData) as any);

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
      <div className="ml-4 mt-4 ">
        <RouterButton link={"/options"} value="オプション画面に戻る" />
      </div>
      {oStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <OptionForm createOption={handleCreate} />
      )}
    </div>
  );
};

export default optionCreate;
