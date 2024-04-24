import Logo from "./assets/logo.png";
import WhatsappLogo from "./assets/whatsapp.png";
import FacebookLogo from "./assets/facebook.png";
import InstagramLogo from "./assets/instagram.png";
import Phone from "./assets/phone.png";
import Mail from "./assets/mail.png";
import styles from "./App.module.scss";
import { useState } from "react";

function App() {
  const [pixCopy, setPixCopy] = useState(false);

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
          <p className={styles.Section__Description}>Construir um futuro para pessoas que já perderam a esperança, dando um novo rumo para suas histórias.</p>
        </section>

        <section className={styles.Section}>
          <h2 className={styles.Section__Title}>Nossa Visão</h2>
          <p className={styles.Section__Description}>Ser referência na cidade de Vespasiano, garantindo um ensino de qualidade e sem destinção a toda a população.</p>
        </section>

        <section className={styles.Section}>
          <h2 className={styles.Section__Title}>Cursos Profissionalizantes</h2>
          <p className={styles.Section__Description}>Oferecemos uma variedade de cursos profissionalizantes para capacitar membros da comunidade e promover o crescimento pessoal e profissional.</p>
        </section>

        <section className={styles.Section}>
          <h2 className={styles.Section__Title}>Como Você Pode Ajudar</h2>
          <p className={styles.Section__Description}>Seja um agente de mudança! Você pode ajudar de diversas maneiras:</p>
          <ul className={styles.Section__Description__List}>
            <li>
              <span className={styles.Section__Description__List__CallToAction}>Seja voluntário</span>: Dedique seu tempo e talento para auxiliar em nossas ações. Temos diversas oportunidades para você se envolver, de acordo com suas habilidades e
              interesses. Clique no botão Seja Voluntário para se cadastrar.
            </li>
            <li>
              <span className={styles.Section__Description__List__CallToAction}>Doe</span>: Sua doação, seja em dinheiro, produtos ou serviços, é fundamental para que possamos continuar transformando vidas. Clique no botão Doar para escolher a forma de
              doação que mais lhe convier.
            </li>
            <li>
              <span className={styles.Section__Description__List__CallToAction}>Divulgue</span>: Compartilhe nossa causa nas redes sociais e com seus amigos e familiares. Ajude-nos a alcançar mais pessoas e multiplicar o impacto do nosso trabalho. Clique
              no botão Compartilhar para divulgar nossa página.
            </li>
          </ul>
          <p className={styles.Section__Description}>
            Nosso PIX(CNPJ):{" "}
            <span
              className={styles.Section__Description__Pix}
              onClick={() => {
                navigator.clipboard.writeText("07608255000180");
                setPixCopy(true);
                setTimeout(() => setPixCopy(false), 2000);
              }}
            >
              07608255000180
            </span>
            {pixCopy && <p className={styles.Section__Description__Pix__Copied}> Chave PIX copiada!</p>}
          </p>
        </section>
      </main>

      <footer className={styles.Footer}>
        <div className={styles.Footer__Social}>
          <h3 className={styles.Footer__Social__Title}>Redes Sociais e Contato</h3>
          <div className={styles.Footer__Social__SocialLinks}>
            <a href="https://wa.me/5531986050661" target="_blank" rel="noopener noreferrer" className={styles.Footer__SocialLink}>
              <img src={WhatsappLogo} alt="WhatsApp" className={styles.Footer__SocialIcon} />
              <span>WhatsApp</span>
            </a>
            <a href="https://www.facebook.com/people/Ong-Parceiros-do-Bem/100083482865397/" target="_blank" rel="noopener noreferrer" className={styles.Footer__SocialLink}>
              <img src={FacebookLogo} alt="Facebook" className={styles.Footer__SocialLink__SocialIcon} />
              <span>Facebook</span>
            </a>
            <a href="https://www.instagram.com/ongparceirosdobem_" target="_blank" rel="noopener noreferrer" className={styles.Footer__SocialLink}>
              <img src={InstagramLogo} alt="Instagram" className={styles.Footer__SocialLink__SocialIcon} />
              <span>Instagram</span>
            </a>
            <a href="tel:31986050661" className={styles.Footer__SocialLink}>
              <img src={Phone} alt="Phone" className={styles.Footer__SocialLink__SocialIcon} />
              <span>(31) 98605-0661</span>
            </a>
            <a href="mailto:parceirosdobemvespasiano@gmail.com" className={styles.Footer__SocialLink}>
              <img src={Mail} alt="E-mail" className={styles.Footer__SocialLink__SocialIcon} />
              <span>parceirosdobemvespasiano@gmail.com</span>
            </a>
          </div>
        </div>

        <div className={styles.Footer__Location}>
          <h3 className={styles.Footer__Location__Title}>Localização</h3>
          <a href="https://www.google.com/maps/place/ONG+Parceiros+do+Bem/@-19.7488302,-43.9529003,15z/data=!4m6!3m5!1s0xa68905c244f699:0x5910ddc10081235a!8m2!3d-19.7488302!4d-43.9529003!16s%2Fg%2F11ss57yqx0?entry=ttu">
            <p className={styles.Footer__LocationDescription}>Rua Santos Dumont 401, Jardim da Gloria, Vespasiano</p>
          </a>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15020.59533641912!2d-43.9529003!3d-19.7488302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa68905c244f699%3A0x5910ddc10081235a!2sONG%20Parceiros%20do%20Bem!5e0!3m2!1spt-BR!2sbr!4v1713798430146!5m2!1spt-BR!2sbr"
            style={{ border: 1 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </div>
  );
}

export default App;
