import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../../store/courses/courseSlice";
import { RootState } from "../../../redux/store";
import CourseForm from "../../../components/elements/form/courses/CourseForm";
import { useRouter } from "next/router";
import RouterButton from "../../../components/elements/button/RouterButton";
import { courseError, courseStatus } from "../../../components/Hooks/selector";
import { getUserKey } from "../../../components/Hooks/useMethod";
import BasicAlerts from "../../../components/elements/alert/Alert";

const courseCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cStatus: string = useSelector(courseStatus);
  const cError: string = useSelector(courseError);

  const handleCreate = async (formData: {
    id: number;
    course_name: string;
    price: number;
  }) => {
    try {
      const response = await dispatch(createCourse(formData) as any);

      if (response.meta.requestStatus === "fulfilled") {
        console.log("Success", response);
        router.push("/courses");
      } else {
        throw new Error("e");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-full">
      <BasicAlerts type="error" message={cError} space={1} padding={1} />
      <div className="mx-4 mt-4">
        <RouterButton link="/courses" value="コース画面へ戻る" />
      </div>
      {cStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <CourseForm createCourse={handleCreate} />
      )}
    </div>
  );
};

export default courseCreate;
