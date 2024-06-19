import styles from "./OurGalery.module.scss";

import { Link } from "react-router-dom";

import photos from "./ourGaleryImages";
import hapticFeedback from "@/util/hapticFeedback";
import divisoryIcon from "../../assets/grayDivisory.svg";
import { Paragraph, Title2, Title3 } from "../Typografy";

const OurGalery = () => {
  return (
    <div className={styles.ourGalery}>
      <div className={styles.ourGalery__header}>
        <Title2>Nossa Galeria</Title2>
        <Paragraph>Explore momentos especiais e eventos marcantes em nossa galeria de imagens</Paragraph>
        <img className={styles.ourGalery__header__divisoryIcon} src={divisoryIcon} alt="divisory" />
      </div>
      <div className={styles.ourGalery__galery}>
        {photos.map((photo) => (
          <img key={photo.id} className={styles.ourGalery__galery__photo} src={photo.src} alt={photo.alt} title={photo.title} />
        ))}
      </div>
      <div className={styles.ourGalery__footer}>
        <div className={styles.ourGalery__footer__container}>
          <div className={styles.ourGalery__footer__content}>
            <Title3>Descubra nossa história</Title3>
            <Paragraph>Conheça os momentos especiais que fazem parte da nossa trajetória.</Paragraph>
          </div>
          <button className={styles.ourGalery__footer__container__button} onClick={() => hapticFeedback()}>
            <Link to={"/galeria"}>Nossa Galeria</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurGalery;
