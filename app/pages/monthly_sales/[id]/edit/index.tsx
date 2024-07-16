import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  monthly_salesStore,
  monthly_saleStatus,
  monthly_saleError,
} from "../../../../components/Hooks/selector";
import { Monthly_salesState } from "../../../../store/monthly_sales/monthly_saleSlice";
import { updateMonthly_sales } from "../../../../store/monthly_sales/monthly_saleSlice";
import MonthlySalesForm from "../../../../components/elements/form/sales/monthly_sales/Monthly_salesForm";
import RouterButton from "../../../../components/elements/button/RouterButton";
import BasicAlerts from "../../../../components/elements/alert/Alert";

const monthlySalesEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const dsStatus: string = useSelector(monthly_saleStatus);
  const dsError: string = useSelector(monthly_saleError);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const monthlySale: Monthly_salesState = useSelector(monthly_salesStore).find(
    (monthlySale: Monthly_salesState) => monthlySale.id === Number(id)
  );

  console.log("monthlySaleです");
  console.log(monthlySale);

  const handleUpdate = async (formData: {
    id: number;
    year_month: string;
    monthly_sales: number;
  }) => {
    try {
      const response = await dispatch(updateMonthly_sales(formData) as any);

      if (response.meta.requestStatus === "fulfilled") {
        console.log("Success", response);
        router.push("/monthly_sales");
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
            <RouterButton link={"/monthly_sales"} value="日別売上画面に戻る" />
          </div>

          <MonthlySalesForm
            node={monthlySale}
            createMonthlySales={handleUpdate}
          />
        </div>
      )}
    </div>
  );
};

export default monthlySalesEdit;
