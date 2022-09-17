import { Route, Routes as BaseRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<Home />} />
      <Route path="currency">
        {/* <Route index element={<Products />} /> */}
        <Route path=":productId" element={<Product />} />
      </Route>
    </BaseRoutes>
  );
}
