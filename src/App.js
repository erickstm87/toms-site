import React from 'react';
import { Container } from '@mui/material';
import AboutMe from './components/AboutMe';
import Career from './components/Career';
import Projects from './components/Projects';
import PastProjects from './components/PastProjects';

function App() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <AboutMe />
      <Career />
      <PastProjects />
      <Projects />
    </Container>
  );
}

export default App;
