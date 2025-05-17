import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Header";
import Banner from "../Banner";

const MainLayout = () => {
  const navigation = useNavigation();
  

  return (
    <div>
      <Header />
      <Banner />
      <div>
        {navigation.state === "loading" ? (
          <div>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default MainLayout;
