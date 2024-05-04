import styles from "./NavBar.module.scss";

import { useRoutes } from "../../hooks";

interface NavBarProps {
  handleMenuClose?: () => void;
  navBar?: React.MutableRefObject<null>;
}

const NavBar = ({ handleMenuClose, navBar }: NavBarProps) => {
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
