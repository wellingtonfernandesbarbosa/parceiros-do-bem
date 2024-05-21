import styles from "./Contact.module.scss";

import { useState } from "react";

import Banner from "@/components/Banner";
import { useParceiroDoBem } from "@/hooks";
import { Title3 } from "@/components/Typografy";
import SocialMediaLinks from "@/components/SocialMediaLinks";

const Contact = () => {
  const ParceirosDoBem = useParceiroDoBem()[0];
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const whatsappMessage = `Olá, meu nome é ${name}.\n\n${message}\n\n Email para contato: ${email}`;
    const whatsappLink = `${ParceirosDoBem.whatsApp}?text=${encodeURIComponent(whatsappMessage)}`;

    setFeedbackSent(true);

    window.open(whatsappLink, "_blank");

    setTimeout(() => setFeedbackSent(false), 3000);
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <main className={styles.Contact}>
      <Banner>
        <span>Estamos aqui para ajudar</span>
        <br />
        Entre em contato para saber mais sobre nossos projetos e como você pode se envolver
      </Banner>

      <div className={styles.Contact__Container}>
        <div className={styles.Contact__Container__Info}>
          <Title3>Fale Conosco</Title3>
          <p>Tem dúvidas sobre nossos projetos? Quer ser voluntário? Entre em contato conosco!</p>

          <div className={styles.Contact__Container__Info__Links}>
            <a href={ParceirosDoBem.map}>{ParceirosDoBem.address}</a>
            <a href={`tel:${ParceirosDoBem.phone}`}>{ParceirosDoBem.phone}</a>
            <a href={`mailto:${ParceirosDoBem.email}`}>{ParceirosDoBem.email}</a>
          </div>

          <div className={styles.Contact__Container__Info__SocialMediaLinks}>
            <SocialMediaLinks />
          </div>
        </div>

        <div className={styles.Contact__Container__Form}>
          <Title3>Envie uma mensagem</Title3>
          <form className={styles.Contact__Container__Form__Form} onSubmit={handleSubmit}>
            <div className={styles.Contact__Container__Form__Form__Input}>
              <label htmlFor="name">Seu Nome:</label>
              <input type="text" id="name" name="name" value={name} required onChange={(e) => setName(e.target.value)} placeholder="Seu nome" />
            </div>

            <div className={styles.Contact__Container__Form__Form__Input}>
              <label htmlFor="email">Endereço de e-mail:</label>
              <input type="email" id="email" name="email" value={email} required onChange={(e) => setEmail(e.target.value)} placeholder="Endereço de e-mail para contato" />
            </div>

            <div className={styles.Contact__Container__Form__Form__Input}>
              <label htmlFor="message">Mensagem:</label>
              <textarea id="message" name="message" value={message} required onChange={(e) => setMessage(e.target.value)} placeholder="Como podemos te ajudar?"></textarea>
            </div>

            {feedbackSent && <p className={styles.Contact__Container__Form__Form__Feedback}>Mensagem enviada com sucesso!</p>}

            <button type="submit" className={styles.Contact__Container__Form__Form__Button}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
