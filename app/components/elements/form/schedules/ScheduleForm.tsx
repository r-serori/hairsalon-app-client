import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import PrimaryButton from "../../button/PrimaryButton";
import { ScheduleState } from "../../../../store/schedules/scheduleSlice";

interface ScheduleFormProps {
  createSchedule: (formData: ScheduleState) => void;
}

const ScheduleForm: React.FC<ScheduleFormProps> = ({ createSchedule }) => {
  const [date, setDateName] = useState("");
  const [start_time, setStartTime] = useState("");
  const [end_time, setEndTime] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createSchedule({
      id: 0,
      date: date,
      start_time: start_time,
      end_time: end_time,
      price: price,
      created_at: "",
      updated_at: "",
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 h-full ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            予約登録
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <BasicTextField
            type="date"
            placeholder="日付"
            value={date}
            onChange={(e) => setDateName(e.target.value)}
          />

          <BasicTextField
            type="time"
            placeholder="開始時間"
            value={start_time}
            onChange={(e) => setStartTime(e.target.value)}
          />

          <BasicTextField
            type="time"
            placeholder="終了時間"
            value={end_time}
            onChange={(e) => setEndTime(e.target.value)}
          />

          <BasicTextField
            type="number"
            placeholder="価格"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <PrimaryButton value={"作成"} />
        </form>
      </div>
    </div>
  );
};

export default ScheduleForm;
