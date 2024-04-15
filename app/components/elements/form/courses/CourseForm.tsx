import React, { useState } from "react";
import BasicTextField from "../../input/BasicTextField";
import SingleCheckBox from "../../input/checkbox/SingleCheckbox";
import PrimaryButton from "../../button/PrimaryButton";
import MultiCheckbox from "../../input/checkbox/MultiCheckbox";

interface CourseFormProps {
  onSubmit: (formData: {
    id: number;
    course_name: string;
    price: number;
    created_at: string;
    updated_at: string;
    loading: boolean;
    error: string | null;
  }) => void;
}

const courseForm: React.FC<CourseFormProps> = ({ onSubmit }) => {
  const [id, setId] = useState(0);
  const [course_name, setCourseName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({
      id: id,
      course_name: course_name,
      price: price,
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
            コース登録
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            type="hidden"
            value={id}
            onChange={(e) => setId(parseInt(e.target.value))}
          />

          <BasicTextField
            type="text"
            placeholder="コース名"
            value={course_name}
            onChange={(e) => setCourseName(e.target.value)}
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

export default courseForm;
