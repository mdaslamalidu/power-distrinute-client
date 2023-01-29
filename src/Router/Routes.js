import { createBrowserRouter } from "react-router-dom";
import Details from "../Components/Details";
import ErrorPage from "../Components/ErrorPage";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Details></Details>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
