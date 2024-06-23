import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <h2>About Gowthami's Educational Courses</h2>
          <p>
            Gowthami's Educational Courses is a leading institute dedicated to providing high-quality education
            and training in various fields. With a team of experienced instructors and a commitment to excellence,
            we strive to empower our students with knowledge and skills that will help them succeed in their careers.
          </p>
          <p>
            Our mission is to make education accessible to everyone and to create a learning environment that fosters
            growth and development. Whether you're a beginner or an experienced professional, we have courses tailored
            to meet your needs and help you achieve your goals.
          </p>
          <p>
            Join us today and embark on a journey of learning and discovery with Gowthami's Educational Courses.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="https://media.istockphoto.com/id/1468830962/photo/attractive-young-female-university-student-using-a-laptop-while-studying.webp?b=1&s=170667a&w=0&k=20&c=2xaFv1MhGVNz9gkTgPoAmokrGZwxDsMTO9WqyZ03TkI="
            alt="About Us"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
