import Banner from "@/components/Banner";
import BecomeAPartner from "@/components/BecomeAPartner";
import CallToAction from "@/components/CallToAction";
import HomeBanner from "@/assets/homeBanner.webp";
import OurGalery from "@/components/OurGalery";
import styles from "./Home.module.scss";
const Home = () => {
  return (
    <div className={styles.container}>
      <Banner background={HomeBanner}>
        Transformando Vidas Através do <br />
        <span>Desenvolvimento Humano</span>
      </Banner>
      <CallToAction />
      <BecomeAPartner />
      <OurGalery />
    </div>
  );
};

export default Home;
