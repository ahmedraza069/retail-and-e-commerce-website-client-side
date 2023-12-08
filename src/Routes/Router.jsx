import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root.jsx";
import Register from "../Pages/Register/Register.jsx";
import Login from "../Pages/LogIn/Login.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
import AddProducts from "../Pages/AddProducts/AddProducts.jsx";
import Home from "../Pages/Home/Home.jsx";

import BrandCardDetails from "../Components/BrandCardDetails/BrandCardDetails.jsx";

import ProductCardDetails from "../Components/ProductCardDetails/ProductCardDetails.jsx";
import MyCart from "../Pages/MyCart/MyCart.jsx";

import PrivateRoute from "./PrivateRoute.jsx";
import UpdateProducts from "../Components/UpdateProduct/UpdateProducts.jsx";
import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(
            " https://retail-and-e-commerce-website-server-side-91xof4vnp.vercel.app/categorybrands"
          ),
      },
      {
        path: "/brand/:brandName",
        element: <BrandCardDetails></BrandCardDetails>,
        loader: () =>
          fetch(
            " https://retail-and-e-commerce-website-server-side-91xof4vnp.vercel.app/products"
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <ProductCardDetails></ProductCardDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            ` https://retail-and-e-commerce-website-server-side-91xof4vnp.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateProducts></UpdateProducts>
          </PrivateRoute>
        ),

        loader: ({ params }) =>
          fetch(
            ` https://retail-and-e-commerce-website-server-side-91xof4vnp.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/carts",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            " https://retail-and-e-commerce-website-server-side-91xof4vnp.vercel.app/carts"
          ),
      },
      {
        path: "/addproducts",
        element: (
          <PrivateRoute>
            <AddProducts></AddProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
