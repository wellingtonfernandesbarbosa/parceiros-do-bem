import styles from "./MarkdownToText.module.scss";
import ReactMarkdown from "react-markdown";

interface MarkdownToTextProps {
  children: string;
}

export default function MarkdownToText({ children }: MarkdownToTextProps) {
  return (
    <div className={styles.container}>
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
}
