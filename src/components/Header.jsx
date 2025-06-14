import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: pokrhitman@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/pokrhitman?tab=repositories",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/ernesto-burzi%C4%87-a19b36276/",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const HEADER_HEIGHT = 80;

const Header = () => {
  // Smooth scroll handler with header offset for anchors
  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    if (anchor === "top") {
      window.scrollTo({ top: 0, behavior: "smooth"});
      window.history.pushState(null, "", "/#");
      return;
    }

    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - HEADER_HEIGHT;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    window.history.pushState(null, "", `/#${id}`);
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={1000}
      backgroundColor="#18181b"
      boxShadow="md"
      height={`${HEADER_HEIGHT}px`}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={4}>
              {socials.map((social) => (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.url}
                >
                  <FontAwesomeIcon icon={social.icon} size="2x" />
                </a>
              ))}
            </HStack>
          </nav>

          <nav>
            <HStack spacing={8}>
              <a
                href="/#projects-section"
                onClick={handleClick("projects")}
                style={{ fontWeight: "bold", cursor: "pointer" }}
              >
                Projects
              </a>
              <a
                href="/#contactme-section"
                onClick={handleClick("contactme")}
                style={{ fontWeight: "bold", cursor: "pointer" }}>
                Contact Me
              </a>
              <a
                href="/#"
                onClick={handleClick("top")}
                style={{ 
                  fontWeight: "bold", 
                  cursor: "pointer",
                  }}
                  >
                Back to Top
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
