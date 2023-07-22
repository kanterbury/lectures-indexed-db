import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LecturePage } from "./LecturePage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/:id", element: <LecturePage /> },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
