import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOption, getOption } from "../../../store/options/optionSlice";
import { RootState } from "../../../redux/store";
import OptionForm from "../../../components/elements/form/options/OptionForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../components/elements/button/RouterButton";
import { ManagerPermission } from "../../../components/Hooks/ManagerPermission";

const optionCreate: React.FC = () => {
  const dispatch = useDispatch();

  const router = useRouter();

  const loading = useSelector((state: RootState) => state.option.loading);

  const handleCreate = async (formData: {
    id: number;
    option_name: string;
    price: number;
    owner_id: number;
    created_at: string;
    updated_at: string;
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
      {loading ? <p>Loading...</p> : <OptionForm createOption={handleCreate} />}
    </div>
  );
};

export default optionCreate;
