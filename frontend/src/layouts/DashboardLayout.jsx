import React from "react";
import Slibar from "../dashboard/components/Slibar";
import Header from "../dashboard/components/Header";
import Footer from "../dashboard/components/Footer";

import "../dashboard/scss/style.scss";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <Slibar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <Header />
        <div className="body flex-grow-1 px-3">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;
