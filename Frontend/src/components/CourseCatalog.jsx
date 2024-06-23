import React from 'react';
import CourseCard from './CourseCard';
import DiplomaImage from '../images/diplamo.jpeg';
//import DiplomaImage from '../images/diploma.jpeg';
import EngineeringImage from '../images/engineering.jpeg';
import TrainingImage from '../images/training.jpg';
import CertificateImage from '../images/certificate.jpg';

const courses = [
  {
    id: 'diploma',
    title: 'Diploma Courses',
    description: 'Learn the basics of various diploma courses.',
    image: DiplomaImage,
    btntext:'More Details',
  },
  {
    id: 'engineering',
    title: 'Engineering Courses',
    description: 'Explore advanced topics in engineering with this comprehensive course.',
    image: EngineeringImage,
    btntext:'More Details',
  },
  {
    id: 'certification',
    title: 'Certification Courses',
    description: 'Get certified in various fields with our certification courses.',
    image: CertificateImage,
    btntext:'More Details',
  },
  {
    id: 'training',
    title: 'Training Courses',
    description: 'Hands-on training courses for practical knowledge.',
    image: TrainingImage,
    btntext:'More Details',
  },
];

const CourseCatalog = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {courses.map((course) => (
          <div className="col-md-6" key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCatalog;
