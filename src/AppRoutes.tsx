import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DefaultPage from "./pages/DefaultPage";
import Home from "./pages/Home";
import { RecoilRoot } from "recoil";
import { useEffect, useState } from "react";

export default function AppRoutes() {
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <RecoilRoot>
        <Header />
        {screenWidth > 600 && <NavBar />}
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
        <Footer />
      </RecoilRoot>
    </BrowserRouter>
  );
}
