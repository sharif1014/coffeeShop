import React, { useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styles from "../../styles/Slider.module.css";
const Slider = () => {
  const [index, setIndex] = useState(0);
  const sliderImgs = [
    "/images/slider1.jpg",
    "/images/slider2.jpg",
    "/images/slider3.jpg",
  ];
  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.iconContainer}
        style={{ left: "1rem" }}
        onClick={() => handleArrow("l")}
      >
        <MdArrowBackIos />
      </div>
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {sliderImgs.map((img, i) => {
          return (
            <div className={styles.imgContainer} key={i}>
              <img src={img} alt="" />
            </div>
          );
        })}
      </div>
      <div
        className={styles.iconContainer}
        style={{ right: "1rem" }}
        onClick={() => handleArrow("r")}
      >
        <MdArrowForwardIos />
      </div>
    </div>
  );
};

export default Slider;
