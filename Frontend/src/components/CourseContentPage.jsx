import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';

const courses = {
  engineering: {
    title: 'Engineering Course',
    description: 'Detailed content for Engineering',
    topics: [
      { id: 1, title: 'Introduction to Engineering' },
      { id: 2, title: 'Mechanical Engineering' },
      // Add more topics here
    ],
  },
  training: {
    title: 'Training Course',
    description: 'Detailed content for Training',
    topics: [
      { id: 1, title: 'Training Basics' },
      { id: 2, title: 'Advanced Training Techniques' },
      // Add more topics here
    ],
  },
  certification: {
    title: 'Certification Course',
    description: 'Detailed content for Certification',
    topics: [
      { id: 1, title: 'Certification Fundamentals' },
      { id: 2, title: 'Preparing for Certification Exams' },
      // Add more topics here
    ],
  },
};

const CourseContentPage = () => {
  const { category, topicId } = useParams();
  const course = courses[category];
  const topic = course.topics.find((topic) => topic.id === parseInt(topicId));

  // Function to generate a random YouTube video link
  const getRandomYouTubeLink = () => {
    const videoIds = ['VIDEO_ID_1', 'VIDEO_ID_2', 'VIDEO_ID_3']; // Add your YouTube video IDs here
    const randomIndex = Math.floor(Math.random() * videoIds.length);
    const randomVideoId = videoIds[randomIndex];
    return `https://www.youtube.com/watch?v=${randomVideoId}`;
  };

  return (
    <div className="container mt-4">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      {topic && (
        <div>
          <h4>{topic.title}</h4>
          {/* Button to go to a random YouTube video */}
          <Button variant="primary" onClick={() => window.open(getRandomYouTubeLink(), '_blank')}>
            Watch Random YouTube Video
          </Button>
        </div>
      )}
      <Link to={`/${category}`}>
        <Button variant="secondary">Back to {category}</Button>
      </Link>
    </div>
  );
};

export default CourseContentPage;
