import styles from "./P.module.css";

const P = ({ text }) => {
  return <p className={styles.p}>{text}</p>;
};

export default P;
