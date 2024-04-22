import Logo from "./assets/logo.png";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img src={Logo} alt="Logo" className={styles.Header__Logo} />
      </header>
      <main className={styles.Main}>
        <section className={styles.Section}>
          <h2 className={styles.Section__Title}>Quem Somos</h2>
          <p className={styles.Section__Description}>Somos uma associação dedicada a promover o bem-estar social e ambiental em nossa comunidade.</p>
        </section>
        <section className={styles.Section}>
          <h2 className={styles.Section__Title}>Nossa Missão</h2>
          <p className={styles.Section__Description}>Buscamos criar um impacto positivo por meio de iniciativas de voluntariado, eventos e projetos sustentáveis.</p>
        </section>
        <section className={styles.Section}>
          <h2 className={styles.Section__Title}>Cursos Profissionalizantes</h2>
          <p className={styles.Section__Description}>Oferecemos uma variedade de cursos profissionalizantes para capacitar membros da comunidade e promover o crescimento pessoal e profissional.</p>
        </section>
        <section className={styles.Section}>
          <h2 className={styles.Section__Title}>Como Você Pode Ajudar</h2>
          <p className={styles.Section__Description}>Junte-se a nós como voluntário, faça uma doação de produtos ou roupas para nosso bazar beneficente, ou contribua com uma doação financeira através do PIX para ajudar a financiar nossas iniciativas.</p>
          <p className={styles.Section__Description}>
            Nosso PIX(CNPJ): <span className={styles.Pix}>07608255000180</span>
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
