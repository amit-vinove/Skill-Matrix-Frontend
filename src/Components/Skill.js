import React from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component'

export default function Skill(props) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  }
  const questions = props.questions;
  return (
    <div>
      {questions.map((ele, i) => {
        return (
          <>
            <div className="wrapper" key={i}>

              <div className="skill">
                <h4>{ele}:</h4>
              </div>
              <div>
                <ReactStars
                  count={6}
                  value={0}
                  edit={props.edit}
                  size={50}
                  activeColor="#0073e6"
                />
              </div>
            </div>
            <hr /></>
        )

      })}
    </div>
  )
}
