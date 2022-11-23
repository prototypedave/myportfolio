import React from "react";
import Header from "../components/html-parts/Header";
import Footer from "../components/html-parts/Footer";
import styles from "./Body.module.css";

export const Body = ({children}) => {
  return (
    <div className={styles.container}>
      <Header/>
      <main>{children}</main> 
      <Footer/>
    </div>
  )
}