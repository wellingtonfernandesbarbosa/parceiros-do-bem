import { useRecoilState } from "recoil"
import { recoilParceirosDoBem, recoilRoutes } from "../atoms";

export const useRoutes = () => {
  const routes = useRecoilState(recoilRoutes);
  return routes;
}

export const useParceiroDoBem = () => {
  const parceiroDoBem = useRecoilState(recoilParceirosDoBem);
  return parceiroDoBem;
}

export const useUpdateUrl = (title: string) => {
  const url = new URL(window.location.href);
  url.searchParams.set("", title.replace(/ /g, "_").replace('ç', 'c').replace('ã', 'a').replace('é', 'e').replace('ê', 'e').replace('á', 'a').toLowerCase());
  window.history.replaceState({}, "", url.href);
};
