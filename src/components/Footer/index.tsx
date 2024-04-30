import styles from "./Footer.module.scss";

import Logo from "../../assets/logo.png";
import locationLogo from "../../assets/location-white.png";
import phoneLogo from "../../assets/phone-white.png";
import mailIcon from "../../assets/mail-white.png";
import WhatsappLogo from "../../assets/whatsapp-white.png";
import FacebookWhiteLogo from "../../assets/facebook-white.svg";
import InstagramLogo from "../../assets/instagram-white.png";
import YoutubeWhiteIcon from "../../assets/youtube-white.png";

import NavBar from "../NavBar";
import { useParceiroDoBem } from "../../hooks";
import { LinkTelFormatter } from "../../util";

const Footer = () => {
  const parceirosDoBem = useParceiroDoBem()[0];

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
        <div className={styles.Footer__Container__Social}>
          <h2>Redes Sociais</h2>
          <ul className={styles.Footer__Container__Social__Icons}>
            <li className={styles.Footer__Container__Social__Icons__Item}>
              <a href={parceirosDoBem.whatsApp} target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <img src={WhatsappLogo} alt="WhatsApp" className={styles.Footer__SocialIcon} />
                <span>WhatsApp</span>
              </a>
            </li>
            <li className={styles.Footer__Container__Social__Icons__Item}>
              <a href={parceirosDoBem.facebook} target="_blank" rel="noopener noreferrer" title="Facebook">
                <img src={FacebookWhiteLogo} alt="Facebook" className={styles.Footer__SocialLink__SocialIcon} />
                <span>Facebook</span>
              </a>
            </li>
            <li className={styles.Footer__Container__Social__Icons__Item}>
              <a href={parceirosDoBem.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
                <img src={InstagramLogo} alt="Instagram" className={styles.Footer__SocialLink__SocialIcon} />
                <span>Instagram</span>
              </a>
            </li>
            <li className={styles.Footer__Container__Social__Icons__Item}>
              <a href={parceirosDoBem.youtube} target="_blank" rel="noopener noreferrer" title="Youtube">
                <img src={YoutubeWhiteIcon} alt="Youtube" className={styles.Footer__SocialLink__SocialIcon} />
                <span>Youtube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
