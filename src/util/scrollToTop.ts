import { useEffect } from "react";

const ScrollToTop = (param: number) => {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [param])
}

export default ScrollToTop;