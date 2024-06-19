import styles from "./ClassesPage.module.scss";

import { Link, useParams } from "react-router-dom";

import lessons from "@/data/lessons.json";
import ScrollToTop from "@/util/scrollToTop";
import { Paragraph, Title2, Title3 } from "@/components/Typografy";

const ClassesPage = () => {
  const param = Number(useParams().id);
  ScrollToTop(param);
  
  return (
    <main className={styles.ClassesPage}>
      <div className={styles.ClassesPage__container}>
        <header className={styles.ClassesPage__container__header}>
          <Title2>Explore nossas aulas para aprimorar suas habilidades e interesses</Title2>
          <Paragraph>Oferecemos uma ampla variedade de aulas gratuitas que abrangem desde desenvolvimento profissional até hobbies e interesses pessoais. Descubra novas paixões e aprenda com nossos instrutores experientes.</Paragraph>
        </header>
        <ul className={styles.ClassesPage__container__list}>
          {lessons.map((lesson) => (
            <li key={lesson.id} className={styles.ClassesPage__container__list__item}>
              <Link to={`/aulas/${lesson.id}`}>
                <Title3>{lesson.name}</Title3>
              </Link>
              <Paragraph>{lesson.small_description}</Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ClassesPage;
