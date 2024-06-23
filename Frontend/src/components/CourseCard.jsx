import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={course.image} style={{ height: '180px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        <Link to={`/courses/${course.id}`}>
          <Button variant="primary">{course.btntext}</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default CourseCard;
