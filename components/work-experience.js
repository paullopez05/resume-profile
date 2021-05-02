import styles from '../styles/WorkExperience.module.css'

const WorkExperience = (ctx) => {
  return (
    
    <div className={styles.container}>

      <div className={styles['work-experience-title']}> 
        Work Experience: 
      </div>
      
      { ctx.props.map(item => 

        <>
          <div className={styles.company}>
            <div className={styles['company-and-title']}>
              <span className={styles['company-name']}> {item.companyName} </span> - {item.title}
            </div>
            <div className={styles['work-dates']}>
              {item.startDate} to {item.endDate} </div>
          </div>

          <div>
            <ul className={styles['job-description']}>
              { item.jobTasks.map((tasks, key) => 
                  <>
                    <li key={key}> {tasks} </li>
                  </>
                )
              }
            </ul>
          </div>
        </>
        
        )
      }
        

    </div>
  
  )
}

export default WorkExperience