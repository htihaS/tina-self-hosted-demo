import React, { useRef, useState } from "react";
import styles from "./hero.module.scss";
import ContentWithVideo from "../ContentWithVideo";
import SlideSelector from "../SlideSelector";
import { Carousel } from "antd";
import Link from "next/link";
import Image from "next/image";
import whitearrow from "../../public/images/arrow.png";

const HeroSection = ({ imgSrc, videoSrc, data }: any) => {
  const carouselRef: any = useRef();
  const [currentSlideIndex, setCurrentSlideIndex] = useState<any>(null);

  const selectors = data?.map((item) => item.selector);

  const onClickSelector = (index) => {
    carouselRef.current.goTo(index);
  };
  return (
    <>
      <div className={styles.container}>
        <SlideSelector
          onClickSelector={onClickSelector}
          selectors={selectors}
          className={styles.slide_selector}
          currentSlideIndex={currentSlideIndex}
        />
        <ContentWithVideo imgSrc={imgSrc} videoSrc={videoSrc}>
          <Carousel
            fade
            dots={true}
            ref={carouselRef}
            autoplay={true}
            autoplaySpeed={5000}
            speed={1000}
            draggable
            onInit={() => setCurrentSlideIndex(0)}
            beforeChange={(index, newIndex) => {
              setCurrentSlideIndex(newIndex);
            }}
          >
            {data.map((item, idx) => {
              return (
                <div key={idx} className={styles.content_con}>
                  <h1 className={styles.title}>{item?.title || ""}</h1>
                  <div className={`${styles.desc} lf-bd-lg`}>
                    {item?.description || ""}
                  </div>
                  {/* <Link href={item?.btn?.btn_url}> */}
                  <div className="button">
                    <div className="btn_title lf-btn">{item?.btn?.btn_txt}</div>
                    <Image
                      src={whitearrow}
                      priority={true}
                      alt="white arrow"
                      width={14}
                      height={14}
                    />
                  </div>
                  {/* </Link> */}
                </div>
              );
            })}
          </Carousel>
        </ContentWithVideo>
      </div>
      <style jsx>{`
        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #ff7800;
          border-radius: 12px;
          width: 212px;
          height: 70px;
          font-weight: 500;
          font-size: 20px;
        }

        .button:hover {
          background: #ff8c25;
        }

        .button:focus {
          background: #ff7800;
        }

        .btn_title {
          color: #f5f5f5;
          margin-right: 1rem;
        }

        @media screen and (max-width: 768px) {
          .button {
            margin: auto;
          }
        }

        @media screen and (max-width: 500px) {
          .button {
            width: 192px;
            height: 60px;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
