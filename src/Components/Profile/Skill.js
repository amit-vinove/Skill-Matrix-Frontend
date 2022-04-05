import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

export default function Skill(props) {
    const ratingChanged = (newRating) => {
        console.log(newRating);
      }
    
  return (
    <div>
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
