import React from "react";
import HeaderImage from "../../assets/images/header.png";
import "./style.scss";
import DropdownImage from "../../assets/images/dropdown.png";
import Search from "../../assets/images/search.png";
const HeaderMobile = () => {
  return (
    <div className="header-mobile">
      <img src={DropdownImage} alt="" />

      <img src={HeaderImage} alt="" />
      <img src={Search} alt="" />
    </div>
  );
};

export default HeaderMobile;
