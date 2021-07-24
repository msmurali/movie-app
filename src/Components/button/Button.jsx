import React from "react";
import styles from "./buttonStyles.module.css";

const Button = ({children}) => {
  return <button className={styles.btn}>{children}</button>;
};


export default Button