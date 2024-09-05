import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

export default Router;
