import styles from '../styles/EducationDetails.module.css'

const EducationDetails = (ctx) => {
  return (
    <div className={styles.education}>
      <div className={styles['education-details']}> 
        Education Details 
      </div>
        <>
          {ctx.props.map((item,key) =>
            <div>
              <span className={styles.institution}> {item.location} - </span>
              <span className={styles.institution}> {item.startDate} </span>
              <div className={styles['institution-details']}> {item.description} </div>
            </div>
            )
          }
        </>
    </div>
  )
}

export default EducationDetails