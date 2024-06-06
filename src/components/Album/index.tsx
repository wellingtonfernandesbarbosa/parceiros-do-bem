import { useState } from "react";
import { Title2 } from "../Typografy";
import styles from "./Album.module.scss";

interface Ialbum {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const Album = ({ name, album }: { name: string; album: Ialbum[] }) => {
  const [verMais, setVerMais] = useState(false);

  const maxInitialPhotos = 8;

  return (
    <div className={styles.container}>
      <Title2>{name}</Title2>
      <div className={styles.container__album}>
        {album.slice(0, verMais ? album.length : maxInitialPhotos).map((photo: Ialbum) => (
          <img key={photo.id} src={photo.src} alt={photo.alt} title={photo.title} />
        ))}
      </div>
      <div className={styles.container__footer}>
        {!verMais ? (
          <button className={styles.container__footer__button} onClick={() => setVerMais(true)}>
            Ver mais
          </button>
        ) : (
          <button className={styles.container__footer__button} onClick={() => setVerMais(false)}>
            Ver menos
          </button>
        )}
      </div>
    </div>
  );
};

export default Album;
