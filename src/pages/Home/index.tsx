import Banner from "@/components/Banner";
import BecomeAPartner from "@/components/BecomeAPartner";
import CallToAction from "@/components/CallToAction";
import HomeBanner from "@/assets/homeBanner.webp";

const Home = () => {
  return (
    <>
      <Banner background={HomeBanner}>
        Transformando Vidas Através do <br />
        <span>Desenvolvimento Humano</span>
      </Banner>
      <CallToAction />
      <BecomeAPartner />
    </>
  );
};

export default Home;
