import React, { useState } from "react";
import BasicTextField from "../../../input/BasicTextField";
import PrimaryButton from "../../../button/PrimaryButton";
import { Monthly_salesState } from "../../../../../store/monthly_sales/monthly_saleSlice";
import BasicNumberField from "../../../input/BasicNumberField";
import BasicAlerts from "../../../alert/BasicAlert";

interface MonthlySalesFormProps {
  node: Monthly_salesState;
  createMonthlySales: (formData: Monthly_salesState) => void;
}

const MonthlySalesForm: React.FC<MonthlySalesFormProps> = ({
  node,
  createMonthlySales,
}) => {
  const [year_month, setYear_month] = useState<string>(
    node.year_month ? node.year_month : ""
  );
  const [monthly_sales, setMonthly_sales] = useState<number>(
    node.monthly_sales ? node.monthly_sales : 0
  );

  const [monthlySalesValidate, setMonthlySalesValidate] = useState<boolean>(
    node && node.monthly_sales ? true : false
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!monthlySalesValidate || !year_month || !monthly_sales) {
      return;
    }

    createMonthlySales({
      id: node.id,
      year_month: year_month,
      monthly_sales: monthly_sales,
    });
  };

  return (
    <div>
      <div className="flex items-center justify-center bg-gray-50 pt-12 py-80 px-4 sm:px-6 lg:px-8 min-h-full ">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              月次売上編集
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <BasicTextField
              id={0}
              placeholder="年月"
              value={year_month}
              onChange={(e) => setYear_month(e.target.value)}
              disabled={true}
            />

            <BasicNumberField
              id={2}
              placeholder="月次売上"
              value={String(monthly_sales)}
              onChange={(e) => setMonthly_sales(Number(e.target.value))}
              format={true}
              onValidationChange={setMonthlySalesValidate}
            />

            <PrimaryButton value={"作成"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MonthlySalesForm;
