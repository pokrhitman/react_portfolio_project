import { useFormik } from "formik";
import {
  Box,
  Button,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Required"),
      type: Yup.string(),
      comment: Yup.string()
        .required("Required")
        .min(25, "Must be at least 25 characters"),
    }),
    onSubmit: (values, { resetForm }) => {
      onOpen(
        "success",
        `Thanks for your submission ${values.firstName}, we will get back to you shortly!`
      );
      resetForm();
    }
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
      id="contactme-section"
      scrollMarginTop="80px"
    >
      <Box
      w="100%"
      maxW="900px"
      mx="auto"
      px={4}
      >
       <Heading as="h1" size="xl" mb={6}>
          Contact me
        </Heading>

        <Box p={6} rounded="md" w="100%" bg="whiteAlpha.50">
          <form 
          onSubmit={formik.handleSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <VStack spacing={4} w="100%" align="stretch">
              <FormControl
                isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  size="lg"
                  w="100%"
                  {...formik.getFieldProps("firstName")}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.touched.email && !!formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  size="lg"
                  width="100%"
                  {...formik.getFieldProps("email")}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  placeholder="Select Option"
                  bg="#512DA8"
                  color="white"
                  borderColor="white"
                  _hover={{ borderColor: "#6C47C5" }}
                  size="lg"
                  width="100%"
                  {...formik.getFieldProps("type")}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              <FormControl isInvalid={formik.touched.comment && !!formik.errors.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  size="lg"
                  width="100%"
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
    </FullScreenSection>
  );
};

export default ContactMeSection;
