import { Container, Row, Col } from 'react-bootstrap'

const Posts = (ctx) => {
  const listItem = {
    listStyleType:"square" 
  }
  const firstlast = {
    fontSize: "2rem",
  }

  const itadminskills = {
    float: "left"
  }

  return (
    <>
      {ctx.props.map((items, key) => (
        <div key={key}>
          <Container fluid>
            <Row>
              <Col md={3} className="mt-8">
                <Row className="justify-content-center mt-4">
                  <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                      <div className="align-middle pl-2">
                        <img src="https://via.placeholder.com/200" alt="" srcSet="" />
                      </div>
                      <div style={firstlast}>
                        {items.contactinfo.name}
                      </div>
                      <p className="lead">
                        <div> {items.contactinfo.email} </div>
                        <div> {items.contactinfo.title} </div>
                        <div> {items.contactinfo.phone} </div>
                      </p>
                    </div>
                  </div>
                </Row>
              </Col>
              
              <Col md={9} className="">
                <Row className="justify-content-xs-center pt-4 pb-5">
                  <div className="pl-4">
                    <strong> {items.objectives.objective} </strong>
                  </div>
                </Row>
            
                <Row>
                <Col className="text-left mb-2">
                  <div className="pl-4" style={{ wordWrap: "break-word"}}>
                    {items.webdevelopment.map((elem,keys) => (
                      <div style={{float:"left"}} >
                        <span key={keys} className={`badge badge-pill badge-${Object.keys(elem.icon)} mr-1`}>
                          { Object.values(elem.icon) }
                        </span>
                      </div>
                    ))}
                  </div>  
                </Col>
              </Row>
                <Row>
                  <Col className="text-left mb-4">
                    <div className="pl-4">
                      {items.itadministration.map((elem,keys) => (
                        <div style={itadminskills}>
                          <span key={keys} className="badge badge-pill badge-primary mr-1">
                            {elem}
                          </span>
                        </div>
                      ))}
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <div className="pl-4">
                      {items.workexperience.map((info,keys) => (
                        <div key={keys}>
                          <Row className="pb-3 pt-4 text-left">
                            <Col md={4}> <strong> {info.companyName} </strong> </Col>
                            <Col md={4}> <strong> {info.title} </strong></Col>
                            <Col md={4}> <strong> {info.startDate} - {info.endDate} </strong> </Col>
                          </Row>
                          <div className="ml-2" style={{borderLeft: "3px solid #d8d8d8"}}>
                            <ul className="text-left" style={listItem}>
                                { info.jobTasks.map((elem, keys) => (
                                  <li className="mb-1">
                                    {elem}
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                    {items.education.map((info,keys) => (
                      <div key={keys}>
                        {info.location}
                        {info.startDate}
                        {info.endDate}
                        {info.Description}
                      </div>
                    ))}
                  </Col>
                </Row>
            </Col>
            </Row>
          </Container>
  
        </div>
        )
      )}
    </>
  ) // end render

 

}

export default Posts