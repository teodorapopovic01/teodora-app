import React from "react";
import { Input } from "antd";
import "./style.scss";
const Search = () => {
  return (
    <>
      <Input.Search
        placeholder="Upišite pojam"
        size="middle"
        className="input"
        bordered={false}
      />
    </>
  );
};

export default Search;
