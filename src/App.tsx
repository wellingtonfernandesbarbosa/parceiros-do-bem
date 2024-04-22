import Logo from "./assets/logo.png";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src={Logo} alt="Logo" className={styles.Header__Logo} />
      </header>
    </div>
  );
}

export default App;
