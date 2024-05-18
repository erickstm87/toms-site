import React from 'react';
import { Container } from '@mui/material';
import AboutMe from './components/AboutMe';
import Career from './components/Career';
import Projects from './components/Projects';

function App() {
  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <AboutMe />
      <Career />
      <Projects />
    </Container>
  );
}

export default App;
