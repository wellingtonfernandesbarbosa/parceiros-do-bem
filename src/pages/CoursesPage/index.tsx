import styles from "./CoursesPage.module.scss";

import { Link, useParams } from "react-router-dom";

import courses from "@/data/courses.json";
import ScrollToTop from "@/util/scrollToTop";
import { Paragraph, Title3 } from "@/components/Typografy";

const Courses = () => {
  const param = Number(useParams().id);

  ScrollToTop(param);
  return (
    <main className={styles.Courses}>
      <div className={styles.Courses__container}>
        <ul className={styles.Courses__container__list}>
          {courses.map((course) => (
            <li key={course.id} className={styles.Courses__container__list__item}>
              <Link to={`/cursos/${course.id}`}>
                <Title3>{course.course}</Title3>
              </Link>
              <Paragraph>{course.small_description}</Paragraph>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Courses;
