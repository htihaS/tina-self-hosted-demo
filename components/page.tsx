"use client";

import { PageQuery } from "../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import Layout from "../common/Layout/layout";
import HeroSection from "./HeroSection/Hero";
import LFI_Homepage_1 from "../public/images/LFI_Homepage_1.png";
import Slider from "./Slider";

export function Page(props: {
  data: PageQuery;
  variables: object;
  query: string;
}) {
  const { data } = useTina(props);
  // console.log("first page", data);

  const heroSectionData = [
    {
      title: "Banking",
      description:
        "Re-constructing the present banking scenario into a future-ready, automated workspace that minimizes redundancy of work.",
      selector: "Banking",
      btn: {
        btn_txt: "Explore more",
        btn_url: "",
      },
    },
    {
      title: "Fintech",
      description: "Reconstructing data tracking & management",
      selector: "Fintech",
      btn: {
        btn_txt: "Explore more",
        btn_url: "",
      },
    },
    {
      title: "FMCG",
      description: "Simplifying workload with better insights",
      selector: "FMCG",
      btn: {
        btn_txt: "Explore more",
        btn_url: "",
      },
    },
    {
      title: "Insurance",
      description: "Reconstructing data tracking & management",
      selector: "Insurance",
      btn: {
        btn_txt: "Explore more",
        btn_url: "",
      },
    },
  ];

  const slider_section = [
    {
      image: {
        image: "images/slider_img1.png",
        alt: "cocacola",
      },
    },
    {
      image: {
        image: "images/slider_img2.png",
        alt: "adaptIT",
      },
    },
    {
      image: {
        image: "images/slider_img3.png",
        alt: "absa",
      },
    },
    {
      image: {
        image: "images/slider_img4.png",
        alt: "telkom",
      },
    },
    {
      image: {
        image: "images/slider_img5.png",
        alt: "datacentrix",
      },
    },
    {
      image: {
        image: "images/slider_img6.png",
        alt: "aspen",
      },
    },
  ];

  return (
    <main className="flex flex-col min-h-screen bg-white">
      <div>
        <Layout>
          <HeroSection
            imgSrc={LFI_Homepage_1}
            videoSrc={"/videos/heroVideo.mp4"}
            data={heroSectionData}
          />
          <Slider sliderData={slider_section} />
        </Layout>
      </div>
    </main>
  );
}
