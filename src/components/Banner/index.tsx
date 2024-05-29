import styles from "./Banner.module.scss";

interface BannerProps {
  children: React.ReactNode;
  background?: string;
  backgroundStylish?: boolean;
}

const Banner = ({ children, background, backgroundStylish=false }: BannerProps) => {
  return (
    <div className={styles.Container} style={background ? { backgroundImage: `url(${background})` } : { backgroundColor: `var(--primary-color)`, backgroundImage: `none` }}>
      <div style={backgroundStylish ? { backdropFilter: "blur(2px)", backgroundColor: "rgba(255, 255, 255, 0.4)" } : {}}>
        <div className={styles.Container__Banner}>
          <h2 className={styles.Container__Banner__Title}>{children}</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;
