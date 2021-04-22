import styles from '../styles/ObjectiveSkills.module.css'

const ObjectiveSkills = () => {
  return(
    <div className={styles['skillset-container']}>
      <div className={styles['objective-field']}>
       Web Development
      </div>

      <div className={styles['objective-skillset']}>
        <ul className={styles['skill-list']}>
          <li> NodeJS </li>
          <li>VueJS</li>
          <li> SailsJS </li>
          <li> Jquery </li>
          <li> Html/CSS </li>
          <li> Bootstrap </li>
          <li> MySql </li>
          <li> MSSQL </li>
          <li> Python </li>
          <li> PHP </li>
          <li> Selenium </li>
        </ul>
      </div>
             
      <div className={styles['objective-field']}>
        IT Administration:
      </div>

      <div className={styles['objective-skillset']}>
      <ul className={styles['skill-list']}>
          <li> AWS </li>
          <li> Jira </li>
          <li> Confluence </li>
          <li> Docker </li>
          <li> Windows Server </li>
          <li> Linux </li>
          <li> Exchange </li>
          <li> Active Directory </li>
          <li> MS SQL Database </li>
          <li> Citrix XenServer </li>
          <li> VMware </li>
          <li> Bash </li>
          <li> Powershell </li>
        </ul>
      </div>
          
    </div>
  )
}

export default ObjectiveSkills