import styles from "./H1Regular.module.css";

const H1Regular = ({ text }) => {
  return <h1 className={styles.h1}>{text}</h1>;
};

export default H1Regular;
