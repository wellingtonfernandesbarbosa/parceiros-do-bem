import Logo from '/logo.png';
import styles from './App.module.scss';

function App() {

  return (
    <div className={styles.App}>
      <img src={Logo} alt="Logo" className={styles.App__AppLogo} />
    </div>
  )
}

export default App;
