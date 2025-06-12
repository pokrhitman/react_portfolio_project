import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import photo1 from "../images/photo1.jpg";
import photo2 from "../images/photo2.jpg";

const projects = [
  {
    title: "Little Lemon Restaurant Website",
    description:
      "A responsive, accessible restaurant website built with React and Chakra UI. Features menu browsing, feedback forms, and accessibility enhancements. Developed as a capstone project for the Coursera Meta Front-End Developer certificate.",
      url: "https://pokrhitman.github.io/little_lemon_website/",
    imageSrc: photo1,
  },
  {
    title: "Little Lemon Mobile App",
    description:
      "React Native app for menu browsing, orders and user feedback. Developed as a capstone project for the Coursera Meta Front-End Developer certificate.",
      url: "https://github.com/pokrhitman/little_lemon_app/blob/main/README.md",
    imageSrc: photo2,

  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        w="100%"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
