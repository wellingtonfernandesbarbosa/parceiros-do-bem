import styles from "./CallToAction.module.scss";
import CourseImage from "@/assets/curso.webp";
import ClassImage from "@/assets/classImage.webp";
import ServiceImage from "@/assets/serviceImage.webp";
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
    title: "Aulas",
    text: "Conheça nossas aulas disponíveis.",
    actionLink: "/aulas",
    buttonText: "Aulas",
    backgroundImage: ClassImage,
  },
  {
    title: "Serviços",
    text: "Conheça nossos serviços disponíveis.",
    actionLink: "/servicos",
    buttonText: "Serviços",
    backgroundImage: ServiceImage,
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
