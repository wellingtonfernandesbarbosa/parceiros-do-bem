import { useRecoilState, useRecoilValue } from "recoil"
import { recoilActiveMenu, recoilParceirosDoBem, recoilRoutes } from "../atoms";

export const useRoutes = () => {
  const routes = useRecoilState(recoilRoutes);
  return routes;
}

export const useParceiroDoBem = () => {
  const parceiroDoBem = useRecoilState(recoilParceirosDoBem);
  return parceiroDoBem;
}

export const useActiveMenu = () => {
  const activeMenu = useRecoilValue(recoilActiveMenu);
  return activeMenu;
}

export const useActiveMenuState = () => {
  return useRecoilState(recoilActiveMenu);
}