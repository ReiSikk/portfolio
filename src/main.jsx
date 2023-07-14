import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Routes/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './Pages/HomePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
  
      {
        path: "/home",
        element: <HomePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
