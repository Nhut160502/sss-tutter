import Home from "../dashboard/pages/Home";
import DashboardLayout from "../layouts/DashboardLayout";

export const privateRouter = [
  {
    path: "/dashboard",
    element: Home,
    layout: DashboardLayout,
  },
];
