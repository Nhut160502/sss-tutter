import CustomerLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Checkout from "../pages/Checkout";
import About from "../pages/About";
import Lookbook from "../pages/Lookbook";
import Voucher from "../pages/Voucher";
import Campaign from "../pages/Campaign";
import Recruitment from "../pages/Recruitment";

export const routes = [
  {
    path: "/",
    element: Home,
    layout: CustomerLayout,
  },
  {
    path: "/p/:slugProduct",
    element: Product,
    layout: CustomerLayout,
  },
  {
    path: "/c/for-him",
    element: Category,
    layout: CustomerLayout,
  },
  {
    path: "/checkout",
    element: Checkout,
    layout: CustomerLayout,
  },
  {
    path: "/about",
    element: About,
    layout: CustomerLayout,
  },
  {
    path: "/lookbook",
    element: Lookbook,
    layout: CustomerLayout,
  },
  {
    path: "/voucher",
    element: Voucher,
    layout: CustomerLayout,
  },
  {
    path: "/campaign",
    element: Campaign,
    layout: CustomerLayout,
  },
  {
    path: "/tuyen-dung",
    element: Recruitment,
    layout: CustomerLayout,
  },
];
