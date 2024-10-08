import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import Product from "../Pages/Product/Product";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import CartDashboard from "../Pages/CartDashboard/CartDashboard";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/dashboard",
        element: <CartDashboard />,
      },
      {
        path: "/product",
        element: (
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Router;
