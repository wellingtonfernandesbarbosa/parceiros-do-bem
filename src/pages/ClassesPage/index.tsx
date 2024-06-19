import styles from "./ClassesPage.module.scss";

import lessons from "@/data/classes.json";
import { Paragraph, Title3 } from "@/components/Typografy";

const ClassesPage = () => {
  return (
    <main className={styles.ClassesPage}>
      <div className={styles.ClassesPage__container}>
        <ul className={styles.ClassesPage__container__list}>
          {lessons.map((lesson) => (
            <li key={lesson.id} className={styles.ClassesPage__container__list__item}>
              <Title3>{lesson.course}</Title3>
              <Paragraph>{lesson.small_description}</Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default ClassesPage;
