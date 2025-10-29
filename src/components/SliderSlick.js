import React from "react";
import Slider from "react-slick";
import styles from "./SliderSlick.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Flèches personnalisées
const ArrowLeft = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.left}`} onClick={onClick}>
    <span className={styles.arrowIcon}>‹</span>
  </div>
);

const ArrowRight = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.right}`} onClick={onClick}>
    <span className={styles.arrowIcon}>›</span>
  </div>
);

const SliderSlick = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1224,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 509,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className={styles.slide}>
            <img src={src} alt={`Slide ${index}`} className={styles.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderSlick;
