import DefaultLayout from "../customer/layouts/DefaultLayout";
import Home from "../customer/pages/Home";
import Category from "../customer/pages/Category";
import Product from "../customer/pages/Product";
import Checkout from "../customer/pages/Checkout";

export const publicRouter = [
  {
    path: "/",
    element: Home,
    layout: DefaultLayout,
  },
  {
    path: "/p/:slugProduct",
    element: Product,
    layout: DefaultLayout,
  },
  {
    path: "/c/for-him",
    element: Category,
    layout: DefaultLayout,
  },
  {
    path: "/checkout",
    element: Checkout,
    layout: DefaultLayout,
  },
];
