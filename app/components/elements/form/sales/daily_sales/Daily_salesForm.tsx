import React, { useState } from "react";
import BasicTextField from "../../../input/BasicTextField";
import SingleCheckBox from "../../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../../button/PrimaryButton";
import MultiCheckbox from "../../../input/checkbox/MultiCheckbox";

interface Daily_salesFormProps {
  onSubmit: (formData: {
    id: number;
    date: string;
    daily_sales: number;
    created_at: string;
    updated_at: string;
    loading: boolean;
    error: string | null;
  }) => void;
}

const daily_salesForm: React.FC<Daily_salesFormProps> = ({ onSubmit }) => {
  const [id, setId] = useState(0);
  const [date, setDate] = useState("");
  const [daily_sales, setDaily_sales] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      id: id,
      date: "",
      daily_sales: parseInt(daily_sales),
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
            日次売上登録
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            type="hidden"
            value={id}
            onChange={(e) => setId(parseInt(e.target.value))}
          />

          <BasicTextField
            type="date"
            placeholder="日付"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <BasicTextField
            type="number"
            placeholder="日次売上"
            value={daily_sales}
            onChange={(e) => setDaily_sales(e.target.value)}
          />

          <PrimaryButton value={"作成"} />
        </form>
      </div>
    </div>
  );
};

export default daily_salesForm;
