import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  daily_saleError,
  daily_salesStore,
  daily_saleStatus,
} from "../../../../components/Hooks/selector";
import { Daily_salesState } from "../../../../store/daily_sales/daily_saleSlice";
import { updateDaily_sales } from "../../../../store/daily_sales/daily_saleSlice";
import DailySalesForm from "../../../../components/elements/form/sales/daily_sales/Daily_salesForm";
import RouterButton from "../../../../components/elements/button/RouterButton";
import BasicAlerts from "../../../../components/elements/alert/Alert";
const dailySalesEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const dsStatus: string = useSelector(daily_saleStatus);
  const dsError: string = useSelector(daily_saleError);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const dailySale: Daily_salesState = useSelector(daily_salesStore).find(
    (dailySale: Daily_salesState) => dailySale.id === Number(id)
  );

  console.log("dailySaleです");
  console.log(dailySale);

  const handleUpdate = async (formData: {
    id: number;
    date: string;
    daily_sales: number;
  }) => {
    try {
      const response = await dispatch(updateDaily_sales(formData) as any);
      if (response.meta.requestStatus === "fulfilled") {
        console.log("Success", response);
        router.push("/daily_sales");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-full ">
      {dsError && (
        <BasicAlerts type="error" message={dsError} space={1} padding={1} />
      )}
      {dsStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="mx-4 my-4">
            <RouterButton link={"/daily_sales"} value="日別売上画面に戻る" />
          </div>

          <DailySalesForm node={dailySale} createDailySales={handleUpdate} />
        </div>
      )}
    </div>
  );
};

export default dailySalesEdit;
