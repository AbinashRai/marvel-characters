// import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import Pagination from "./components/Pagination";

function App() {
  return (
    <>
      <Navbar />
      <MainSection />
      <Pagination />
      <Footer />
    </>
  );
}

export default App;
