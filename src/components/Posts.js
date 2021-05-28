
const Posts = (ctx) => {
  // const posts = ctx.props
  
  console.log(ctx.props);
  
  return (
    <>
      {ctx.props.map((items, key) => (
        <div key={key}>

          <div>
            <div> {items.contactinfo.name} </div>
            <div> {items.contactinfo.email} </div>
            <div>{items.contactinfo.title} </div>
            <div>{items.contactinfo.phone} </div>
          </div>
          <br />
          {items.objectives.objective}
          <br /><br />

          {items.webdevelopment.map((info,keys) => (
            <div key={keys}>
              {info}
            </div>
          ))}

          <br />
          <br />


          {items.itadministration.map((info,keys) => (
            <div key={keys}>
              {info}
            </div>
          ))}
          
          <br /> <br />

          {items.workexperience.map((info,keys) => (
            <div key={keys}>
              {info.companyName} <br />
              {info.title} <br />
              {info.startDate} <br />
              {info.jobTasks} <br /> <br />
            </div>
          ))}

          <br /> <br />

          {items.education.map((info,keys) => (
            <div key={keys}>
              {info.location}
              {info.startDate}
              {info.endDate}
              {info.Description}
            </div>
          ))}
          
        </div>
        )
      )}
    </>
  )
}

export default Posts