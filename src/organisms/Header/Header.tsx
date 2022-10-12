import React from "react";
import HeaderImage from "../../assets/images/header.png";
import PageLayout from "../../layout/Layout";
import Search from "../../molecules/Search/Search";
import HeaderRightSide from "./HeaderRightSide";
import "./style.scss";
const Header = () => {
  return (
    <div className="header">
      <div className="content">
        <div className="left-side">
          <img src={HeaderImage} alt="" />
          <Search />
        </div>
        <HeaderRightSide />
      </div>
    </div>
  );
};

export default Header;
