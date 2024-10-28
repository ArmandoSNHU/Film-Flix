import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const MovieList = ({ movies }) => {
  // Check if movies exist, to avoid errors
  if (!movies || movies.length === 0) {
    return <p>No movies available.</p>;
  }

  return (
    <Row>
      {movies.map((movie, index) => (
        <Col key={index} xs={12} md={4} lg={3} className="mb-4">
          <Card>
            <Card.Img variant="top" src={movie.thumbnail} alt={movie.title} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default MovieList;
