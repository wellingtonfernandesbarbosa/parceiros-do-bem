import styles from "./Album.module.scss";

import { useState } from "react";

import { Title2 } from "../Typografy";
import Ialbum from "@/types/albumTypes";
import UpArrow from "@/assets/upArow.png";
import hapticFeedback from "@/util/haptic";
import DownArrow from "@/assets/downArrow.png";

const Album = ({ name, album, handlePhotoClick }: { name: string; album: Ialbum[], handlePhotoClick: (album: Ialbum[], id: number) => void }) => {
  const [verMais, setVerMais] = useState(false);
  const [showAlbum, setShowAlbum] = useState(true);

  const maxInitialPhotos = 8;

  const handleAlbumClick = () => {
    setShowAlbum(!showAlbum);
    hapticFeedback();
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__header}>
        <Title2>{name}</Title2>
        <img src={showAlbum ? UpArrow : DownArrow} onClick={handleAlbumClick} className={styles.container__header__arrow} title="Ver mais" alt="" />
      </div>
      {showAlbum && <div className={styles.container__album}>
        {album.slice(0, verMais ? album.length : maxInitialPhotos).map((photo: Ialbum) => (
          <img key={photo.id} src={photo.src} alt={photo.alt} title={photo.title} onClick={() => handlePhotoClick(album, photo.id)} />
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
