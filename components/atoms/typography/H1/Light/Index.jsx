import styles from "./H1Light.module.css";

const H1Light = ({ text }) => {
  return <h1 className={styles.h1}>{text}</h1>;
};

export default H1Light;
