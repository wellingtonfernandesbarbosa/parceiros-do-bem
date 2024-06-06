import Album from "@/components/Album";
import styles from "./GaleryPage.module.scss";

import balletAlbum from "@/components/BalletAlbum"; 
import OccultFriend from "@/components/OccultFriend/OccultFriend";

const Galery = () => {
  return <div className={styles.galery}>
    <Album album={balletAlbum} name="Aulas de Ballet" />
    <Album album={OccultFriend} name="Amigo Oculto" />
  </div>;
};

export default Galery;
