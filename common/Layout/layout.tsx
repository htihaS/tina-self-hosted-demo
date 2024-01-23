import React from "react";
import styles from "./layout.module.scss";
import Header from "../../components/Header/Header";

interface IProps {
  children: any;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children} </main>
    </div>
  );
};

export default Layout;
