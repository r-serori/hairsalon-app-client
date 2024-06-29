import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { updateCourse, getCourse } from "../../../../store/courses/courseSlice";
import { RootState } from "../../../../redux/store";
import CourseForm from "../../../../components/elements/form/courses/CourseForm";
import BackAgainButton from "../../../../components/elements/button/RouterButton";
import {
  coursesStore,
  courseStatus,
  courseMessage,
  courseError,
} from "../../../../components/Hooks/selector";
import { CourseState } from "../../../../store/courses/courseSlice";
import { userKey } from "../../../../components/Hooks/authSelector";
import { getUserKey } from "../../../../components/Hooks/useMethod";
import { getOwnerId } from "../../../../components/Hooks/getLocalStorage";

const courseEdit: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cStatus: string = useSelector(courseStatus);

  const cMessage: string | null = useSelector(courseMessage);

  const cError: string | null = useSelector(courseError);

  const key: string | null = useSelector(userKey);

  const { id } = router.query; // idを取得
  console.log("idだよ");
  console.log({ id });

  const course = useSelector(coursesStore).find(
    (course: CourseState) => course.id === Number(id)
  );
  console.log("courseです");
  console.log(course);

  const handleUpdate = async (formData: {
    id: number;
    course_name: string;
    price: number;
    owner_id: number;
  }) => {
    try {
      await dispatch(updateCourse(formData) as any);
    } catch (error) {
      console.error(error);
    }
    router.push("/courses");
  };
  return (
    <div className="min-h-full ">
      <BackAgainButton link={"/courses"} />
      {cStatus === "loading" ? (
        <p>Loading...</p>
      ) : (
        <CourseForm node={course} createCourse={handleUpdate} edit={true} />
      )}
    </div>
  );
};

export default courseEdit;
