import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createMerchandise,
  getMerchandise,
} from "../../../store/merchandises/merchandiseSlice";
import { RootState } from "../../../redux/store";
import MerchandiseForm from "../../../components/elements/form/merchandises/MerchandiseForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../components/elements/button/RouterButton";
import { ManagerPermission } from "../../../components/Hooks/ManagerPermission";

const merchandiseCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.merchandise.loading);

  const handleCreate = async (formData: {
    id: number;
    merchandise_name: string;
    price: number;
    owner_id: number;
    created_at: string;
    updated_at: string;
  }) => {
    try {
      await dispatch(createMerchandise(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/merchandises"); // Redirect to the merchandise list page after creating a merchandise
  };
  return (
    <div className="min-h-full">
      <div className="ml-4 mt-4">
        <BackAgainButton link={"/merchandises"} />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MerchandiseForm createMerchandise={handleCreate} />
      )}
    </div>
  );
};

export default merchandiseCreate;
