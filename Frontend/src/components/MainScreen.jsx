import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EducationalHub from '../images/hub.png';
import { Link } from 'react-router-dom';

function MainScreen() {
  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="row w-100">
        <div className="col-md-6 p-4 d-flex flex-column justify-content-center bg-white">
          <h1 className="text-center mb-4" style={{ color: 'blue' }}>Gowthami's Educational Hub</h1>
          <p className="text-center">Welcome to Gowthami's Educational Course platform where you can browse, enroll in, and complete various educational courses to enhance your knowledge and skills.</p>
          <div className="mt-4 d-flex justify-content-center">
            <Link to="/register" className="btn btn-primary mx-2">Register</Link>
            <Link to="/login" className="btn btn-secondary mx-2">Login</Link>
          </div>
        </div>
        <div className="col-md-6 p-4 d-flex justify-content-center align-items-center bg-light">
          <img src={EducationalHub} alt="Educational Courses" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

export default MainScreen;
