import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createDaily_sales,
  getDaily_sales,
} from "../../../store/sales/daily_sales/daily_saleSlice";
import { RootState } from "../../../redux/store";
import DailySaleForm from "../../../components/elements/form/sales/daily_sales/Daily_salesForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../components/elements/button/RouterButton";

const dailySaleCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.daily_sales.loading);

  const handleCreate = async (formData: {
    id: number;
    date: string;
    daily_sales: number;
    owner_id: number;
    created_at: string;
    updated_at: string;
  }) => {
    try {
      try {
        await dispatch(createDaily_sales(formData) as any);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.error(error);
    }
    router.push("/daily_sales"); // Redirect to the daily sale list page after creating a daily sale
  };
  return (
    <div className="min-h-full ">
      <div className="ml-4 mt-4">
        <BackAgainButton link={"/daily_sales"} />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <DailySaleForm createDailySales={handleCreate} />
      )}
    </div>
  );
};

export default dailySaleCreate;
