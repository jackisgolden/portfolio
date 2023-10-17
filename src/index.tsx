import React from 'react';
import Header from './components/Header';
import About from './components/About';
import CardCarousel from './components/CardCarousel';

const App: React.FC = () => {
  // Sample data for the "About" section
  const aboutData = [
    {
      title: 'Passion 1',
      description: 'Brief description of your first passion.',
    },
    {
      title: 'Passion 2',
      description: 'Brief description of your second passion.',
    },
    {
      title: 'Passion 3',
      description: 'Brief description of your third passion.',
    },
  ];

  // Sample data for the "CardCarousel" section
  const projectsData = [
    {
      title: 'Project 1',
      date: 'Date of Project 1',
      description: 'Brief description of Project 1.',
      // Add other relevant data here, e.g., images, links, etc.
    },
    {
      title: 'Project 2',
      date: 'Date of Project 2',
      description: 'Brief description of Project 2.',
    },
    {
      title: 'Project 3',
      date: 'Date of Project 3',
      description: 'Brief description of Project 3.',
    },
    // Add more project data as needed
  ];

  return (
    <div>
      <Header title="Jack Golden" />
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 1 }}>
          <h2>About</h2>
          <About data={aboutData} />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Projects</h2>
          <CardCarousel data={projectsData} />
        </div>
      </div>
      {/* Add any other sections or components here */}
    </div>
  );
};

export default App;

