import { useRoutes } from "../../hooks";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const pages: string[] = useRoutes()[0];

  return (
    <nav className={styles.NavBar}>
      <ul className={styles.NavBar__List}>
        {pages.map((page) => (
          <li key={page} className={styles.NavBar__List__Item}>
            <a href={`#${page.toLowerCase()}`} title={page}>{page}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
