import { useParams } from "react-router-dom";
import styles from "./CoursePage.module.scss";

import courses from "@/data/courses.json";
import MarkdownToText from "@/components/MarkdownToText";
import { Title2 } from "@/components/Typografy";
import { useUpdateUrl } from "@/hooks";

const CoursePage = () => {
  const param = Number(useParams().id);

  const course = courses.find((e) => e.id === param);
  if (!course) return null;
  
  const updateUrl = useUpdateUrl;
  updateUrl(course?.course);

  return (
    <main className={styles.CoursePage}>
      <div className={styles.CoursePage__container}>
        <header className={styles.CoursePage__container__header}>
          <Title2>{course?.course}</Title2>
          <div className={styles.CoursePage__container__header__info}>
            <div>
              Valor: <strong>{course?.solidarity_price}</strong>
            </div>
            <div>
              Instrutores: <strong>{course?.teachers.join(", ")}</strong>
            </div>
            <div>
              {course?.day.length === 1 ? "Dia" : "Dias"}: <strong>{course?.day[0]} e {course?.day[1]}</strong>
            </div>
            <div>
              Hora:{" "}
              <strong>
                {course?.start_time} - {course?.end_time}
              </strong>
            </div>
          </div>
        </header>
        <div className={styles.CoursePage__container__content}>
          <MarkdownToText>{course?.description}</MarkdownToText>
        </div>
      </div>
    </main>
  );
};

export default CoursePage;
