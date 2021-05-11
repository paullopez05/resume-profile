import styles from "../styles/Layout.module.css";
import UserContactInfo from "../components/user-contact-info";
import ObjectiveSkills from "../components/objective-skills";
import WorkExperience from "../components/work-experience";
import EducationDetails from "../components/education-details";
import MissionObjective from "../components/mission-objective";

function Layout(props) {
  return (
    <div>
      <div className={styles.header}>
        <UserContactInfo props={props.data.contactinfo}></UserContactInfo>
      </div>
      <div>
        <MissionObjective props={props.data}></MissionObjective>
      </div>

      <div className={styles["skillset-container"]}>
        <div className={styles["flex-container"]}>
          <div className={styles["flex-item-left"]}>
            <ObjectiveSkills props={props.data}></ObjectiveSkills>
          </div>
          <div className={styles["flex-item-center"]}>
            <WorkExperience props={props.data.workexperience}></WorkExperience>
          </div>
        </div>
      </div>

      <div className={styles["flex-container"]}>
        <div className={styles["flex-item-left"]}></div>
        <div className={styles["flex-item-center"]}>
          <EducationDetails props={props.data.education}></EducationDetails>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/resume");
  const data = await res.json();

  return {
    props: { data },
    // fallback: false
  };
}

export default Layout;
