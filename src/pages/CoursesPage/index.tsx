import styles from "./CoursesPage.module.scss";

import { Link, useParams } from "react-router-dom";

import courses from "@/data/courses.json";
import ScrollToTop from "@/util/scrollToTop";
import { Paragraph, Title2, Title3 } from "@/components/Typografy";

const CoursesPage = () => {
  const param = Number(useParams().id);

  ScrollToTop(param);
  return (
    <main className={styles.Courses}>
      <div className={styles.Courses__container}>
        <header className={styles.Courses__container__header}>
          <Title2>Explore Nossos Cursos de Capacitação Profissional</Title2>
          <Paragraph>
            Oferecemos uma variedade de cursos projetados para desenvolver suas habilidades e prepará-lo para o mercado de trabalho. Desde cuidados pessoais até habilidades técnicas, nossos cursos são ministrados por profissionais experientes e estão
            disponíveis a preços acessíveis. Encontre o curso ideal para você e comece sua jornada de aprendizado hoje mesmo!
          </Paragraph>
        </header>
        <ul className={styles.Courses__container__list}>
          {courses.map((course) => (
            <li key={course.id} className={styles.Courses__container__list__item}>
              <Link to={`/cursos/${course.id}`}>
                <Title3>{course.name}</Title3>
              </Link>
              <Paragraph>{course.small_description}</Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default CoursesPage;
