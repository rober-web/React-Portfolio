//import { useState } from "react";
import React from "react";
import "./assets/css/style.css";
import Header from "./template/Header";
import HomePage from "./pages/HomePage";
import Footer from "./template/Footer";

const App = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Footer />
    </>
  );
};

export default App;
