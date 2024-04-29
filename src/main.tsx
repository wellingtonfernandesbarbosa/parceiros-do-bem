import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header/index.tsx";
import NavBar from "./components/NavBar/index.tsx";
import Footer from "./components/Footer/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <NavBar />
    <Footer />
  </React.StrictMode>
);
