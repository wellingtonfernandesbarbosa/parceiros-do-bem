import styles from "./Header.module.scss";

import Logo from "../../assets/logo.png";
import Email from "../../assets/mail_blue.svg";
import Phone from "../../assets/phone_blue.svg";

import { Title3 } from "../Typografy";

const Header = () => {
  return (
    <header className={styles.Header}>
      <img src={Logo} alt="Logo" className={styles.Header__Logo} />
      <div className={styles.Header__Info}>
        <div className={styles.Header__Info__Email}>
          <a href="mailto:parceirosdobemvespasiano@gmail.com">
            <img src={Email} alt="Email" className={styles.Header__Info__Icon} />
          </a>
          <div className={styles.Header__Info__Email__Text}>
            <Title3>Email</Title3>
            <a href="mailto:parceirosdobemvespasiano@gmail.com" title="Email">parceirosdobemvespasiano@gmail.com</a>
          </div>
        </div>
        <div className={styles.Header__Info__Phone}>
          <a href="tel:31986050661" title="Ligue para (31) 98605-0661">
            <img src={Phone} alt="Telefone" className={styles.Header__Info__Icon} />
          </a>
          <div className={styles.Header__Info__Phone__Text}>
            <Title3>Ligue Agora</Title3>
            <a href="tel:31986050661" title="Ligue para (31) 98605-0661">(31) 98605-0661</a>
          </div>
        </div>
        <a href="https://wa.me/5531986050661?text=Olá! Gostaria de fazer uma doação para ajudar a ONG Parceiros do Bem." target="_blank" title="Doar" className={styles.Header__Info__Donate}>
          <button className={styles.Header__Info__Donate__Button}>Doar</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
