import MarkdownToText from "../MarkdownToText";
import { Title2 } from "../Typografy";
import styles from "./DetailSection.module.scss";

interface DetailSectionProps {
  id: number;
  name: string;
  small_description: string;
  description: string;
  teachers: string[];
  day: string[];
  start_time: string;
  end_time: string;
  solidarity_price: string;
}

const DetailSection = ({ detail }: { detail: DetailSectionProps }) => {
  return (
    <div className={styles.DetailSection__container}>
      <header className={styles.DetailSection__container__header}>
        <Title2>{detail?.name}</Title2>
        <div className={styles.DetailSection__container__header__info}>
          <div>
            Instrutores: <strong>{detail?.teachers.join(", ")}</strong>
          </div>
          <div>
            {detail?.day.length === 1 ? "Dia" : "Dias"}:{" "}
            <strong>
              {detail?.day[0]} e {detail?.day[1]}
            </strong>
          </div>
          <div>
            Hora:{" "}
            <strong>
              {detail?.start_time} - {detail?.end_time}
            </strong>
          </div>
          <div>
            Valor: <strong>{detail?.solidarity_price}</strong>
          </div>
        </div>
      </header>
      <div className={styles.DetailSection__container__content}>
        <MarkdownToText>{detail?.description}</MarkdownToText>
      </div>
    </div>
  );
};

export default DetailSection;
