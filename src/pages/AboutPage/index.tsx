import styles from "./AboutPage.module.scss";

import { useEffect, useState } from "react";
import ClipboardJS from "clipboard";

import { useParceiroDoBem } from "@/hooks";
import hapticFeedback from "@/util/haptic";

const About = () => {
  const [pixCopy, setPixCopy] = useState(false);
  const parceirosDoBem = useParceiroDoBem()[0];

  useEffect(() => {
    const clipboard = new ClipboardJS(".copy-button");

    clipboard.on("success", () => {
      hapticFeedback();
      setPixCopy(true);
      setTimeout(() => setPixCopy(false), 3000);
    });

    clipboard.on("error", (e) => {
      console.error("Erro ao copiar para área de transferência:", e);
    });

    return () => {
      clipboard.destroy();
    };
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`${parceirosDoBem.whatsApp}?text=Olá! Gostaria de me voluntariar para ajudar a ONG Parceiros do Bem.`);
  };

  return (
    <main className={styles.About}>
      <section className={styles.About__Section}>
        <h2 className={styles.About__SectionTitle}>Sobre a ONG</h2>
        <p>
          Somos a ONG Parceiros do Bem, uma organização comprometida com o desenvolvimento social e comunitário da nossa cidade, Vespasiano, Minas Gerais. Desde o nosso início em 2022, temos trabalhado incansavelmente para oferecer oportunidades de
          educação, assistência social e cultural para toda a nossa comunidade.
        </p>
      </section>

      <section className={styles.About__Section}>
        <h2 className={styles.About__SectionTitle}>Missão</h2>
        <p>Nossa missão é construir um futuro para pessoas que já perderam a esperança, dando um novo rumo para suas histórias. Buscamos promover o acesso à educação, saúde e cultura, contribuindo para a transformação positiva de vidas.</p>
      </section>

      <section className={styles.About__Section}>
        <h2 className={styles.About__SectionTitle}>Visão</h2>
        <p>
          Nossa visão é ser referência na cidade de Vespasiano, garantindo um ensino de qualidade e sem distinção a toda a população. Almejamos ser reconhecidos como agentes de mudança, contribuindo para a construção de uma sociedade mais justa e
          igualitária.
        </p>
      </section>

      <section className={styles.About__Section}>
        <h2 className={styles.About__Section__SectionTitle}>Valores</h2>
        <ul className={styles.About__Section__ValuesList}>
          <li>Comprometimento com a comunidade</li>
          <li>Ética e transparência</li>
          <li>Respeito à diversidade</li>
          <li>Empatia e solidariedade</li>
          <li>Excelência e inovação</li>
        </ul>
      </section>

      <section className={styles.About__Section} id="doar">
        <h2 className={styles.About__Section__SectionTitle}>Como Ajudar</h2>
        <p>Você pode se juntar a nós e fazer a diferença na vida das pessoas de Vespasiano de várias maneiras. Seja voluntário em nossos projetos, faça uma doação ou participe de nossos eventos e atividades comunitárias.</p>
        <div className={styles.About__Section__ButtonsContainer}>
          <button onClick={handleWhatsAppClick}>WhatsApp</button>
          <button className="copy-button" data-clipboard-text={parceirosDoBem.cnpj}>
            Copiar PIX
          </button>
        </div>
        {pixCopy && <p className={styles.About__Section__PixCopied}>PIX(CNPJ) copiado com sucesso!</p>}
        <p>
          Para mais informações sobre como contribuir, entre em contato conosco através do email:{" "}
          <a className={styles.About__Section__Mail} href={`malto:${parceirosDoBem.email}`}>
            {parceirosDoBem.email}
          </a>
          .
        </p>
      </section>
    </main>
  );
};

export default About;
