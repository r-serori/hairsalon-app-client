import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateCourse, getCourse } from "../../../../store/courses/courseSlice";
import CourseForm from "../../../../components/elements/form/courses/CourseForm";
import {
  courseError,
  coursesStore,
  courseStatus,
} from "../../../../components/Hooks/selector";
import { CourseState } from "../../../../store/courses/courseSlice";
import RouterButton from "../../../../components/elements/button/RouterButton";
import BasicAlerts from "../../../../components/elements/alert/Alert";

const courseEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cStatus: string = useSelector(courseStatus);
  const cError: string = useSelector(courseError);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const course: CourseState = useSelector(coursesStore).find(
    (course: CourseState) => course.id === Number(id)
  );
  console.log("courseです");
  console.log(course);

  const handleUpdate = async (formData: {
    id: number;
    course_name: string;
    price: number;
  }) => {
    try {
      const response = await dispatch(updateCourse(formData) as any);
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
    <div className="min-h-full ">
      {cError && (
        <BasicAlerts type="error" message={cError} space={1} padding={1} />
      )}
      <div className="mx-4 my-4">
        <RouterButton link={"/courses"} value="コース画面に戻る" />
      </div>
      {cStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <CourseForm node={course} createCourse={handleUpdate} edit={true} />
      )}
    </div>
  );
};

export default courseEdit;
