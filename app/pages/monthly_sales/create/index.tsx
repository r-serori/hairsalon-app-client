import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createMonthly_sales,
  getMonthly_sales,
} from "../../../store/sales/monthly_sales/monthly_saleSlice";
import { RootState } from "../../../redux/store";
import MonthlySaleForm from "../../../components/elements/form/sales/monthly_sales/Monthly_salesForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../components/elements/button/RouterButton";

const monthlySaleCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector(
    (state: RootState) => state.monthly_sales.loading
  );

  const handleCreate = async (formData: {
    id: number;
    year: number;
    month: number;
    monthly_sales: number;
    owner_id: number;
    created_at: string;
    updated_at: string;
  }) => {
    try {
      try {
        await dispatch(createMonthly_sales(formData) as any);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
    router.push("/monthly_sales"); // Redirect to the monthly sale list page after creating a monthly sale
  };
  return (
    <div className="min-h-full ">
      <BackAgainButton link={"/monthly_sales"} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <MonthlySaleForm createMonthlySales={handleCreate} />
      )}
    </div>
  );
};

export default monthlySaleCreate;
