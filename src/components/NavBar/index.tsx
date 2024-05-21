import styles from "./NavBar.module.scss";

import { useRoutes } from "@/hooks";
import { Link } from "react-router-dom";

interface NavBarProps {
  handleMenuClose?: () => void;
  navBar?: React.MutableRefObject<null>;
}

const NavBar = ({ handleMenuClose, navBar }: NavBarProps) => {
  const pages = useRoutes()[0];

  return (
    <nav className={styles.NavBar} ref={navBar}>
      <ul className={styles.NavBar__List}>
        {pages.map((page) => (
          <li key={page.link} className={styles.NavBar__List__Item}>
            <Link to={`/${page.link}`} title={page.name} onClick={handleMenuClose}>
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
