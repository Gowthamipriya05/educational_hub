import React from "react";
import RegisterPage from "./components/RegisterPage";
import CourseCard from "./components/CourseCard";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import MainScreen from "./components/MainScreen";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./index.css";
import NotFound from "./components/NotFound";
import CourseCatalog from "./components/CourseCatalog";
import NavBar from "./components/NavBar";
import DiplomaCoursesPage from "./components/DiplamoCoursesPage";
//import DiplomaCoursesPage from "./components/DiplomaCoursesPage";
import EngineeringCoursesPage from "./components/EngineeringCoursesPage";
import CertificationCoursesPage from "./components/CertificationCoursesPage";
import TrainingCoursesPage from "./components/TrainingCoursesPage";
import DiplomaCourseContent from "./components/DiplomaCourseContent";
import CourseContentPage from "./components/CourseContentPage";
import TrainingCourseContent from "./components/TrainingCourseContent";
import CertificationCourseContent from "./components/CertificationCourseContent";
import EngineeringCourseContent from './components/EngineeringCourseContent';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<MainScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} /> 
        <Route path="/course/catalog" element={<CourseCatalog />} />
        <Route path="/courses/diploma" element={<DiplomaCoursesPage />} />
        <Route path="/courses/engineering" element={<EngineeringCoursesPage />} />
        <Route path="/courses/certification" element={<CertificationCoursesPage />} />
        <Route path="/courses/training" element={<TrainingCoursesPage />} />
        <Route path="/courses/:id" element={<DiplomaCourseContent />} />
        <Route path="/courses/:id" element={<TrainingCourseContent />} />
        <Route path="/courses/:id" element={<EngineeringCourseContent />} />
        <Route path="/courses/:id" element={<CertificationCourseContent />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
      <ContactUs />
    </Router>
  );
}

export default App;
