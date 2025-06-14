import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
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
      py={16}
      spacing={8}
      id="projects-section"
      scrollMarginTop="80px"
    >
      <VStack
        w="100%"
        maxW="1200px"
        mx="auto"
        spacing={8}
        align="stretch"
        px={[2, 4, 6]}
      >

        <Heading as="h1" mb={8} size="xl" alignSelf="flex-start" w="100%">
          Featured Projects
        </Heading>
        <SimpleGrid
          columns={[1, null, 2]}
          spacing={8}
          justifyItems="center"
          w="100%"
        >
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              url={project.url}
              w="100%"
              maxW="800px"
            />
          ))}
        </SimpleGrid>
      </VStack>
    </FullScreenSection>
  );
};

export default ProjectsSection;
