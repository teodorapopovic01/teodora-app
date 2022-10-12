import { Pagination } from "antd";
import React, { useState } from "react";
import PostCard from "../../atoms/PostCard/PostCard";
import "./style.scss";
interface Props {
  data: any;
}
const Posts = ({ data }: Props) => {
  const pageSize = 8;
  const [current, setCurrent] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(pageSize);
  function handleChange(page: number) {
    setCurrent(page);
    setTotalPage(data?.length / pageSize);
    setMinIndex((page - 1) * pageSize);
    setMaxIndex(page * pageSize);
  }

  const renderItems = () => {
    return (
      <div className="posts">
        {data?.map(
          (item: any, index: number) =>
            index >= minIndex && index < maxIndex && <PostCard item={item} />
        )}
      </div>
    );
  };
  return (
    <div>
      <span className="posts-heading">Najnoviji modeli</span>
      {renderItems()}{" "}
      <Pagination
        pageSize={pageSize}
        current={current}
        total={data?.length}
        onChange={handleChange}
        style={{ bottom: "0px" }}
      />
    </div>
  );
};
export default Posts;
