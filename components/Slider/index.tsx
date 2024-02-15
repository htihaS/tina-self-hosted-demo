import React from "react";
import styles from "./slider.module.scss";
import { useRef } from "react";
import { Image, Carousel } from "antd";

interface ISliderProps {
  sliderData: { image: { image: string; alt: string } }[];
}

const Slider = (props: ISliderProps) => {
  const { sliderData } = props;
  const sliderRef: any = useRef();

  return (
    <div className={styles.container}>
      <Carousel
        ref={sliderRef}
        // pauseOnDotsHover={true}
        // style={{ width: '1040px' }}
        className={styles.carousel_root}
        autoplay={true}
        speed={4000}
        autoplaySpeed={4000}
        centerMode={true}
        centerPadding="80px"
        swipeToSlide={true}
        draggable
        slidesToShow={5}
        infinite={true}
        dots={false}
        responsive={[
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
            },
          },
        ]}
      >
        {sliderData.map((data, ind) => (
          <div key={ind} className={styles.image_container}>
            <Image
              preview={false}
              className={styles.image}
              src={data?.image?.image}
              alt={data?.image?.alt}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
