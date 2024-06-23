import React from 'react';
import EngineeringImage from '../images/engineering.jpeg';
import CourseCard from './CourseCard';

const engineeringCourses = [
  // Add detailed courses for engineering here
  {
    id: 1,
    title: 'Mechanical Engineering',
    description: 'An in-depth course on mechanical engineering concepts.',
    image: EngineeringImage,
    btntext:'Enroll',
  },
  {
    id: 2,
    title: 'Civil Engineering',
    description: 'Learn about the design and construction of infrastructure.',
    image:EngineeringImage,
    btntext:'Enroll',
  },
];

const EngineeringCoursesPage = () => {
  return (
    <div className="container mt-4">
      <h2>Engineering Courses</h2>
      <div className="row">
        {engineeringCourses.map((course) => (
          <div className="col-md-6" key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EngineeringCoursesPage;
