import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "../../../store/courses/courseSlice";
import { RootState } from "../../../redux/store";
import CourseForm from "../../../components/elements/form/courses/CourseForm";
import { useRouter } from "next/router";
import RouterButton from "../../../components/elements/button/RouterButton";
import { courseStatus } from "../../../components/Hooks/selector";
import { getUserKey } from "../../../components/Hooks/useMethod";
import { getOwnerId } from "../../../components/Hooks/getLocalStorage";

const courseCreate: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const cStatus = useSelector(courseStatus);

  const handleCreate = async (formData: {
    id: number;
    course_name: string;
    price: number;
    owner_id: number;
  }) => {
    try {
      const userKey: string | null = await getUserKey(dispatch);
      const ownerId = await getOwnerId(userKey);

      formData.owner_id = ownerId;

      await dispatch(createCourse(formData) as any);
    } catch (error) {
      console.error(error);
    } finally {
      router.push("/courses");
    }
  };

  return (
    <div className="min-h-full">
      <div className="ml-4 mt-4 ">
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
