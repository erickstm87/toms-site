import React from 'react';
import { Paper, Typography } from '@mui/material';

const AboutMe = () => (
  <Paper style={{ padding: '1rem', marginBottom: '1rem', backgroundColor: '#f5f5dc' }}>
    <Typography variant="h4" component="h2" style={{ fontFamily: 'Courier New, monospace' }}>
      About Me
    </Typography>
    <Typography variant="body1" style={{ fontFamily: 'Courier New, monospace' }}>
     Hey there, welcome to the site. My name is Tom Erickson and I'm a 36 year old software engineer based out of Denver. When I'm not programming I enjoy Golf, Reading, all things Cycling especially working on my bikes.
    </Typography>
  </Paper>
);

export default AboutMe;
