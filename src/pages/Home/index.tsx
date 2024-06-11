import styles from "./Home.module.scss";

import Banner from "@/components/Banner";
import OurGalery from "@/components/OurGalery";
import HomeBanner from "@/assets/homeBanner.webp";
import CallToAction from "@/components/CallToAction";
import BecomeAPartner from "@/components/BecomeAPartner";

const Home = () => {
  return (
    <div className={styles.container}>
      <Banner background={HomeBanner} backgroundStylish={true}>
        Transformando Vidas Através do <br />
        <span>Desenvolvimento Humano</span>
      </Banner>

      <div className={styles.container__content}>
        <CallToAction />
        <BecomeAPartner />
        <OurGalery />
      </div>
    </div>
  );
};

export default Home;
