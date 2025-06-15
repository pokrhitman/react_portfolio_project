import * as React from "react";
import { Box } from "@chakra-ui/react";

/**
 * A full-viewport section wrapper.
 * Lets inner content handle centering, width and layout.
 * 
 * Props:
 *  - isDarkBackground: boolean (controls text color)
 *  - as: string (semantic element, e.g.: "section" or "main")
 *  - All Chakra <Box> props supported (e.g.: backgroundColor, padding, id)
 */

const FullScreenSection = ({ 
  children, 
  isDarkBackground = false,
  as = "section",
  ...rest 
}) => {

  return (
    <Box
    as={as}
      width="100vw"
      minH="100vh"
      color={isDarkBackground ? "white" : "black"}
      {...rest}
    >
        {children}
    </Box>

  );
};

export default FullScreenSection;
