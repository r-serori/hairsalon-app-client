import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createYearly_sales,
  getYearly_sales,
} from "../../../store/sales/yearly_sales/yearly_saleSlice";
import { RootState } from "../../../redux/store";
import YearlySaleForm from "../../../components/elements/form/sales/yearly_sales/Yearly_salesForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../components/elements/button/BackAgainButton";

const yearlySaleCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.yearly_sales.loading);

  const handleCreate = async (formData: {
    id: number;
    year: number;
    yearly_sales: number;
    created_at: string;
    updated_at: string;
  }) => {
    try {
      try {
        await dispatch(createYearly_sales(formData) as any);
      } catch (error) {
        console.error(error);
      }
      await dispatch(getYearly_sales() as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/yearly_sales"); // Redirect to the yearly sale list page after creating a yearly sale
  };

  return (
    <div className="min-h-full ">
      <BackAgainButton link={"/yearly_sales"} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <YearlySaleForm createYearlySales={handleCreate} />
      )}
    </div>
  );
};

export default yearlySaleCreate;
