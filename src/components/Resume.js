import { useEffect, useState } from "react"
import Posts from '../components/Posts'

const Resume = () => {
  
  const [data, setData] = useState()

  const getResumeData = () => {
    fetch('db.json')
    .then( (response) => {
      return response.json()
    })
    .then( payload => {
      setData( payload )
    })
    .catch(err => {
      console.log(`Error: ${err}`);
      return
    })
  }

  useEffect( () => {
    getResumeData()
  }, [])

    
  return (
    <div>
      <p> Resume page </p>
      { data && <Posts props={data} /> }
    </div>
  )
}

export default Resume