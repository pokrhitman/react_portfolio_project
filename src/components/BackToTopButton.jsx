import React from "react";
import { Fade, IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = () => {
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setShow(window.scrollY > 400);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <Fade in={show}>
            <IconButton
                icon={<FaArrowUp />}
                position="fixed"
                bottom="32px"
                right="32px"
                zIndex="1100"
                colorScheme="purple"
                borderRadius="full"
                boxShadow="lg"
                aria-label="Back To Top"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            />
        </Fade>
    );
};

export default BackToTopButton;
