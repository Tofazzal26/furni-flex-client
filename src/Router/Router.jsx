import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import SignUp from "../Pages/SignUp/SignUp";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default Router;
