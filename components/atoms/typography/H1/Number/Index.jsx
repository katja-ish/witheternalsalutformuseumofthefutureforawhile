import styles from "./H1Number.module.css";

const H1Number = ({ text }) => {
  return <h1 className={styles.h1}>{text}</h1>;
};

export default H1Number;
