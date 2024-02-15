import React from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { Col, Row } from "antd";

const Header = () => {
  const links = [
    { label: "Services", nav_link: "Engineering" },
    { label: "Industries" },
    { label: "Company" },
    {
      label: "Careers",
    },
  ];

  return (
    <div className={`${styles.container}`}>
      <Link href={"/"}>
        <div className={styles.img_con}>
          <Image
            src={"/images/linkfields_logo_1.png"}
            alt="logo"
            objectFit="cover"
            layout="fill"
          />
        </div>
      </Link>
      <div className={styles.links}>
        {links.map((link, idx) => {
          return (
            <div key={idx}>
              <Row align="middle" justify="space-between">
                <Col>
                  <div className={`lf-btn title px-5 text-xl font-semibold`}>
                    {link.label}
                  </div>
                </Col>
                <svg
                  width="11"
                  height="7"
                  viewBox="0 0 11 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L5.5 5L10 1"
                    stroke="#F0F0F0"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>
              </Row>
            </div>
          );
        })}
      </div>
      <div className="contactus_btn">
        <span className="lf-btn">{"Contact us"}</span>
      </div>
      <style jsx>{`
        .link {
          display: flex;
          align-items: center;
          margin-right: 3rem;
          padding: 3rem 1rem;
          cursor: pointer;
        }

        .link .title {
          margin-right: 0.5rem;
          cursor: pointer;
        }

        .open {
          border-bottom: 2px solid #ff7800;
        }

        .open svg {
          margin-bottom: 3px;
        }

        .contactus_btn {
          cursor: pointer;
          width: 134px;
          height: 50px;
          background: transparent;
          display: flex;
          align-items: center;
          border: 1px solid rgba(240, 240, 240, 0.8);
          backdrop-filter: blur(10px);
          border-radius: 10px;
          justify-content: center;
        }

        .contactus_btn:hover {
          border: 1px solid #e6eced;
        }

        .contactus_dark_btn {
          cursor: pointer;
          width: 134px;
          height: 50px;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
          border-radius: 10px;
          color: #272727;
          border: 1px solid rgba(39, 39, 39, 0.8);
        }

        @media screen and (max-width: 1000px) {
          .contactus_btn {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
