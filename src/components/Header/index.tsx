import styles from "./Header.module.scss";

import { useCallback, useEffect, useRef, useState } from "react";

import NavBar from "../NavBar";
import Logo from "@/assets/logo.png";
import Email from "@/assets/mail_blue.svg";
import Phone from "@/assets/phone_blue.svg";
import { Title3 } from "../Typografy";
import { LinkTelFormatter } from "@/util";
import { useParceiroDoBem } from "@/hooks";
import hapticFeedback from "@/util/haptic";

const Header = () => {
  const parceirosDoBem = useParceiroDoBem()[0];
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const navBar = useRef(null);
  const menu = useRef(null);

  const handleMenuClick = () => {
    hapticFeedback();
    setIsActiveMenu((previous) => !previous);
  };

  const handleMenuClose = useCallback(() => {
    setIsActiveMenu(false);
  }, []);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (navBar.current && menu.current && !(navBar.current as HTMLElement).contains(event.target as Node) && !(menu.current as HTMLElement).contains(event.target as Node)) {
        isActiveMenu && handleMenuClose();
      }
    },
    [handleMenuClose, navBar, isActiveMenu]
  );

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside, handleMenuClose, navBar]);

  return (
    <header className={styles.Header}>
      <img src={Logo} alt="Logo" className={styles.Header__Logo} />
      <div className={styles.Header__Info}>
        <div className={styles.Header__Info__Email}>
          <a href={`mailto:${parceirosDoBem.email}`}>
            <img src={Email} alt="Email" className={styles.Header__Info__Icon} />
          </a>
          <div className={styles.Header__Info__Email__Text}>
            <Title3>Email</Title3>
            <a href={`mailto:${parceirosDoBem.email}`} title="Email">
              {parceirosDoBem.email}
            </a>
          </div>
        </div>
        <div className={styles.Header__Info__Phone}>
          <a href={LinkTelFormatter(parceirosDoBem.phone)} title={`Ícone com o link da ONG ${parceirosDoBem.name}`}>
            <img src={Phone} alt="Ícone de Telefone" className={styles.Header__Info__Icon} />
          </a>
          <div className={styles.Header__Info__Phone__Text}>
            <Title3>Ligue Agora</Title3>
            <a href={LinkTelFormatter(parceirosDoBem.phone)} title={`Link com o número da ONG ${parceirosDoBem.name}`}>
              {parceirosDoBem.phone}
            </a>
          </div>
        </div>
        <a href={`${parceirosDoBem.whatsApp}?text=Olá! Gostaria de fazer uma doação para ajudar a ONG Parceiros do Bem.`} target="_blank" title="Doar" className={styles.Header__Info__Donate}>
          <button className={styles.Header__Info__Donate__Button}>Doar</button>
        </a>
      </div>
      <div className={styles.Header__Menu} onClick={handleMenuClick} id="menuIcon" ref={menu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {isActiveMenu && <NavBar handleMenuClose={handleMenuClose} navBar={navBar} />}
    </header>
  );
};

export default Header;
