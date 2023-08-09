import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.jsx";
import "./index.css";
import "normalize.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Work from "./routes/Work.jsx";
import About from "./routes/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
