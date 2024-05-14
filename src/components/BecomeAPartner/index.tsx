import { Link } from "react-router-dom";
import styles from "./BecomeAPartner.module.scss";

const BecomeAPartner = () => {
  return (
    <div className={styles.becomeAPartner}>
      <div className={styles.becomeAPartner__becomeAPartnerContent}>
        <h3 className={styles.becomeAPartner__becomeAPartnerContent__subtitle}>Junte-se a nós e transforme vidas!</h3>
        <h2 className={styles.becomeAPartner__becomeAPartnerContent__title}>Se torne um parceiro</h2>
        <p className={styles.becomeAPartner__becomeAPartnerContent__description}>Sua contribuição, seja como voluntário ou doador, faz toda a diferença! Ajude-nos a levar educação de qualidade a milhares de crianças e construir um futuro melhor.</p>
        <div className={styles.becomeAPartner__becomeAPartnerContent__buttons}>
          <Link to={"/sobre"} className={styles.becomeAPartner__becomeAPartnerContent__buttons__buttonVolunteer}>Torne-se um Voluntário</Link>
          <Link to={"/sobre#doar"} className={styles.becomeAPartner__becomeAPartnerContent__buttons__buttonDonate}>Faça uma Doação</Link>
        </div>
      </div>
    </div>
  );
};

export default BecomeAPartner;
