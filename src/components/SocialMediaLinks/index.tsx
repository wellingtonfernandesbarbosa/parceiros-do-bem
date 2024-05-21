import styles from "./SocialMediaLinks.module.scss";
import WhatsappWhite from "@/assets/whatsapp-white.png";
import WhatsAppBlack from "@/assets/whatsapp.png";
import FacebookWhite from "@/assets/facebook-white.svg";
import FacebookBlack from "@/assets/facebook.png";
import InstagramWhite from "@/assets/instagram-white.png";
import InstagramBlack from "@/assets/instagram.png";
import YoutubeWhite from "@/assets/youtube-white.png";
import YoutubeBlack from "@/assets/youtube.png";
import { useParceiroDoBem } from "@/hooks";
import { useLocation } from "react-router-dom";

const SocialMediaLinks = () => {
  const parceirosDoBem = useParceiroDoBem()[0];

  const page = useLocation().pathname.replace("/", "");
  console.log(page)

  let WhatsAppIcon = null;
  let FacebookIcon = null;
  let InstagramIcon = null;
  let YoutubeIcon = null;

  if (page === "contato") { 
    WhatsAppIcon = WhatsAppBlack;
    FacebookIcon = FacebookBlack;
    InstagramIcon = InstagramBlack;
    YoutubeIcon = YoutubeBlack;
  } else {
    WhatsAppIcon = WhatsappWhite;
    FacebookIcon = FacebookWhite;
    InstagramIcon = InstagramWhite;
    YoutubeIcon = YoutubeWhite;
  }

  return (
    <div className={styles.Social}>
      <h2 className={styles.Social__Title}>Redes Sociais</h2>
      <ul className={styles.Social__List}>
        <li className={styles.Social__List__Item}>
          <a href={parceirosDoBem.whatsApp} target="_blank" rel="noopener noreferrer" title="WhatsApp">
            <img src={WhatsAppIcon} alt="WhatsApp" className={styles.Social__List__Item__Icon} />
            <span>WhatsApp</span>
          </a>
        </li>
        <li className={styles.Social__List__Item}>
          <a href={parceirosDoBem.facebook} target="_blank" rel="noopener noreferrer" title="Facebook">
            <img src={FacebookIcon} alt="Facebook" className={styles.Social__List__Item__Icon} />
            <span>Facebook</span>
          </a>
        </li>
        <li className={styles.Social__List__Item}>
          <a href={parceirosDoBem.instagram} target="_blank" rel="noopener noreferrer" title="Instagram">
            <img src={InstagramIcon} alt="Instagram" className={styles.Social__List__Item__Icon} />
            <span>Instagram</span>
          </a>
        </li>
        <li className={styles.Social__List__Item}>
          <a href={parceirosDoBem.youtube} target="_blank" rel="noopener noreferrer" title="Youtube">
            <img src={YoutubeIcon} alt="Youtube" className={styles.Social__List__Item__Icon} />
            <span>Youtube</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaLinks;
