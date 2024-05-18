import React from 'react';
import { Paper, Typography } from '@mui/material';

const PastProjects = () => {
  const projects = [
    {
      url: 'https://github.com/erickstm87/door-lock',
      title: 'Door Lock',
      description: 'Built a door lock using Rpi, Node, Slack, and some 3d printed parts.'
    },
    {
      url: 'https://github.com/erickstm87/bike-checker',
      title: 'Bike Checker',
      description: 'During the Covid shortage I wrote a web scraper in Golang that checked Pinkbike for the listings I was interested in. AWS Lambda, Golang, Twilio, DynamoDB.'
    },
    {
      url: 'https://github.com/erickstm87/strava-backend/blob/main/server/index.js',
      title: 'Strava Directions',
      description: 'Before it was a feature on Strava I wrote a program where you could put in the id of a saved route and it would give you driving directions from your current location. Saved me a ton of time and effort. Axios, JS, and Firebase'
    }
  ];

  return (
    <Paper style={{ padding: '1rem', backgroundColor: '#f5f5dc', marginBottom: '1rem'}}>
      <Typography variant="h4" component="h2" style={{ fontFamily: 'Courier New, monospace' }}>
        Past Projects
      </Typography>
      Here are a few projects I've done in the past that I really enjoyed and taught me a new set of skills. 
      <Typography variant="body1" component="div" style={{ fontFamily: 'Courier New, monospace' }}>
        <ul>
          {projects.map((project, index) => (
            <li key={index}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h4>{project.title}</h4>
              </a>
              {project.description}
            </li>
          ))}
        </ul>
      </Typography>
    </Paper>
  );
};

export default PastProjects;
