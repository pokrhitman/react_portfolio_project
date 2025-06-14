import React from "react";
import { Text, Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePic from "../assets/profile1.jpg";

const greeting = "Hello, I am Pokrhitman!";
const bio1 = "React Specialist | Front-End Developer | Portfolio-First Mindset.";
const bio2 = "Specialized in React, Vite and UI frameworks (Chakra UI, Material UI). \nBlending code, design and leveraging AI to build scalable, accessible web solutions.";


const LandingSection = () => (
  <FullScreenSection
    backgroundColor="#2A4365"
    isDarkBackground
    id="landing-section"
  >
    <VStack
      minH="100vh"
      w="100%"
      maxW="900px"
      mx="auto"
      align="center"
      justify="center"
      spacing={8}
      px={[2, 4, 6]}
    >

      <Avatar
        boxSize="360px"
        name="Pokrhitman"
        src={profilePic}
        mb={10}
      />

      <Heading as="h1" size="xl" textAlign="center">
        {greeting}
      </Heading>
      <Text 
      fontSize={["md", "lg", "2xl"]} 
      textAlign="center" 
      whiteSpace={["normal", "normal", "nowrap"]}
      >
        {bio1}
      </Text>
      <Text fontSize="2xl" color="gray.300" textAlign="center" whiteSpace="preline">
        {bio2}
      </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
