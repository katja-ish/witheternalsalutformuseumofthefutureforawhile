import styles from "./H2Regular.module.css";

const H2Regular = ({ text }) => {
  return <h2 className={styles.h2}>{text}</h2>;
};

export default H2Regular;
