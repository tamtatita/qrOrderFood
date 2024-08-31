import React from "react";
import { Footer, Header } from "../components";

const DefaultLayout = ({ children }) => {
  return (
    <div className="p-4">
      <Header />
      <div className="">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
