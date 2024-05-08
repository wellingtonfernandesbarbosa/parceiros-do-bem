import styles from "./Typografy.module.scss";

interface TypografyProps {
  children: React.ReactNode;
}

export const Paragraph = ({ children }: TypografyProps) => {
  return <p className={styles.Paragraph}>{children}</p>;
}

export const Title1 = ({ children }: TypografyProps) => {
  return <h1 className={styles.Title1}>{children}</h1>;
}

export const Title2 = ({ children }: TypografyProps) => {
  return <h2 className={styles.Title2}>{children}</h2>;
}

export const Title3 = ({ children }: TypografyProps) => {
  return <h3 className={styles.Title3}>{children}</h3>;
}

export const Title4 = ({ children }: TypografyProps) => {
  return <h4 className={styles.Title4}>{children}</h4>;
}

export const Title5 = ({ children }: TypografyProps) => {
  return <h5 className={styles.Title5}>{children}</h5>;
}

export const Title6 = ({ children }: TypografyProps) => {
  return <h6 className={styles.Title6}>{children}</h6>;
}
