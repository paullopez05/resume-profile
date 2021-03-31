import styles from '../styles/UserContactInfo.module.css'

const UserContactInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.fullname}> Paul Lopez </div>
        <div className={styles['contact-details']}> 
          Developer/Engineer 
        </div>
        <div className={styles['contact-details']}>
          paullopez05@gmail.com
        </div>
        <div className={styles['contact-details']}>
          480.518.0729
        </div>      
      </div>
    </div>
  )
}

export default UserContactInfo