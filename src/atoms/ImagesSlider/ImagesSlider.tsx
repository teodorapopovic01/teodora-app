import { useState } from "react";
import React from "react";
import styles from "./style.module.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import NoImage from "../../assets/images/no-thumbnail.png";

interface Props {
  images: any;
}
const ImagesSlider: React.FC<Props> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const onNext = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();

    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
    if (currentImage === images.length - 1) setCurrentImage(0);
  };
  const onPrevious = (event: any) => {
    event.stopPropagation();
    if (currentImage > 0) setCurrentImage(currentImage - 1);
    if (currentImage === 0) setCurrentImage(images.length - 1);
  };

  const setThumbnail = (i: any, event: any) => {
    event.stopPropagation();
    setCurrentImage(i);
  };
  function generateDotHolders() {
    let dotHolders = [];
    for (let i = 0; i < images.length; i++) {
      dotHolders.push(
        <button
          key={i}
          className={`${
            currentImage !== i
              ? styles["pagination-item"]
              : `${styles["pagination-item"]} ${styles["pagination-item-active"]}`
          }`}
          onClick={(e) => setThumbnail(i, e)}
        />
      );
    }
    return dotHolders;
  }
  return (
    <div className={`${styles.slider}`}>
      {images.length > 1 && (
        <div className={`${styles.previous}`} onClick={onPrevious}>
          <FaAngleLeft fill="#f94144" />
        </div>
      )}
      {images.length >= 1 ? (
        images.map((thumb: string) => (
          <div
            key={thumb}
            className={`${styles.img}`}
            style={{ transform: `translateX(-${currentImage * 350}px)` }}
          >
            <img
              src={thumb}
              alt="Item thumbnail"
              width={350}
              onLoad={() => setLoaded(true)}
            />
          </div>
        ))
      ) : (
        <div
          className={`${styles.img}`}
          style={{ transform: `translateX(-${currentImage * 250}px)` }}
        >
          <img src={NoImage} alt="Item thumbnail" width={350} />
        </div>
      )}
      {images.length > 1 && (
        <div className={`${styles["next"]}`} onClick={onNext}>
          <FaAngleRight fill="#f94144" />
        </div>
      )}
      {images.length > 1 ? (
        <div
          className={`${styles["dots-wrapper"]} `}
          onClick={(e) => e.stopPropagation()}
        >
          {" "}
          {generateDotHolders()}
        </div>
      ) : null}
    </div>
  );
};

export default ImagesSlider;
