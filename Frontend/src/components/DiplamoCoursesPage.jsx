import React from 'react';
import DiplomaImage from '../images/diplamo.jpeg';
import CourseCard from './CourseCard';

const diplomaCourses = [
  {
    id: 1,
    title: 'Diploma in Computer Science',
    description: 'A comprehensive course on computer science fundamentals.',
    image: DiplomaImage,
    btntext: 'Enroll',
  },
  {
    id: 2,
    title: 'Diploma in Electrical Engineering',
    description: 'Learn about electrical engineering principles and practices.',
    image: DiplomaImage,
    btntext: 'Enroll',
  },
];

const DiplomaCoursesPage = () => {
  return (
    <div className="container mt-4">
      <h2>Diploma Courses</h2>
      <div className="row">
        {diplomaCourses.map((course) => (
          <div className="col-md-6" key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiplomaCoursesPage;
