import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

const BlogCard = ({ title, author, desc, img, link }) => {
  return (
      <Card border="primary" style={{ width: '250px', margin:'1rem', display:"inline-block" }}>
        <Card.Header as="h5">{title}</Card.Header>
        <Card.Body>
          <Card.Text>{author}</Card.Text>
          <Card.Text>{desc}</Card.Text>
          <Card.Img variant="top" src={img} alt={title} width="100%" />
          <Card.Body>
            <Link to={link}>Read more</Link>
          </Card.Body>
        </Card.Body>
      </Card>
      
  );
};

export default BlogCard;
