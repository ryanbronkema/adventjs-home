import styles from './projectdescription.module.css';

export default function ProjectDescription(props: { 
    pageTitle: string, 
    pageDescription: string
  }) {
  return (
    <div className={styles.description}>
      <h1>{props.pageTitle}</h1>
      <p>{props.pageDescription}</p>
    </div>
  );
}