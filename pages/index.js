import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import UserContactInfo from '../components/user-contact-info'
import ObjectiveSkills from'../components/objective-skills'
import WorkExperience from '../components/work-experience'
import EducationDetails from '../components/education-details'

export default function Layout() {
  return (
    <div className={styles.container}>

      <div>
        <UserContactInfo></UserContactInfo>
      </div>

      <div>
        <ObjectiveSkills></ObjectiveSkills>
      </div>

      <div>
        <WorkExperience></WorkExperience>
      </div>

      <div>
        <EducationDetails></EducationDetails>
      </div>

    </div>
  )
}
