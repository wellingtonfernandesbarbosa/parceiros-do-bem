import styles from "./ClassPage.module.scss";

import { useParams } from "react-router-dom";

import lessons from "@/data/classes.json";
import { useUpdateUrl } from "@/hooks";
import { Title2 } from "@/components/Typografy";
import MarkdownToText from "@/components/MarkdownToText";

const ClassPage = () => {
  const param = Number(useParams().id);

  const lesson = lessons.find((e) => e.id === param);
  if (!lesson) return null;

  const updateUrl = useUpdateUrl;
  updateUrl(lesson?.name);

  return (
    <main className={styles.ClassPage}>
      <div className={styles.ClassPage__container}>
        <header className={styles.ClassPage__container__header}>
          <Title2>{lesson?.name}</Title2>
          <div className={styles.ClassPage__container__header__info}>
            <div>
              Instrutores: <strong>{lesson?.teachers.join(", ")}</strong>
            </div>
            <div>
              {lesson?.day.length === 1 ? "Dia" : "Dias"}:{" "}
              <strong>
                {lesson?.day[0]} e {lesson?.day[1]}
              </strong>
            </div>
            <div>
              Hora:{" "}
              <strong>
                {lesson?.start_time} - {lesson?.end_time}
              </strong>
            </div>
            <div>
              Valor: <strong>{lesson?.solidarity_price}</strong>
            </div>
          </div>
        </header>
        <div className={styles.ClassPage__container__content}>
          <MarkdownToText>{lesson?.description}</MarkdownToText>
        </div>
      </div>
    </main>
  );
};

export default ClassPage;
