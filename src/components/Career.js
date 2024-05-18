import React from 'react';
import { Paper, Typography } from '@mui/material';

const Career = () => (
  <Paper style={{ padding: '1rem', marginBottom: '1rem', backgroundColor: '#f5f5dc' }}>
    <Typography variant="h4" component="h2" style={{ fontFamily: 'Courier New, monospace' }}>
      Career
    </Typography>
    <Typography variant="body1" style={{ fontFamily: 'Courier New, monospace' }}>
    I've been a software engineer since 2019 however I recently decided to take some time off and explore some other career paths. Currently trying to decide between DevOps, Embedded Software, and IOT development. I would love hands on tangible work but also looking for flexibility and variety. 
    </Typography>
  </Paper>
);

export default Career;
