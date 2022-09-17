import Currency from "../pages/Currency";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Products from "../pages/Products";

const mainRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "products",
    children: [
      {
        index: true,
        element: <Currency />,
      },
      // {
      //   path: ":productId",
      //   element: <Product />,
      // },
    ],
  },
];

export default mainRoutes;
