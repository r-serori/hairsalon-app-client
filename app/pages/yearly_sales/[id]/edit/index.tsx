import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  yearly_salesStore,
  yearly_saleStatus,
  yearly_saleError,
} from "../../../../components/Hooks/selector";
import { Yearly_salesState } from "../../../../store/yearly_sales/yearly_saleSlice";
import { updateYearly_sales } from "../../../../store/yearly_sales/yearly_saleSlice";
import YearlySalesForm from "../../../../components/elements/form/sales/yearly_sales/Yearly_salesForm";
import RouterButton from "../../../../components/elements/button/RouterButton";
import BasicAlerts from "../../../../components/elements/alert/Alert";

const yearlySalesEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const ysStatus: string = useSelector(yearly_saleStatus);
  const ysError: string = useSelector(yearly_saleError);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const yearlySale: Yearly_salesState = useSelector(yearly_salesStore).find(
    (yearlySale: Yearly_salesState) => yearlySale.id === Number(id)
  );

  console.log("yearlySaleです");
  console.log(yearlySale);

  const handleUpdate = async (formData: {
    id: number;
    year: string;
    yearly_sales: number;
  }) => {
    try {
      const response = await dispatch(updateYearly_sales(formData) as any);
      if (response.meta.requestStatus === "fulfilled") {
        console.log("Success", response);
        router.push("/yearly_sales");
      } else {
        throw new Error();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-full ">
      {ysError && (
        <BasicAlerts type="error" message={ysError} space={1} padding={1} />
      )}
      <div className="mx-4 my-4">
        <RouterButton link={"/yearly_sales"} value="年次売上画面に戻る" />
      </div>
      {ysStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <YearlySalesForm node={yearlySale} createYearlySales={handleUpdate} />
      )}
    </div>
  );
};

export default yearlySalesEdit;
