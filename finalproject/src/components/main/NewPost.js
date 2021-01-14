import { React, useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import validator from "validator";

const NewPost = () => {
  const [newPost, setNewPost] = useState({
    title: "",
    author: "",
    desc: "",
    img: "",
  });

  const [validated, setValidated] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const changeValueHandler = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const validURL = (value) => {
    if (validator.isURL(value)) {
      setErrorMessage("URL is valid");
    } else {
      setErrorMessage("URL is not valid");
    }
  };

  const addPostHandler = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      alert("There is an error");
    } else {
      // AlertSuccess()
      axios.post("http://localhost:3001/posts", newPost).then((res) => {
        console.log(res.data);
        
      });
    }

    setValidated(true);
  };

  return (
    <>
      <Jumbotron>
        <h1>Create A New Post</h1>
        <hr />
        <Form noValidate validated={validated} onSubmit={addPostHandler} >
          <Form.Group as={Row} controlId="validationCustom01">
            <Form.Label column sm={2} htmlFor="title">
              Title
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="text"
                placeholder="Title"
                id="title"
                name="title"
                onChange={changeValueHandler}
                required
              />
              <Form.Control.Feedback>Looks OK!</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="validationCustom02">
            <Form.Label column sm={2} htmlFor="author">
              Author
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="text"
                placeholder="Author"
                id="author"
                name="author"
                onChange={changeValueHandler}
                required
              />
              <Form.Control.Feedback>Looks OK!</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="validationCustom03">
            <Form.Label column sm={2} htmlFor="desc">
              Description
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="text"
                placeholder="Description"
                id="desc"
                name="desc"
                onChange={changeValueHandler}
                required
              />
              <Form.Control.Feedback>Looks OK!</Form.Control.Feedback>
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="validationCustom04">
            <Form.Label column sm={2} htmlFor="img">
              Image URL
            </Form.Label>
            <Col sm={3}>
              <Form.Control
                type="text"
                placeholder="Image URL"
                id="img"
                name="img"
                onChange={(e) => validURL(e.target.value)}
                required
              />
              {errorMessage}
            </Col>
          </Form.Group>
          <Button type="submit" className="mb-2">
            ADD NEW POST
          </Button>
        </Form>
      </Jumbotron>
    </>
  );
};

export default NewPost;
