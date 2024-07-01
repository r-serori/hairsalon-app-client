import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOption, getOption } from "../../../store/options/optionSlice";
import OptionForm from "../../../components/elements/form/options/OptionForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../components/elements/button/RouterButton";
import { optionStatus } from "../../../components/Hooks/selector";

const optionCreate: React.FC = () => {
  const dispatch = useDispatch();

  const router = useRouter();

  const oStatus: string = useSelector(optionStatus);

  const handleCreate = async (formData: {
    id: number;
    option_name: string;
    price: number;
  }) => {
    try {
      await dispatch(createOption(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/options"); // Redirect to the option list page after creating a option
  };
  return (
    <div className="min-h-full ">
      <div className="ml-4 mt-4 ">
        <BackAgainButton link={"/options"} />
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
