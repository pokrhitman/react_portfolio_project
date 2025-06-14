import * as React from "react";
import { Box } from "@chakra-ui/react";

/**
 * A full-viewport section wrapper.
 * Lets inner content handle centering, width and layout.
 */

const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <Box
      w="100vw"
      minH="100vh"
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      {...boxProps}
    >
        {children}
    </Box>

  );
};

export default FullScreenSection;
