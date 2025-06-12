import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  LinkBox,
  LinkOverlay
} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc, url }) => {
  return (
    <LinkBox
      as="article"
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
      w="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      transition="all 0.2s"
      cursor="pointer"
      role="group"
    >
      <Image
        src={imageSrc}
        alt={title}
        width="100%"
        height="360px"
        objectFit="cover"
        borderTopRadius="lg"
      />
      <Box p={6}>
        <Heading as="h3" size="md" mb={2} color="black">
          <LinkOverlay
          href={url}
          isExternal
          _hover={{ color: "purple.600", textDecoration: "underline"}}
          >
          {title}
          </LinkOverlay>
        </Heading>

        <Text fontSize="sm" color="gray.600" mb={4}>
          {description}
        </Text>
        <HStack pt={2} spacing={2}>
          <LinkOverlay
          href={url}
          isExternal
          fontWeight="bold"
          color="blue-700"
          fontSize="md"
          display="flex"
          alignItems="center"
          _hover={{ color: "purple.600"}}
          >
            See more&nbsp;
          <FontAwesomeIcon icon={faArrowRight} size="1x" />

          </LinkOverlay>
        </HStack>
      </Box>
      </LinkBox>
  );
};

export default Card;
