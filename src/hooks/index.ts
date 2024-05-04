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
