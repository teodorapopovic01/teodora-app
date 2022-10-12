import "./style.scss";
import { HiOutlineChevronLeft } from "react-icons/hi";

interface Props {
  width: number;
}
const Heading = ({ width }: Props) => {
  return (
    <div className="heading">
      <div className="go-back">
        <HiOutlineChevronLeft stroke="#000000" />
        {width > 500 && <span>Natrag</span>}
      </div>
      <div>
        <span>Početna</span>
        <span className="space-dot"></span>
        <span className="posts-title">Nekretnine</span>
      </div>
    </div>
  );
};

export default Heading;
