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

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Footer__Container}>
        <div className={styles.Footer__Container__Info}>
          <img src={Logo} alt="Logo" title="Parceiros do Bem" className={styles.Footer__Container__Info__Logo} />
          <p className={styles.Footer__Container__Info__Text}>Transformando Vidas Através do Desenvolvimento Humano</p>
          <ul className={styles.Footer__Container__Info__List}>
            <li className={styles.Footer__Container__Info__List__Item}>
              <a href="https://www.google.com/maps/place/ONG+Parceiros+do+Bem/@-19.7488302,-43.9529003,15z/data=!4m6!3m5!1s0xa68905c244f699:0x5910ddc10081235a!8m2!3d-19.7488302!4d-43.9529003!16s%2Fg%2F11ss57yqx0?entry=ttu" title="Endereço" target="_blank">
                <img src={locationLogo} alt="Endereço" />
                <span>Rua Santos Dumont 401, Jardim da Gloria, Vespasiano</span>
              </a>
            </li>
            <li className={styles.Footer__Container__Info__List__Item}>
              <a href="tel:31986050661" title="Ligue para (31) 98605-0661">
                <img src={phoneLogo} alt="" />
                <span>(31) 98605-0661</span>
              </a>
            </li>
            <li className={styles.Footer__Container__Info__List__Item}>
              <a href="mailto:parceirosdobemvespasiano@gmail.com" title="Email" target="_blank">
                <img src={mailIcon} alt="Email" />
                <span>parceirosdobemvespasiano@gmail.com</span>
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
              <a href="https://wa.me/5531986050661" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <img src={WhatsappLogo} alt="WhatsApp" className={styles.Footer__SocialIcon} />
                <span>WhatsApp</span>
              </a>
            </li>
            <li className={styles.Footer__Container__Social__Icons__Item}>
              <a href="https://www.facebook.com/people/Ong-Parceiros-do-Bem/100083482865397/" target="_blank" rel="noopener noreferrer" title="Facebook">
                <img src={FacebookWhiteLogo} alt="Facebook" className={styles.Footer__SocialLink__SocialIcon} />
                <span>Facebook</span>
              </a>
            </li>
            <li className={styles.Footer__Container__Social__Icons__Item}>
              <a href="https://www.instagram.com/ongparceirosdobem_" target="_blank" rel="noopener noreferrer" title="Instagram">
                <img src={InstagramLogo} alt="Instagram" className={styles.Footer__SocialLink__SocialIcon} />
                <span>Instagram</span>
              </a>
            </li>
            <li className={styles.Footer__Container__Social__Icons__Item}>
              <a href="https://www.youtube.com/channel/UCxNhCpGKVcch10CrhgvOyWg" target="_blank" rel="noopener noreferrer" title="Youtube" >
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
