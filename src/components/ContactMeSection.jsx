import React, { useEffect } from "react";
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
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const ContactMeSection = () => {
  const { isLoading, submit } = useSubmit();
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
    onSubmit: async (values, { resetForm }) => {
      const response = await submit(values);
      console.log("submit response:", response);

      if (!response) {
        onOpen("error", "No server response. Please try again.");
        return;
      }

      if (response.type === "success") {
        onOpen(
          "success", 
          `Thanks for your submission ${values.firstName}, we will get back to you shortly!`
        );
        resetForm();
      } else {
        onOpen(
          "error", 
          "Something went wrong, please try again later"
        );
    }
  }
  });

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.touched.firstName && !!formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
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
                _hover={{ borderColor: "#6C47C5"}}
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
                  {...formik.getFieldProps("comment")}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button 
              type="submit" 
              colorScheme="purple" 
              width="full"
              isLoading={isLoading}
              loadingText="Sending"
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
