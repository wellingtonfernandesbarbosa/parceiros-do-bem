import { useParams } from "react-router-dom";

import lessons from "@/data/lessons.json";
import { useUpdateUrl } from "@/hooks";
import DetailSection from "@/components/DetailSection";
import ScrollToTop from "@/util/scrollToTop";

const ClassPage = () => {
  const param = Number(useParams().id);
  ScrollToTop(param);

  const lesson = lessons.find((e) => e.id === param);
  if (!lesson) return null;

  const updateUrl = useUpdateUrl;
  updateUrl(lesson?.name);

  return (
    <main>
      <DetailSection detail={lesson} />
    </main>
  );
};

export default ClassPage;
