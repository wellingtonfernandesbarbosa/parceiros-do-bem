import { RecoilRoot } from "recoil";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Team from "@/pages/TeamPage";
import News from "@/pages/NewsPage";
import About from "@/pages/AboutPage";
import Events from "@/pages/EventsPage";
import Courses from "@/pages/CoursesPage";
import Contact from "@/pages/ContactPage";
import NotFound from "@/pages/NotFoundPage";
import DefaultPage from "@/pages/DefaultPage";

import Galery from "@/pages/GaleryPage";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import CoursePage from "@/pages/CoursePage";
import ClassesPage from "@/pages/ClassesPage";
import ClassPage from "./pages/ClassPage";

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
            <Route path="cursos/:id" element={<CoursePage />} />
            <Route path="aulas" element={<ClassesPage />} />
            <Route path="aulas/:id" element={<ClassPage />} />
            <Route path="eventos" element={<Events />} />
            <Route path="galeria" element={<Galery />} />
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
