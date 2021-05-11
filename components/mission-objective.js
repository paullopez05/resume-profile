import styles from "../styles/MissionObjective.module.css";

const MissionObjective = (ctx) => {
  return (
    <div className={styles.container}>
      <div className={styles.objective}>
        <span className={styles['objective-title']}>Objective</span> 
        <div className={styles.summary}> {ctx.props.objective} </div>
      </div>
    </div>
  );
};

export default MissionObjective;
