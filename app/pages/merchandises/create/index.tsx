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
import { getUserKey } from "../../../components/Hooks/useMethod";
import { getOwnerId } from "../../../components/Hooks/getLocalStorage";
import { merchandiseStatus } from "../../../components/Hooks/selector";

const merchandiseCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const mStatus: string = useSelector(merchandiseStatus);

  const handleCreate = async (formData: {
    id: number;
    merchandise_name: string;
    price: number;
    owner_id: number;
  }) => {
    try {
      const userKey: string | null = await getUserKey(dispatch);
      const ownerId = await getOwnerId(userKey);
      formData.owner_id = ownerId;
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
