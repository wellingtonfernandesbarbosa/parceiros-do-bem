import styles from "./Header.module.scss";

import Logo from "../../assets/logo.png";
import Email from "../../assets/mail_blue.svg";
import Phone from "../../assets/phone_blue.svg";

import { Title3 } from "../Typografy";
import { useParceiroDoBem } from "../../hooks";

const Header = () => {
  const parceirosDoBem = useParceiroDoBem()[0];

  return (
    <header className={styles.Header}>
      <img src={Logo} alt="Logo" className={styles.Header__Logo} />
      <div className={styles.Header__Info}>
        <div className={styles.Header__Info__Email}>
          <a href={`mailto:${parceirosDoBem.email}`}>
            <img src={Email} alt="Email" className={styles.Header__Info__Icon} />
          </a>
          <div className={styles.Header__Info__Email__Text}>
            <Title3>Email</Title3>
            <a href={`mailto:${parceirosDoBem.email}`} title="Email">
              {parceirosDoBem.email}
            </a>
          </div>
        </div>
        <div className={styles.Header__Info__Phone}>
          <a href={`tel:${parceirosDoBem.phone.replace("(", "").replace(")", "").replace("-", "").replace(" ", "")}`} title={`Ícone com o link da ONG ${parceirosDoBem.name}`}>
            <img src={Phone} alt="Ícone de Telefone" className={styles.Header__Info__Icon} />
          </a>
          <div className={styles.Header__Info__Phone__Text}>
            <Title3>Ligue Agora</Title3>
            <a href={`tel:${parceirosDoBem.phone.replace("(", "").replace(")", "").replace("-", "").replace(" ", "")}`} title={`Link com o número da ONG ${parceirosDoBem.name}`}>
              {parceirosDoBem.phone}
            </a>
          </div>
        </div>
        <a href={`${parceirosDoBem.whatsApp}?text=Olá! Gostaria de fazer uma doação para ajudar a ONG Parceiros do Bem.`} target="_blank" title="Doar" className={styles.Header__Info__Donate}>
          <button className={styles.Header__Info__Donate__Button}>Doar</button>
        </a>
      </div>
    </header>
  );
};

export default Header;
