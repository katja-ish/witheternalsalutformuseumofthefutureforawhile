import styles from "./H2RegularLight.module.css";

const H2Light = ({ text }) => {
  return <h2 className={styles.h2}>{text}</h2>;
};

export default H2Light;
