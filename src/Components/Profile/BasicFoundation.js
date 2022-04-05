import React, { useEffect, useState } from 'react'

export default function BasicFoundation() {
    const loggedUsername = localStorage.getItem('User')
  const profileURL = `http://localhost:5032/api/Employee/GetEmployeeByUsername?username=${loggedUsername}`
  const [profile, setProfile] = useState([])
  const [editform,setEditform]=useState(false);

  useEffect(() => {
    axios.get(profileURL).then((response) => {
      setProfile(response.data)
    })
  }, [])
const changeComp=()=>{
  setEditform(true);
}
const cancelEdit=()=>{
  setEditform(false);
}
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 sideNav">
            <Sidebar />
          </div>
          
          {/* {editform === false && (
            <Skill edit={false}/>
        
      )}
      {editform === true && (
            <Skill edit={true}/>
        
      )} */}
          
        </div>
        <div className="rating_info col-md-3">
        <h1>Rating info</h1>
        <Card>
          <Card.Body>
            <div className="info">
              <div className="info_rating">
                <h6>Not Required</h6>
              </div>
              <div>
              <ReactStars
                              count={6}
                              value={1}
                              edit={false}
                              size={35}
                              activeColor="#0073e6"
                            />
              </div>
              <div className="info_rating">
                <h6>No Capability</h6>
              </div>
              <div>
              <ReactStars
                              count={6}
                              value={2}
                              edit={false}
                              size={35}
                              activeColor="#0073e6"
                            />
              </div>
              <div className="info_rating">
                <h6>Basic Level</h6>
              </div>
              <div>
              <ReactStars
                              count={6}
                              value={3}
                              edit={false}
                              size={35}
                              activeColor="#0073e6"
                            />
              </div>
              <div className="info_rating">
                <h6>Intermediate Level</h6>
              </div>
              <div>
              <ReactStars
                              count={6}
                              value={4}
                              edit={false}
                              size={35}
                              activeColor="#0073e6"
                            />
              </div>
              <div className="info_rating">
                <h6>Advanced Level</h6>
              </div>
              <div>
              <ReactStars
                              count={6}
                              value={5}
                              edit={false}
                              size={35}
                              activeColor="#0073e6"
                            />
              </div>
              <div className="info_rating">
                <h6>Expert/SME</h6>
              </div>
              <div>
              <ReactStars
                              count={6}
                              value={6}
                              edit={false}
                              size={35}
                              activeColor="#0073e6"
                            />
              </div>

            </div>
          </Card.Body>
        </Card>
        {editform === false && (
          <>
          <hr/>
          <br/>
              <div className='editbutton'>
              <Buttons variant={"outlined"}  color={"info"} onClick={changeComp}><BsPencilSquare size={30}/>&nbsp;&nbsp;Edit</Buttons>
              </div>
              
              <br/><br/>
              </>
        )}
        {editform === true && (
          <>
          <hr/>
          <br/>
          <div className='editbutton'>
          <Buttons variant={"outlined"} color={"error"} onClick={cancelEdit}><MdOutlineCancelPresentation size={30}/>&nbsp;&nbsp;Cancel Edit</Buttons>
              <br/><br/>
              <Buttons variant={"outlined"} color={"success"}><MdSend size={30}/>&nbsp;&nbsp;Submit</Buttons>
              <br/><br/>

          </div>
              
              </>
        )}
       
      </div>
      </div>
      
    </>
  )
}
