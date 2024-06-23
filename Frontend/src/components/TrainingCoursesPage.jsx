import React from 'react';
import CourseCard from './CourseCard';
import TrainingImage from '../images/training.jpg';

const trainingCourses = [
  // Add detailed courses for training here
  {
    id: 1,
    title: 'Data Science Training',
    description: 'Hands-on training on data science techniques.',
    image: TrainingImage,
    btntext:'Enroll',
  },
  {
    id: 2,
    title: 'Software Development Training',
    description: 'Learn software development with practical projects.',
    image: TrainingImage,
    btntext:'Enroll',
  },
];

const TrainingCoursesPage = () => {
  return (
    <div className="container mt-4">
      <h2>Training Courses</h2>
      <div className="row">
        {trainingCourses.map((course) => (
          <div className="col-md-6" key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingCoursesPage;
