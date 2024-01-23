import React from "react";
import NextImage from "next/legacy/image";
import styles from "./index.module.scss";

interface IContentWithVideoProps {
  children: any;
  className?: any;
  imgSrc?: any;
  videoSrc?: any;
}

const ContentWithVideo = ({
  children,
  className,
  imgSrc,
  videoSrc,
}: IContentWithVideoProps) => {
  console.log("image", imgSrc, videoSrc);
  return (
    <div
      className={`${styles.root_container} ${
        className ? className : "min-h-[100vh]"
      }`}
    >
      <div className={`${styles.video_container}`}>
        <video autoPlay loop muted>
          <source className="h-50" src={videoSrc} type="video/mp4" />
        </video>
        <NextImage priority={true} src={imgSrc} alt="bg_lg" layout="fill" />
      </div>
      <div className={styles.content_container}>{children}</div>
    </div>
  );
};

export default ContentWithVideo;
