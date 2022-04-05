import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

export default function Skill(props) {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      }
    
  return (
    <div className="col-md-7">
    <br />
    <div>
      <h1>General Skills</h1>
    </div>{" "}
    <br />
    <div>
      <Card>
        <div className="row">
          <div className="col-md-12">
            <Card.Body>
              {/* <div>
                <h4>Oral Communication</h4>
                <Stack spacing={3} direction="row">

                  <Buttons variant="outlined"  >0 <br /> <>Not required</></Buttons>
                  <Buttons variant="outlined">1 <br /> <>No Capability</></Buttons>
                  <Buttons variant="outlined">2 <br /> <>Basic Level</></Buttons>
                  <Buttons classname='Rating' variant="outlined">3 <br /> <>Intermediate Level</></Buttons>
                  <Buttons variant="outlined">4 <br /> <>Advanced Level</></Buttons>
                  <Buttons variant="outlined">5 <br /> <>Expert/SME</></Buttons>
                </Stack>
              </div> <br /> <hr /> */}
              <div className="wrapper">
                
              <div className="skill">
                  <h4>Oral Communication:</h4>
                </div>
                <div>
                  <ReactStars
                    count={6}
                    value={3}
                    edit={props.edit}                            
                    size={50}
                    activeColor="#0073e6"
                  />
                </div>
              </div>
              <hr />
              <div className="wrapper">
                
                <div className="skill">
                    <h4>Written Communication:</h4>
                  </div>
                  <div>
                    <ReactStars
                      count={6}
                      edit={props.edit}
                      size={50}
                      activeColor="#0073e6"
                    />
                  </div>
                </div><hr />
                <div className="wrapper">
                
                <div className="skill">
                    <h4>Process Conformance:</h4>
                  </div>
                  <div>
                    <ReactStars
                      count={6}
                      edit={props.edit}
                      size={50}
                      activeColor="#0073e6"
                    />
                  </div>
                </div><hr />
                <div className="wrapper">
                
                <div className="skill">
                    <h4>Presentation Skills:</h4>
                  </div>
                  <div>
                    <ReactStars
                      count={6}
                      edit={props.edit}
                      onChange={ratingChanged}
                      size={50}
                      activeColor="#0073e6"
                    />
                  </div>
                </div><hr />
                <div className="wrapper">
                
                <div className="skill">
                    <h4>Leadership Skills:</h4>
                  </div>
                  <div>
                    <ReactStars
                      count={6}
                      edit={props.edit}
                      onChange={ratingChanged}
                      size={50}
                      activeColor="#0073e6"
                    />
                  </div>
                </div><hr/>
                <div className="wrapper">
                
                <div className="skill">
                    <h4>Management:</h4>
                  </div>
                  <div>
                    <ReactStars
                      count={6}
                      edit={props.edit}
                      onChange={ratingChanged}
                      size={50}
                      activeColor="#0073e6"
                    />
                  </div>
                </div>
            
            </Card.Body>
          </div>
        </div>
      </Card>
    </div>
    <br />
  </div>
  )
}
