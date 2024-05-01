import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.Container__Banner}>
        <h2 className={styles.Container__Banner__Title}>
          Transformando Vidas Através do <br /><span className={styles.Container__Banner__Title__Span}>Desenvolvimento Humano</span>
        </h2>
      </div>
    </div>
  );
};

export default Banner;
