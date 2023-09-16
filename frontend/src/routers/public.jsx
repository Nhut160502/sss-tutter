import DefaultLayout from "../customer/layouts/DefaultLayout";
import Home from "../customer/pages/Home";
import Product from "../customer/pages/Product";

export const publicRouter = [
  {
    path: "/",
    element: Home,
    layout: DefaultLayout,
  },
  {
    path: "/c/for-him",
    element: Product,
    layout: DefaultLayout,
  },
];
