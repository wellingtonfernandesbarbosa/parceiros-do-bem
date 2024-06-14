import styles from "./GaleryPage.module.scss";

import { useCallback, useEffect, useState } from "react";

import Album from "@/components/Album";
import Ialbum from "@/types/albumTypes";
import hapticFeedback from "@/util/haptic";
import balletAlbum from "@/data/balletClass.json";
import EventsAlbum from "@/data/eventsAlbum.json";
import KidsPartyAlbum from "@/data/kidsPartyAlbum.json";
import elderlyCaregiverClass from "@/data/elderlyCaregiverClass.json";

const Galery = () => {
  const [modalAlbum, setModalAlbum] = useState<Ialbum[]>([]);
  const [idImage, setIdImage] = useState(0);

  const handlePhotoClick = (album: Ialbum[], id: number) => {
    console.log(id);
    setIdImage(id);
    setModalAlbum(album);
    hapticFeedback();
    window.history.pushState({}, "");
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
          idImage > 0 && nextImage();
          break;
        case "ArrowRight":
          idImage < modalAlbum.length - 1 && prevImage();
          break;
        case "Escape":
          setModalAlbum([]);
          window.history.back();
          break;
        default:
          break;
      }
    };

    const handlePopState = () => {
      setModalAlbum([]);
    };

    document.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [idImage, modalAlbum, nextImage, prevImage]);

  return (
    <div className={styles.galery}>
      <Album album={KidsPartyAlbum} name="Festa das Crianças" handlePhotoClick={handlePhotoClick} />
      <Album album={balletAlbum} name="Aula de Ballet Infantil" handlePhotoClick={handlePhotoClick} />
      <Album album={elderlyCaregiverClass} name="Aula de Cuidador de Idosos" handlePhotoClick={handlePhotoClick} />
      <Album album={EventsAlbum} name="Eventos" handlePhotoClick={handlePhotoClick} />

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
            <button
              className={styles.galery__modal__footer__closeButton}
              onClick={() => {
                setModalAlbum([]);
                window.history.back();
              }}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galery;
