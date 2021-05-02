import styles from "../styles/ObjectiveSkills.module.css";

const ObjectiveSkills = (ctx) => {
  return (
    <div className={styles["skillset-container"]}>
      <div className={styles["objective-field"]}> Web Development </div>
      <div className={styles["objective-skillset"]}>
        <ul className={styles["skill-list"]}>
            { ctx.props.webdevelopment.map( (obj, key) => 
              <li key={ key }> 
                { obj } 
              </li>
            )}
        </ul>
      </div>

      <div className={styles["objective-field"]}>IT Administration:</div>

      <div className={styles["objective-skillset"]}>
        <ul className={styles["skill-list"]}>
              {ctx.props.itadministration.map( (obj, key) => 
                <li key={ key }>
                  { obj }
                </li>
              )}
            </ul>
      </div>
    </div>
  );
};

export default ObjectiveSkills;
