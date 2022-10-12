import { Button } from "antd";
import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

const HeaderRightSide = () => {
  return (
    <div className="right-side">
      <AiFillHeart />
      <span>Omiljeni oglasi</span>
      <FaUser />
      <span>Prijavi se</span>
      <Button type="primary" danger>
        Predaj oglas
      </Button>
    </div>
  );
};

export default HeaderRightSide;
