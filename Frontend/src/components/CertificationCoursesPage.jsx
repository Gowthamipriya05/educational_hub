import React from 'react';
import CourseCard from './CourseCard';
import CertificateImage from '../images/certificate.jpg';

const certificationCourses = [
  // Add detailed courses for certification here
  {
    id: 1,
    title: 'Project Management Certification',
    description: 'Become a certified project manager with this course.',
    image: CertificateImage,
    btntext:'Enroll',
  },
  {
    id: 2,
    title: 'Cyber Security Certification',
    description: 'Learn about cyber security and get certified.',
    image: CertificateImage,
    btntext:'Enroll',
  },
];

const CertificationCoursesPage = () => {
  return (
    <div className="container mt-4">
      <h2>Certification Courses</h2>
      <div className="row">
        {certificationCourses.map((course) => (
          <div className="col-md-6" key={course.id}>
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationCoursesPage;
