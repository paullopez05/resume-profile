import styles from "../styles/MissionObjective.module.css";

const MissionObjective = (ctx) => {
  return (
    <div>
      <div className={styles.objective}>
        <b>Objective:</b> {ctx.props.objective}
      </div>
    </div>
  );
};

export default MissionObjective;
