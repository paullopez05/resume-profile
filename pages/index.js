import styles from '../styles/Layout.module.css'
import UserContactInfo from '../components/user-contact-info'
import ObjectiveSkills from'../components/objective-skills'
import WorkExperience from '../components/work-experience'
import EducationDetails from '../components/education-details'

export default function Layout() {
  return (
      <div>
        <div className={styles.header}>
          <UserContactInfo></UserContactInfo>
        </div>

        <div className={styles['flex-container']}>
          <div className={styles['flex-item-left']}>
            <ObjectiveSkills></ObjectiveSkills>
          </div>
          <div className={styles['flex-item-center']}>
            <WorkExperience></WorkExperience>
          </div>

        </div>
        
        <div className={styles.footer}>
          <EducationDetails></EducationDetails>
        </div>

      </div>
  )
}
