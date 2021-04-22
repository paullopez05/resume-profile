import styles from '../styles/Layout.module.css'
import UserContactInfo from '../components/user-contact-info'
import ObjectiveSkills from'../components/objective-skills'
import WorkExperience from '../components/work-experience'
import EducationDetails from '../components/education-details'
import MissionObjective from '../components/mission-objective'
const db = require("../db.json")

export default function Layout(db) {
  return (
      <div>
        <div className={styles.header}>
          <UserContactInfo info={db}></UserContactInfo>
        </div>
        <div>
          <MissionObjective></MissionObjective>
        </div>

        <div className={styles['skillset-container']}>
          <div className={styles['flex-container']}>
            <div className={styles['flex-item-left']}>
              <ObjectiveSkills></ObjectiveSkills>
            </div>
            <div className={styles['flex-item-center']}>
              <WorkExperience></WorkExperience>
            </div>
          </div>
        </div>

        <div className={styles['flex-container']}>
          <div className={styles['flex-item-left']}></div>
          <div className={styles['flex-item-center']}>
            <EducationDetails></EducationDetails>
          </div>
        </div>

      </div>
  )
}
