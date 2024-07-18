import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, NextRouter } from "next/router";
import {
  monthly_salesStore,
  monthly_saleStatus,
  monthly_saleError,
  monthly_saleErrorStatus,
} from "../../../../components/Hooks/selector";
import { Monthly_salesState } from "../../../../store/monthly_sales/monthly_saleSlice";
import { updateMonthly_sales } from "../../../../store/monthly_sales/monthly_saleSlice";
import MonthlySalesForm from "../../../../components/elements/form/sales/monthly_sales/Monthly_salesForm";
import RouterButton from "../../../../components/elements/button/RouterButton";
import BasicAlerts from "../../../../components/elements/alert/BasicAlert";
import { AppDispatch } from "../../../../redux/store";
import { renderError } from "../../../../store/errorHandler";
import { PermissionsState } from "../../../../store/auth/permissionSlice";
import { permissionStore } from "../../../../components/Hooks/authSelector";

const monthlySalesEdit: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const router: NextRouter = useRouter();
  const permission: PermissionsState = useSelector(permissionStore);

  const { id } = router.query; // idを取得

  const monthlySale: Monthly_salesState = useSelector(monthly_salesStore).find(
    (monthlySale: Monthly_salesState) => monthlySale.id === Number(id)
  );
  const msStatus: string = useSelector(monthly_saleStatus);
  const msError: string = useSelector(monthly_saleError);
  const msErrorStatus: number = useSelector(monthly_saleErrorStatus);

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
        const re = renderError(msErrorStatus, router, dispatch);
        if (re === null) throw new Error("月次売上の更新に失敗しました");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-full ">
      {msError && (
        <BasicAlerts type="error" message={msError} space={1} padding={1} />
      )}
      {msStatus === "loading" ? (
        <p>Loading...</p>
      ) : permission === null ? (
        <p>あなたに権限はありません。</p>
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
