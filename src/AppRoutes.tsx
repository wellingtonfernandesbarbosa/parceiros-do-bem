import { RecoilRoot } from "recoil";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultPage from "./pages/DefaultPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Events from "./pages/Events";
import Team from "./pages/Team";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function AppRoutes() {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <BrowserRouter>
      <RecoilRoot>
        <Header />
        {screenWidth > 600 && <NavBar />}
        <Routes>
          <Route path="/" element={<DefaultPage />}>
            <Route index element={<Home />} />
            <Route path="sobre" element={<About />} />
            <Route path="cursos" element={<Courses />} />
            <Route path="eventos" element={<Events />} />
            <Route path="equipe" element={<Team />} />
            <Route path="noticias" element={<News />} />
            <Route path="contato" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
        <Footer />
      </RecoilRoot>
    </BrowserRouter>
  );
}
