import styles from "./GaleryPage.module.scss";

import Album from "@/components/Album";
import balletAlbum from "@/components/BalletAlbum";
import EventsAlbum from "@/components/EventsAlbum";
import KidsPartyAlbum from "@/components/KidsPartyAlbum";

const Galery = () => {
  return (
    <div className={styles.galery}>
      <Album album={balletAlbum} name="Aulas de Ballet" />
      <Album album={EventsAlbum} name="Eventos" />
      <Album album={KidsPartyAlbum} name="Festa das Crianças" /> 
    </div>
  );
};

export default Galery;
