import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateCourse, getCourse } from "../../../../store/courses/courseSlice";
import { RootState } from "../../../../redux/store";
import CourseForm from "../../../../components/elements/form/courses/CourseForm";
import BackAgainButton from "../../../../components/elements/button/RouterButton";
import { useState } from "react";

const courseEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const loading = useSelector((state: RootState) => state.course.status);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const course = useSelector((state: RootState) =>
    state.course.course.find((course) => course.id === parseInt(id as string))
  );

  console.log("courseだよ");
  console.log(course);

  const handleUpdate = async (formData: {
    id: number;
    course_name: string;
    price: number;
    owner_id: number;
  }) => {
    try {
      try {
        await dispatch(updateCourse(formData) as any);
      } catch (error) {
        console.error(error);
      }
      await dispatch(getCourse as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/courses"); // Redirect to the course list page after updating a course
  };
  return (
    <div className="min-h-full ">
      <BackAgainButton link={"/courses"} />
      {loading === "loading" ? (
        <p>Loading...</p>
      ) : (
        <CourseForm node={course} createCourse={handleUpdate} edit={true} />
      )}
    </div>
  );
};

export default courseEdit;
