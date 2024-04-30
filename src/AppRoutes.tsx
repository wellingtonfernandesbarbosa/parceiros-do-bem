import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import DefaultPage from "./pages/DefaultPage";
import Home from "./pages/Home";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
