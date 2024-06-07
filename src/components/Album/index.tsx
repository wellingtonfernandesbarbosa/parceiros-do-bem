import { useState } from "react";
import { Title2 } from "../Typografy";
import styles from "./Album.module.scss";
import UpArrow from "@/assets/upArow.png";
import DownArrow from "@/assets/downArrow.png";

interface Ialbum {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const Album = ({ name, album }: { name: string; album: Ialbum[] }) => {
  const [verMais, setVerMais] = useState(false);
  const [showAlbum, setShowAlbum] = useState(true);

  const maxInitialPhotos = 8;

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <Title2>{name}</Title2>
        <img src={showAlbum ? UpArrow : DownArrow} onClick={() => setShowAlbum(!showAlbum)} className={styles.container__arrow} title="Ver mais" alt="" />
      </div>
      {showAlbum && <div className={styles.container__album}>
        {album.slice(0, verMais ? album.length : maxInitialPhotos).map((photo: Ialbum) => (
          <img key={photo.id} src={photo.src} alt={photo.alt} title={photo.title} />
        ))}
      </div>}
      {showAlbum && <div className={styles.container__footer}>
        {!verMais ? (
          <button className={styles.container__footer__button} onClick={() => setVerMais(true)}>
            Ver mais
          </button>
        ) : (
          <button className={styles.container__footer__button} onClick={() => setVerMais(false)}>
            Ver menos
          </button>
        )}
      </div>}
    </div>
  );
};

export default Album;
