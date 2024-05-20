import styles from "./Banner.module.scss";

const Banner = ({ children , background }: {children: React.ReactNode, background?: string}) => {
  return (
    <div className={styles.Container} style={background ? { backgroundImage: `url(${background})` } : { backgroundColor: `var(--primary-color)`, backgroundImage: `none`}}>
      <div className={styles.Container__Banner}>
        <h2 className={styles.Container__Banner__Title}>
          { children }
        </h2>
      </div>
    </div>
  );
};

export default Banner;
