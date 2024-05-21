import styles from "./Footer.module.scss";

import Logo from "@/assets/logo.png";
import locationLogo from "@/assets/location-white.png";
import phoneLogo from "@/assets/phone-white.png";
import mailIcon from "@/assets/mail-white.png";

import NavBar from "../NavBar";
import { useParceiroDoBem } from "@/hooks";
import { LinkTelFormatter } from "@/util";
import SocialMediaLinks from "../SocialMediaLinks";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const parceirosDoBem = useParceiroDoBem()[0];
  const { pathname } = useLocation();
  const page = pathname.replace("/", "");

  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__Container}>
        <div className={styles.Footer__Container__Info}>
          <img src={Logo} alt="Logo" title={parceirosDoBem.name} className={styles.Footer__Container__Info__Logo} />
          <p className={styles.Footer__Container__Info__Text}>Transformando Vidas Através do Desenvolvimento Humano</p>
          <ul className={styles.Footer__Container__Info__List}>
            <li className={styles.Footer__Container__Info__List__Item}>
              <a href={parceirosDoBem.map} title="Endereço" target="_blank">
                <img src={locationLogo} alt="Endereço" />
                <span>{parceirosDoBem.address}</span>
              </a>
            </li>
            <li className={styles.Footer__Container__Info__List__Item}>
              <a href={LinkTelFormatter(parceirosDoBem.phone)} title={`Ligue para ${parceirosDoBem.phone}`}>
                <img src={phoneLogo} alt="" />
                <span>{parceirosDoBem.phone}</span>
              </a>
            </li>
            <li className={styles.Footer__Container__Info__List__Item}>
              <a href={`mailto:${parceirosDoBem.email}`} title="Email" target="_blank">
                <img src={mailIcon} alt="Email" />
                <span>{parceirosDoBem.email}</span>
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.Footer__Container__Navigation}>
          <h2>Páginas</h2>
          <NavBar />
        </div>
        {page !== "contato" && (
          <div className={styles.Footer__Container__Social}>
            <SocialMediaLinks />
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
