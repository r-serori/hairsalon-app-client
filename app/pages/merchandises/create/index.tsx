import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMerchandise } from "../../../store/merchandises/merchandiseSlice";
import MerchandiseForm from "../../../components/elements/form/merchandises/MerchandiseForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../components/elements/button/RouterButton";
import { merchandiseStatus } from "../../../components/Hooks/selector";

const merchandiseCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const mStatus: string = useSelector(merchandiseStatus);

  const handleCreate = async (formData: {
    id: number;
    merchandise_name: string;
    price: number;
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
      {mStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <MerchandiseForm createMerchandise={handleCreate} />
      )}
    </div>
  );
};

export default merchandiseCreate;
