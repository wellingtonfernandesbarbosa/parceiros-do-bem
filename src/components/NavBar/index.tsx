import styles from "./NavBar.module.scss";

import { useRoutes } from "../../hooks";

const NavBar = ({ handleMenuClose, navBar }: { handleMenuClose: () => void; isActiveMenu: boolean; navBar: React.MutableRefObject<null> }) => {
  const pages: string[] = useRoutes()[0];

  return (
    <nav className={styles.NavBar} ref={navBar}>
      <ul className={styles.NavBar__List}>
        {pages.map((page) => (
          <li key={page} className={styles.NavBar__List__Item}>
            <a href={`#${page.toLowerCase()}`} title={page} onClick={handleMenuClose}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
