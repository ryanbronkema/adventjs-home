import styles from './projectdescription.module.css';

export default function ProjectDescription(props: { 
    title: string, 
    description: string
  }) {
  return (
    <div>
      <div className={styles.description}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  );
}