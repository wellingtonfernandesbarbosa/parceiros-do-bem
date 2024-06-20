import { useParams } from "react-router-dom";

import { useUpdateUrl } from "@/hooks";
import services from "@/data/services.json";
import ScrollToTop from "@/util/scrollToTop";
import DetailSection from "@/components/DetailSection";

const ServicePage = () => {
  const param = Number(useParams().id);
  ScrollToTop(param);

  const service = services.find((e) => e.id === param);
  if (!service) return null;

  const updateUrl = useUpdateUrl;
  updateUrl(service?.name);

  return <main>
    <DetailSection detail={service} />
  </main>;
};

export default ServicePage;
