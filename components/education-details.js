import styles from '../styles/EducationDetails.module.css'

const EducationDetails = () => {
  return (
    <div className={styles.education}>
        <div> Education Details </div>
        <div className={styles.institution}>
          Devry University 2017 
        </div>
          <div>
            Bachelors of Science in Computer Information Systems (CIS) for Web Development
          </div>
          <div className={styles.institution}>
            Executive Training Solutions - 2012
          </div>
          <div>
            Certification of completion - Crystal Reports and Microsoft SQL Server
          </div>
          <div className={styles.institution}>
            Gateway Community College – 10/2011
          </div>
          <div>
            Certificate of completion in Management of Clinical Information Technology
          </div>
        </div>
  )
}

export default EducationDetails