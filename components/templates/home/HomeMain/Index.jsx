import P from "../../../atoms/typography/P/Index";
import styles from "./HomeMain.module.css";

const HomeMain = () => {
  return (
    <div className={styles.container}>
      <div className={styles.paragraphWrapper}>
        <P
          text={
            "This key is a part of the story. You have just one. Find people with other keys to unveil the story behind them."
          }
        />
      </div>
      <div className={styles.paragraphWrapper}>
        <P text={"Hint to find the holder of the previous key:"} />
        <P text={"D#(217, 33, 208)(dot)com"} />
      </div>
    </div>
  );
};

export default HomeMain;
