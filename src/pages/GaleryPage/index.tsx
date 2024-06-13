import styles from "./GaleryPage.module.scss";

import { useCallback, useEffect, useState } from "react";

import Album from "@/components/Album";
import Ialbum from "@/types/albumTypes";
import hapticFeedback from "@/util/haptic";
import balletAlbum from "@/components/BalletAlbum";
import EventsAlbum from "@/components/EventsAlbum";
import KidsPartyAlbum from "@/components/KidsPartyAlbum";

const Galery = () => {
  const [modalAlbum, setModalAlbum] = useState<Ialbum[]>([]);
  const [idImage, setIdImage] = useState(0);

  const handlePhotoClick = (album: Ialbum[], id: number) => {
    console.log(id);
    setIdImage(id);
    setModalAlbum(album);
    hapticFeedback();
  };

  const nextImage = useCallback(() => {
    hapticFeedback();
    idImage > 0 && setIdImage(idImage - 1);
  }, [idImage]);

  const prevImage = useCallback(() => {
    hapticFeedback();
    setIdImage(idImage + 1);
  }, [idImage]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          nextImage();
          break;
          case "ArrowRight":
          prevImage();
          break;
        case "Escape":
          setModalAlbum([]);
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [idImage, modalAlbum, nextImage, prevImage]);

  return (
    <div className={styles.galery}>
      <Album album={balletAlbum} name="Aulas de Ballet" handlePhotoClick={handlePhotoClick} />
      <Album album={EventsAlbum} name="Eventos" handlePhotoClick={handlePhotoClick} />
      <Album album={KidsPartyAlbum} name="Festa das Crianças" handlePhotoClick={handlePhotoClick} />

      {modalAlbum.length > 0 && (
        <div className={styles.galery__modal}>
          <div className={styles.galery__modal__content}>
            <img src={modalAlbum[idImage].src} className={styles.galery__modal__content__image} title="" alt="" />
          </div>
          <div className={styles.galery__modal__footer}>
            <div className={styles.galery__modal__footer__buttons}>
              {idImage > 0 ? (
                <button className={styles.galery__modal__footer__buttons__button} onClick={nextImage}>
                  Anterior
                </button>
              ) : null}
              {idImage < modalAlbum.length - 1 ? (
                <button className={styles.galery__modal__footer__buttons__button} onClick={prevImage}>
                  Proxima
                </button>
              ) : null}
            </div>
            <button className={styles.galery__modal__footer__closeButton} onClick={() => setModalAlbum([])}>
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galery;
