//import { useState } from "react";

//import "./App.css";

import Header from "./template/Header";
import Footer from "./template/Footer";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/home",
    element: <HomePage />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/gallery",
    element: <GalleryPage />,
    errorElement: <h1>404 Not Found</h1>,
  },
]);

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
