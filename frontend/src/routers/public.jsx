import CustomerLayout from "../layouts/CustomerLayout";
import Home from "../customer/pages/Home";
import Category from "../customer/pages/Category";
import Product from "../customer/pages/Product";
import Checkout from "../customer/pages/Checkout";
import About from "../customer/pages/About";
import Lookbook from "../customer/pages/Lookbook";
import Voucher from "../customer/pages/Voucher";
import Campaign from "../customer/pages/Campaign";
import Recruitment from "../customer/pages/Recruitment";

export const publicRouter = [
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
