import React from "react";
import HeaderImage from "../../assets/images/header.png";
import PageLayout from "../../layout/Layout";
import Search from "../../molecules/Search/Search";
import { Button } from "antd";

import "./style.scss";
const Header = () => {
  return (
    <PageLayout>
      <div className="header">
        <div className="left-side">
          <img src={HeaderImage} alt="" />
          <Search />
        </div>

        <div className="right-side">
          <Button type="primary" danger>
            Predaj oglas
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Header;
