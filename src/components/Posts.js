
const Posts = (ctx) => {
  // const posts = ctx.props
  
  console.log(ctx.props);
  
  return (
    <>
      {ctx.props.map((items, key) => (
        <div key={key}>
          {/* {items.objective} */}
          <ul>
          {items.webdevelopment.map((info,keys) => (
            <li key={keys}>
              {info}
            </li>
          ))}
          </ul>
        </div>
        )
      )}
    </>
  )
}

export default Posts