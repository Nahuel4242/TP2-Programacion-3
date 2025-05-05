import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { MainHome } from "../components/MainHome";
import { Footer } from "../components/Footer";
import { LengProgramacion } from "../data/constants";
import { AboutUs } from "../components/AboutUs";

export const Home = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainHome datos={LengProgramacion} />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
