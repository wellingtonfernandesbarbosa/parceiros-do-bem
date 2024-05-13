import styles from "./CallToAction.module.scss";
import EventImage from "../../assets/evento.webp";
import CourseImage from "../../assets/curso.webp";
import TeamImage from "../../assets/equipe.webp";
import { Link } from "react-router-dom";

interface CallToAction {
  logo?: string;
  title: string;
  text: string;
  actionLink: string;
  buttonText: string;
  backgroundImage: string;
}

const callToAction: CallToAction[] = [
  {
    title: "Cursos",
    text: "Explore nossos cursos disponíveis.",
    actionLink: "/cursos",
    buttonText: "Cursos",
    backgroundImage: CourseImage,
  },
  {
    title: "Eventos",
    text: "Confira os próximos eventos em nossa agenda.",
    actionLink: "/eventos",
    buttonText: "Eventos",
    backgroundImage: EventImage,
  },
  {
    title: "Equipe",
    text: "Conheça nossa equipe de profissionais.",
    actionLink: "/equipe",
    buttonText: "Equipe",
    backgroundImage: TeamImage,
  },
];

const CallToAction = () => {
  return (
    <div className={styles.Container}>
      {callToAction.map((item, index) => (
        <div
          key={index}
          className={styles.Container__Item}
          style={{
            backgroundImage: `linear-gradient(rgba(125, 200, 229, 0.9), rgba(125, 200, 229, 0.9)), url(${item.backgroundImage})`,
          }}
        >
          <div className={styles.Container__Item__Content}>
            <h2 className={styles.Container__Item__Content__Title}>{item.title}</h2>
            <p className={styles.Container__Item__Content__Text}>{item.text}</p>
            <Link to={item.actionLink} className={styles.Container__Item__Content__Link}>
              {item.buttonText}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CallToAction;
