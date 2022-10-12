import React from "react";
import Logo from "../../assets/images/header.png";
import Copyright from "../../assets/images/copyright.png";
import "./style.scss";
import CenterPart from "./CenterPart";
import RightSide from "./RightSide";
const Footer = () => {
  return (
    <div className="footer">
      <div className="content">
        <div className="left-side">
          <img src={Logo} alt="Index.hr logo" />
          <img src={Copyright} alt="Index.hr logo" />
        </div>
        <CenterPart />
        <RightSide />
      </div>
    </div>
  );
};

export default Footer;
