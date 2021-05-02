export default function handler(req, res) {
  const { id } = req.query;
  console.log(id);

  res.status(200).json({
    contactinfo: {
      name: "Paul Lopez",
      email: "paullopez05@gmail.com",
      title: "Developer/Engineer",
      phone: "480.518.0729",
    },
    objective:
      "Developer/Engineer with capability to build scalable systems within cloud platforms and developing automation processes within the front & back end of the systems.",
    webdevelopment: [
      "NodeJS",
      "VueJS",
      "Bootstrap",
      "MySql",
      "MSSQL",
      "Python",
      "Selenium",
      "PHP",
    ],
    itadministration: [
      "AWS",
      "Jira",
      "Confluence",
      "Docker",
      "Kubernetes",
      "Windows/Linux Server",
      "Exchange",
      "Active Directory",
      "Citrix XenServer",
      "VMware",
      "Bash",
      "Powershell",
    ],
    workexperience: [
      {
        companyName: "Choice Hotels International",
        title: "Site Reliability Engineer",
        startDate: "2020-08",
        endDate: "Current",
        jobTasks: [
          "Monitor and alert on business applications for on-prem & cloud (AWS) using App Dynamics, Orion, Prometheus, and Grafana.",
          "Develop Python scripts using Selenium to automate site testing for the Choice Hotels website.",
          "Deployed kubernetes clusters for the developing new monitoring tools for operations within the AWS environment using docker containers.",
          "Developed applications to extend in house and 3rd party systems to streamline processes using the api endpoints.",
          "Provided working sessions to the operations team to train in coding on various languages forautomation, troubleshooting, and skills development."
        ],
      },
      {
        companyName: "CIT",
        title: "Automation Developer",
        startDate: "2020-08",
        endDate: "2021-04",
        jobTasks: [
          "Work in an agile environment to develop, test, and deploy automation jobs requested by the other departments.",
          "Develop utilities to be used by the team to automate existing manual processes.",
          "Perform peer reviews on code written by the other developers to ensure quality and that coding standards where followed.",
          "Use Jira and ServiceNow to track progress and request approvals for deploying to production.",
        ],
      },

      {
        companyName: "Edgenuity",
        title: "Network Operations Center Engineer",
        startDate: "2018-07",
        endDate: "2020-02",
        jobTasks: [
          "Develop Web based applications to automate multiple tasks into a single a process to improve SLA’s",
          "Develop in house applications to utilize REST API’s to integrate existing systems together for improved automation.",
          "Build automation tools using AWS’s Lambda, API Endpoint, SNS, and S3",
          "Monitor network and server infrastructure using solutions such as Orion, PRTG, Stackify, AppDynamics, and Grafana."
        ],
      },

      {
        companyName: "Carrington College",
        title: "IT Administrator",
        startDate: "2014-07",
        endDate: "2018-07",
        jobTasks: [
          "Supported the Linux servers that hosted the company tools used by local and remote campuses.",
          "Developed Powershell tools to automate tasks such as mass software deployments and host configuration for other technicians to use.",
          "Documented best practices of employee functions and provided support to the other IT technicians.",
          "Developed an automated program in Powershell to increase the image deployment process to be 75% faster."
        ],
      },

      {
        companyName: "Phoenix Medical Group",
        title: "System Administrator",
        startDate: "2011-10",
        endDate: "2014-07",
        jobTasks: [
          "Develop SQL/Crystal reports for patient data requested by health care providers.",
          "Develop in house applications such as employee mileage calculators and automated patient file encryption for the release of their medical records",
          "Deploy system wide changes through Windows Group Policies.",
          "Provided support for Windows based applications and EHR system."
        ],
      },

      {
        companyName: "Loan Resolution Corporation",
        title: "Jr. System Administrator",
        startDate: "2010-01",
        endDate: "2011-10",
        jobTasks: [
          "Provided tech support for 200+ users in a windows environment via the company ticketing system and Active Directory.",
          "Built and maintained Windows 2003/2008 domain controllers, web, and NAS servers.",
          "Update and maintain the company CMS which served as the intranet portal for faculty and staff"
        ],
      },
    ],
    education : [
      {
        "location" : "Devry University",
        "startDate" : "2017",
        "endDate" : "",
        "description" : "Bachelors of Science in Computer Information Systems (CIS) for Web Development"
      },
      {
        "location" : "Executive Training Solutions",
        "startDate" : "2012",
        "endDate" : "",
        "description" : "Certification of completion - Crystal Reports and Microsoft SQL Server"
      },
      {
        "location" : "Gateway Community College ",
        "startDate" : "2011",
        "endDate" : "",
        "description" : "Certificate of completion in Management of Clinical Information Technology"
      }
    ]
    
  })
}
