import React, { useState } from "react";
import BasicTextField from "../../../input/BasicTextField";
import SingleCheckBox from "../../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../../button/PrimaryButton";
import MultiCheckbox from "../../../input/checkbox/MultiCheckbox";

interface Yearly_salesFormProps {
  onSubmit: (formData: {
    id: number;
    year: number;
    yearly_sales: number;
    created_at: string;
    updated_at: string;
    loading: boolean;
    error: string | null;
  }) => void;
}

const yearly_salesForm: React.FC<Yearly_salesFormProps> = ({ onSubmit }) => {
  const [id, setId] = useState(0);
  const [year, setYear] = useState(0);
  const [yearly_sales, setYearly_sales] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      id: id,
      year: year,
      yearly_sales: yearly_sales,
      created_at: "",
      updated_at: "",
      loading: false,
      error: null,
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 h-full ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            年次売上登録
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            type="hidden"
            value={id}
            onChange={(e) => setId(parseInt(e.target.value))}
          />

          <BasicTextField
            type="number"
            placeholder="年"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />

          <BasicTextField
            type="number"
            placeholder="日次売上"
            value={yearly_sales}
            onChange={(e) => setYearly_sales(e.target.value)}
          />

          <PrimaryButton value={"作成"} />
        </form>
      </div>
    </div>
  );
};

export default yearly_salesForm;
