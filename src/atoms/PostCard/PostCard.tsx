import React, { useState } from "react";
import "./style.scss";
import Summary from "./Summary";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import ImagesSlider from "../ImagesSlider/ImagesSlider";
interface Props {
  item: any;
}
const PostCard = ({ item }: Props) => {
  const postedTime = new Date(item?.postedTime);
  const [active, setActive] = useState<number>(0);

  return (
    <div className="post-card">
      <ImagesSlider images={item.imageIds} />
      {/* <img src={item?.imageIds[0]} alt="" /> */}
      <div className="central-part">
        <span className="title">{item?.title}</span>
        <div className="summary">
          <Summary item={item} />
        </div>
      </div>
      <div className="bottom-part">
        {postedTime.toLocaleDateString("ro-RO")}
        <div className="favorite">
          {item.isFavorite ? (
            <BsHeartFill fill=" #F94144" />
          ) : (
            <BsHeart fill=" #F94144" />
          )}
        </div>
      </div>
    </div>
  );
};
export default PostCard;
