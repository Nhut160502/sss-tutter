import DefaultLayout from "../customer/layouts/DefaultLayout";
import Home from "../customer/pages/Home";
import Category from "../customer/pages/Category";
import Product from "../customer/pages/Product";
import Checkout from "../customer/pages/Checkout";
import About from "../customer/pages/About";
import Lookbook from "../customer/pages/Lookbook";
import Voucher from "../customer/pages/Voucher";

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
  {
    path: "/about",
    element: About,
    layout: DefaultLayout,
  },
  {
    path: "/lookbook",
    element: Lookbook,
    layout: DefaultLayout,
  },
  {
    path: "/voucher",
    element: Voucher,
    layout: DefaultLayout,
  },
];
