import { useParams } from "react-router-dom";

import courses from "@/data/courses.json";
import { useUpdateUrl } from "@/hooks";
import DetailSection from "@/components/DetailSection";

const CoursePage = () => {
  const param = Number(useParams().id);

  const course = courses.find((e) => e.id === param);
  if (!course) return null;

  const updateUrl = useUpdateUrl;
  updateUrl(course?.name);

  return (
    <main>
      <DetailSection detail={course} />
    </main>
  );
};

export default CoursePage;
