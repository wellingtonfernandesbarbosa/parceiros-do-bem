import { useParams } from "react-router-dom";

import { useUpdateUrl } from "@/hooks";
import courses from "@/data/courses.json";
import ScrollToTop from "@/util/scrollToTop";
import DetailSection from "@/components/DetailSection";

const CoursePage = () => {
  const param = Number(useParams().id);

  ScrollToTop(param);
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
