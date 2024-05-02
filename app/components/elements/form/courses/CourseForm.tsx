import React, { useState } from "react";
import PrimaryButton from "../../button/PrimaryButton";
import { CourseState } from "../../../../store/courses/courseSlice";
import BasicTextField from "../../input/BasicTextField";

interface CourseFormProps {
  node?: CourseState;
  createCourse: (formData: CourseState) => void;
}

const CourseForm: React.FC<CourseFormProps> = ({ node, createCourse }) => {
  const [course_name, setCourse_name] = useState(node ? node.course_name : "");
  const [price, setPrice] = useState(node ? node.price : 0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createCourse({
      id: node ? node.id : 0,
      course_name: course_name,
      price: price,
      created_at: "",
      updated_at: "",
    });
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 pt-12 py-56 px-4 sm:px-6 lg:px-8 min-h-full ">
      <div className="max-w-md w-full space-y-8 min-h-full ">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            コース登録
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6 ">
          <BasicTextField
            type="text"
            placeholder="コース名"
            value={course_name}
            onChange={(e) => setCourse_name(e.target.value)}
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

export default CourseForm;
