import React from "react";
import { Text, Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePic from "../assets/profile1.jpg";

const greeting = "Hello, I am Pokrhitman!";
const bio1 = "React specialist and self-taught front-end developer with a portfolio-first mindset.";
const bio2 = "Specialized in React, Vite, and UI frameworks (Chakra UI, Material UI). \nBlending code, design, and leveraging AI to build scalable, accessible web solutions.";


const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >

    <VStack spacing={4}>
      <Avatar
      boxSize="360px"
      name="Pokrhitman"
      src={profilePic}
      mb={10}
      />

      <Heading as="h1" size="xl">
        {greeting}
        </Heading>
        <Heading as="h2" fontSize={["lg", "xl", "2xl" ]}fontWeight="normal" color="gray.100">
          {bio1}
        </Heading>
        <Text 
        as="h3" 
        fontSize={["md", "lg", "xl" ]}
        fontWeight="normal"
        color="gray.200"
        whiteSpace="pre-line"
        textAlign="center"
        mt={1}
        >
          {bio2}
        </Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
