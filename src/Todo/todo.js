import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, FormControl, InputGroup, Form } from "react-bootstrap";
import navCss from "../css/nav.css";
import homeCss from "../css/home.css";
import Sidebar from "../navBar/sidebar";
import Card from "react-bootstrap/Card";
import defaultPost from "../images/defaultPost.svg";
import TopBar from "../navBar/topBar";
import {
  PlusSquare,
  Trash,
  TrashFill,
  PencilSquare,
  CheckSquareFill,
} from "react-bootstrap-icons";

function TodoPage() {
  const [feed, setFeeds] = useState("");
  const [feedsDB, setFeedsDB] = useState([]);
  const [style, setTodoStyle] = useState("todoStyle");
  const [checkedArr,setCheckedArr]=useState([]);

  console.log("feedsDB Length :", feedsDB.length);

  var feedBox = document.getElementById("feedBox");
  const AddFeed = (e) => {
    e.preventDefault();
    let obj = [...feedsDB];
    obj.push(feed);
    setFeedsDB(obj);
    e.target.reset();
    setTodoStyle("todoStyle")
  };
  console.log(feedsDB);

  const deleteTodo = (data) => {
    var tempDB = [...feedsDB];
    //   var feeds = tempDB.splice(data,1)
    var feeds = tempDB.filter((element, index) => {
      if (index != data) return element;
    });
    setFeedsDB(feeds);
    console.log(feedsDB);
    setTodoStyle("todoStyle")
  };

  const changeStyle=(index)=>{
    const temp=[...checkedArr]
    temp.push(index);
    setCheckedArr(temp);
    
  }

  return (
    <>
      <TopBar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1 sideNav">
            <Sidebar />
          </div>
          <div className="col-md-11">
            <div className="container" style={{ padding: "20px" }}>
              <h5 style={{ fontWeight: "400" }}>To-Do Tasks</h5>
              <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Card.Body>
                  <Form onSubmit={(e) => AddFeed(e)}>
                    <Form.Group
                      className="mb-1"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Control
                        onChange={(e) => {
                          setFeeds(e.target.value);
                        }}
                        placeholder="Add Your Tasks here..."
                        as="textarea"
                        rows={3}
                      />
                    </Form.Group>
                    <Button
                      variant="primary"
                      style={{
                        float: "right",
                        width: "120px",
                        fontSize: "16px",
                      }}
                      type="submit"
                    >
                      <PlusSquare /> Add Todo
                    </Button>
                  </Form>
                </Card.Body>
              </Card>

              {feedsDB.length < 1 ? (
                <Card style={{ marginTop: "20px", marginBottom: "20px" }}>
                  <Card.Body>
                    <img
                      src={defaultPost}
                      style={{
                        height: "150px",
                        marginBottom: "10px",
                        marginTop: "10px",
                      }}
                    />
                    <br />
                    <p style={{ textAlign: "center" }}>
                      {" "}
                      There are no Tasks here{" "}
                    </p>
                  </Card.Body>
                </Card>
              ) : (
                feedsDB.map((data, index) => (
                  <Card
                    key={index}
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                  >
                    <Card.Body>
                      <div className="row">
                        <div className="col-md-10">
                          <h4 className={checkedArr.includes(index)?"todoStyleChecked":style}> {data} </h4>
                        </div>
                        <div className="col-md-1">
                          <Button
                            style={{ float: "right" }}
                            variant="primary"
                            type="button"
                            onClick={()=>changeStyle(index)}
                          >
                            <CheckSquareFill/>
                          </Button>
                          </div>
                          <div className="col-md-1">
                          <Button
                            onClick={() => deleteTodo(index)}
                            variant="danger"
                            type="button"
                          >
                            <TrashFill />
                          </Button>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoPage;
