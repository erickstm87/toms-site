import React from 'react';
import { Paper, Typography } from '@mui/material';

const Projects = () => {
  const projects = [
    {
      url: 'https://www.udemy.com/course/internet-of-things-using-raspberry-pi-and-python-2023/',
      title: 'IOT',
      description: 'Learned AWS IoT and I always enjoy tinkering with Raspberry Pi.'
    },
    {
      url: 'https://www.udemy.com/course/decodingdevops/',
      title: 'DevOps',
      description: 'Working my way through DevOps. Familiar with a good deal but looking forward to exploring the tools I use every day.'
    },
    {
      url: 'https://www.udemy.com/course/mastering-microcontroller-with-peripheral-driver-development',
      title: 'Embedded',
      description: 'Have not started on this one but looking into STM32. I enjoy the idea of working on tangible objects and the debugging process.'
    }
  ];

  return (
    <Paper style={{ padding: '1rem', backgroundColor: '#f5f5dc', marginBottom: '1rem'}}>
      <Typography variant="h4" component="h2" style={{ fontFamily: 'Courier New, monospace' }}>
        Current Projects
      </Typography>
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

export default Projects;
