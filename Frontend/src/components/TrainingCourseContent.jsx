import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer'; // Assume you have a VideoPlayer component
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

const courses = {
  1: {
    title: 'Training in Computer Science',
    description: 'Detailed content for Computer Science',
    videos: [
      { id: 1, title: 'Introduction to Computer Science', url: 'video1.mp4' },
      { id: 2, title: 'Data Structures', url: 'video2.mp4' },
      // Add more videos here
    ],
  },
  2: {
    title: 'Training in Electrical Engineering',
    description: 'Detailed content for Electrical Engineering',
    videos: [
      { id: 1, title: 'Introduction to Electrical Engineering', url: 'video3.mp4' },
      { id: 2, title: 'Circuit Analysis', url: 'video4.mp4' },
      // Add more videos here
    ],
  },
};

const TrainingCourseContent = () => {
  const { id } = useParams();
  const course = courses[id];

  return (
    <div className="container mt-4">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <div className="video-playlist">
        {course.videos.map((video) => (
          <div key={video.id}>
            <h4>{video.title}</h4>
            <VideoPlayer url={video.url} />
          </div>
        ))}
      </div>
      <Link to='/courses/training'>
      <Button variant="primary">Mark as completed</Button>
      </Link>
    </div>
  );
};

export default TrainingCourseContent;
