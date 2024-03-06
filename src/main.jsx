import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import CVPage from "./pages/CVPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/home",
    element: <App />,
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
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <h1>404 Not Found</h1>,
  },
  {
    path: "/resume",
    element: <CVPage />,
    errorElement: <h1>404 Not Found</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
