import styles from '../styles/ContactInfo.module.css'

const UserContactInfo = () => {
  return (
    <div className={styles.main}>
        <div className={styles.name}> Paul Lopez </div>
        <div className={styles.contactinfo}> Developer/Engineer </div>
        <div className={styles.contactinfo}> paullopez05@gmail.com </div>
        <div className={styles.contactinfo}> 480.518.0729 </div>      
    </div>
  )
}

export default UserContactInfo