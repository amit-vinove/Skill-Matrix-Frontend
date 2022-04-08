import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap'
import ReactStars from 'react-rating-stars-component';

export default function TeamSkillsQuestions(props) {
    const [subSkills, setSubSkills] = useState([]);

    useEffect(() => {
        const id = props.skillId;
        axios.get(`https://localhost:7074/api/SubSkills/GetAllSubSkillsInSkills?skillId=${id}`).then((response) => {
            setSubSkills(response.data);
            console.log(response.data);

        })
    }, [])
    return (
        
                    <div className="col-md-12">
                        {subSkills.map((ele) => {
                            return (
                                <Card.Body>
                            <div className="wrapper" >

                                <div className="skill">
                                    <h4>{ele.subskillsName}:</h4>
                                </div>
                                <div>
                                    <ReactStars
                                        count={6}
                                        value={3}
                                        size={50}
                                        activeColor="#0073e6"
                                    />
                                </div>
                            </div>
                            <hr />

                        </Card.Body>

                            );
                        })}
                        
                    </div>
               
    )
}
