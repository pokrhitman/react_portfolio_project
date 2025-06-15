import React from "react";
import {Box, Flex, Text} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" role="contentinfo" bg="gray.900">

        <Flex
          margin="0 auto"
          px={[4, 6, 12]}
          color="white"
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          height={16}
          textAlign="center"
        >
          <Text fontSize="sm">© 2025 Pokrhitman • All rights reserved</Text>
        </Flex>
    </Box>
  );
};
export default Footer;
