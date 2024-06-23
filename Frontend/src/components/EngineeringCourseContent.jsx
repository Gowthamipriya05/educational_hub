import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from './VideoPlayer'; // Assume you have a VideoPlayer component

const courses = {
  1: {
    title: 'Diploma in Computer Science',
    description: 'Detailed content for Computer Science',
    videos: [
      { id: 1, title: 'Introduction to Computer Science', url: 'video1.mp4' },
      { id: 2, title: 'Data Structures', url: 'video2.mp4' },
      // Add more videos here
    ],
  },
  2: {
    title: 'Diploma in Electrical Engineering',
    description: 'Detailed content for Electrical Engineering',
    videos: [
      { id: 1, title: 'Introduction to Electrical Engineering', url: 'video3.mp4' },
      { id: 2, title: 'Circuit Analysis', url: 'video4.mp4' },
      // Add more videos here
    ],
  },
};

const DiplomaCourseContent = () => {
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
      <button className="btn btn-success mt-4">Mark as Completed</button>
    </div>
  );
};

export default DiplomaCourseContent;
