import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCourse, getCourse } from "../../../store/courses/courseSlice";
import { RootState } from "../../../redux/store";
import CourseForm from "../../../components/elements/form/courses/CourseForm";
import { useRouter } from "next/router";
import BackAgainButton from "../../../components/elements/button/BackAgainButton";

const courseCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.course.loading);

  const handleCreate = async (formData: {
    id: number;
    course_name: string;
    price: number;
    created_at: string;
    updated_at: string;
  }) => {
    try {
      await dispatch(createCourse(formData) as any);
    } catch (error) {
      console.error(error);
    } finally {
      console.log("コース作成！！");
      router.push("/courses");
    }
  };

  return (
    <div className="min-h-full">
      <BackAgainButton link={"/courses"} />
      {loading ? <p>Loading...</p> : <CourseForm createCourse={handleCreate} />}
    </div>
  );
};

export default courseCreate;
