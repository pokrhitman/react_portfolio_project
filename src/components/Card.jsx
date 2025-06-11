import { Box, Heading, HStack, Image, Text} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      _hover={{ boxShadow: "lg", transform: "scale(1.02)" }}
      w="100%"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
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
          {title}
        </Heading>

        <Text fontSize="sm" color="gray.600" mb={4}>
          {description}
        </Text>
        <HStack pt={2} spacing={2}>
          <Text fontWeight="bold" color="blue.700" fontSize="md">
            See more
          </Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="#512DA8"/>
        </HStack>
      </Box>
    </Box>
  );
};

export default Card;
