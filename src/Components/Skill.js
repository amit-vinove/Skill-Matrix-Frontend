import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

export default function Skill(props) {
  const ratingChanged = (newRating,i,e) => {

    props.quesKeys[i+2][1]=newRating;

    props.setQuesKeys(props.quesKeys);

  }
 
  const questions = props.questions;
  const EmpRatings=Object.values(props.data.data);

  return (
    <div>
      {questions.map((ele, i) => {
        return (
          <div key={i}>
            <div className="wrapper" >

              <div className="skill">
                <h4>{ele}:</h4>
              </div>
              <div>
                <ReactStars
                  count={6}
                  value={EmpRatings[i+2]}
                  edit={props.edit}
                  size={50}
                  onChange={(e)=>ratingChanged(e,i)}
                  activeColor="#0073e6"
                />
              </div>
            </div>
            <hr /></div>
        )

      })}
    </div>
  )
}
