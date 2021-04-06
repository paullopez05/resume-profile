import styles from '../styles/WorkExperience.module.css'

const WorkExperience = () => {
  return (
    <div className={styles.container}>

      <div className={styles['work-experience-title']}> 
        Work Experience: 
      </div>

          <div className={styles['company-name']}>
            CIT - Automation Developer 02/2020 - 08/2020
          </div>

          <div>
            <ul className={styles['job-description']}>
              <li>
                Work in an agile environment to develop, test, and deploy automation jobs requested by the other departments.
              </li>
              <li>
                Develop utilities to be used by the team to automate existing manual processes.
              </li>
              <li>
                Perform peer reviews on code written by the other developers to ensure quality and that coding standards where followed.
              </li>
              <li>
                Use Jira and ServiceNow to track progress and request approvals for deploying to production.
              </li>
            </ul>
          </div>

        <div className={styles['company-name']}>
          Edgenuity - Network Operations Center Engineer 07/2018 - 02/2020
        </div>
        <div>
          <ul className={styles['job-description']}>
            <li>
              Develop Web based applications to automate multiple tasks into a single a process to improve SLA’s
            </li>
            <li>
              Develop in house applications to utilize REST API’s to integrate existing systems together for improved automation.
            </li>
            <li>
              Develop automation tools using AWS’s Lambda, API Endpoint, SNS, and S3
            </li>
            <li>
              Monitor network and server infrastructure using solutions such as Orion, PRTG, Stackify, AppDynamics, and Grafana.
            </li>
          </ul>
        </div>


        <div className={styles['company-name']}>
          Carrington College - IT Administrator 07/2014 - 07/2018
        </div>
        <div>
          <ul className={styles['job-description']}>
            <li>
              Supported the Linux servers that hosted the company tools used by local and remote campuses.
            </li>
            <li>
              Developed Powershell tools to automate tasks such as mass software deployments and host configuration for other technicians to use.
            </li>
            <li>
              Documented best practices of employee functions and provided support to the other IT technicians.
            </li>
            <li>
              Developed an automated program in Powershell to increase the image deployment process to be 75% faster
            </li>
          </ul>
        </div>

        <div className={styles['company-name']}>
          Phoenix Medical Group - System Administrator 10/2011 - 07/2014
        </div>
        <div>
          <ul className={styles['job-description']}>
            <li>
              Develop SQL/Crystal reports for patient data requested by health care providers.
            </li>
            <li>
              Develop in house applications such as employee mileage calculators and automated patient file encryption for the release of their medical records.
            </li>
            <li>
              Deploy system wide changes through Windows Group Policies.
            </li>
            <li>
              Provided support for Windows based applications and EHR system.
            </li>
          </ul>
        </div>

        <div className={styles['company-name']}>
          Loan Resolution Corporation - Jr. Systems Administrator 01/2010 - 10/2011
        </div>
        <div>
          <ul className={styles['job-description']}>
            <li>
              Provided tech support for 200+ users in a windows environment via the company ticketing system and Active Directory.
            </li>
            <li>
              Built and maintained Windows 2003/2008 domain controllers, web, and NAS servers.
            </li>
            <li>
              Update and maintain the company CMS which served as the intranet portal for faculty and staff
            </li>
          </ul>
        </div>

    </div>
  )
}

export default WorkExperience