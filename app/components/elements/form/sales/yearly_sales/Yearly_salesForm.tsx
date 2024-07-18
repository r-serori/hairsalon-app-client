import React, { useState } from "react";
import BasicTextField from "../../../input/BasicTextField";
import SingleCheckBox from "../../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../../button/PrimaryButton";
import MultiCheckbox from "../../../input/checkbox/MultiCheckbox";
import { Yearly_salesState } from "../.../../../../../../store/yearly_sales/yearly_saleSlice";
import BasicNumberField from "../../../input/BasicNumberField";
import BasicAlerts from "../../../alert/BasicAlert";

interface YearlySalesFormProps {
  node: Yearly_salesState;
  createYearlySales: (formData: Yearly_salesState) => void;
}

const yearly_salesForm: React.FC<YearlySalesFormProps> = ({
  node,
  createYearlySales,
}) => {
  const [year, setYear] = useState(node.year ? node.year : "");
  const [yearly_sales, setYearly_sales] = useState(
    node.yearly_sales ? node.yearly_sales : 0
  );

  const [yearlySalesValidate, setYearlySalesValidate] = useState<boolean>(
    node && node.yearly_sales ? true : false
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!yearlySalesValidate || !year || !yearly_sales) {
      return;
    }
    createYearlySales({
      id: node.id,
      year: year,
      yearly_sales: yearly_sales,
    });
  };

  return (
    <div>
      <BasicAlerts
        message={
          "日付変更はできません！変更したい場合は、年次売上画面から項目を削除し、予約画面から更新し直してください！"
        }
        type={"info"}
        padding={1}
        space={1}
      />
      <div className="flex items-center justify-center bg-gray-50 pt-12 py-80 px-4 sm:px-6 lg:px-8 min-h-full ">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              年次売上編集
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <BasicTextField
              id={0}
              placeholder="年"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />

            <BasicNumberField
              id={1}
              placeholder="日次売上"
              value={String(yearly_sales)}
              onChange={(e) => setYearly_sales(Number(e.target.value))}
              format={true}
              onValidationChange={setYearlySalesValidate}
            />

            <PrimaryButton value={"作成"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default yearly_salesForm;
