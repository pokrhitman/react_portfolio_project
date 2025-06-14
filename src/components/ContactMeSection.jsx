import React, { useRef, useEffect } from "react";
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
  FormHelperText,
  Text,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import { useAlertContext } from "../context/alertContext";


const ContactMeSection = () => {
  const { onOpen } = useAlertContext();
  const formRef = useRef(null);

  //For ARIA live success message
  const [successMsg, setSucccesMsg] = React.useState("");

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Name is required."),
      email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email address is required."),
      type: Yup.string(),
      comment: Yup.string()
        .required("Please let us know how we can help you (min. 25 chars).")
        .min(25, "Must be at least 25 characters"),
    }),
    onSubmit: (values, { resetForm, setSubmitting }) => {
      //On submit: set success ARIA live, open alert, reset form
      setSucccesMsg(
        `Thanks for your submission${values.firstName ? `, ${values.firstName}` : ""}! We'll get back to you shortly.`
      );
      onOpen(
        "success",
        `Thanks for your submission ${values.firstName ? `, $values.firstName}` : ""} We'll get back to you shortly!`
      );
      resetForm();
      setSubmitting(false);
      // Focus the ARIA live region for screen readers
      setTimeout(() => {
        if (formRef.current) {
          formRef.current.focus();
        }
      }, 200);
    }
  });

  // Focus first invalid field on submit for keyboard users
  useEffect(() => {
    if (formik.isSubmitting && Object.keys(formik.errors).length > 0) {
      const firstErrorKey = Object.keys(formik.errors)[0];
      const errorElem = document.getElementsByName(firstErrorKey)[0];
      if (errorElem) errorElem.focus();
    }
    // Reset successMsg when user starts typing againg
    if (formik.isValidating || formik.isSubmitting) setSucccesMsg("");
  }, [formik.errors, formik.isSubmitting, formik.isValidating]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
      id="contactme-section"
      scrollMarginTop="80px"
    >
      <VStack
        w="100%"
        maxW="900px"
        mx="auto"
        spacing={6}
        align="flex-start"
      >
        <Heading as="h1" size="xl" mb={4}>
          Contact me
        </Heading>

        <Box p={6} rounded="md" w="100%" bg="whiteAlpha.100">
          {/* ARIA-live region for a11y success message */}
          <Box
            role="status"
            aria-live="polite"
            tabIndex={-1}
            ref={formRef}
            style={{ outline: "none " }}
            mb={successMsg ? 4 : 0}
          >
            {successMsg && (
              <Text color="green.300" fontWeight="bold">
                {successMsg}
              </Text>
            )}
          </Box>

          <form
            onSubmit={formik.handleSubmit}
            name="contact"
            method="POST"
            autoComplete="on"
            data-netlify="true"
            netlify-honeypot="bot-field"
            aria-describedby={successMsg ? "contact-success" : undefined}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />

            <VStack spacing={4} w="100%" align="stretch">
              {/* Name */}
              <FormControl
                isInvalid={formik.touched.firstName && !!formik.errors.firstName}
                isRequired
                showRequiredIndicator={false} // Use Chakra´s indicator
              >
                <FormLabel htmlFor="firstName" fontSize="xl" fontWeight="bold">
                  Name
                </FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Please enter your name"
                  _placeholder={{ color: "gray.400"}}
                  autoComplete="name"
                  size="lg"
                  w="100%"
                  aria-required="true"
                  {...formik.getFieldProps("firstName")}
                />
              </FormControl>

              {/* Email */}
              <FormControl
                isInvalid={formik.touched.email && !!formik.errors.email}
                isRequired
              >
                <FormLabel htmlFor="email" fontSize="xl" fontWeight="bold">
                  Email Address
                </FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Please enter a valid email address"
                  _placeholder={{ color: "gray.400"}}
                  autoComplete="email"
                  size="lg"
                  width="100%"
                  aria-required="true"
                  {...formik.getFieldProps("email")}
                />
              </FormControl>

              {/* Type of enquiry */}
              <FormControl>
                <FormLabel htmlFor="type" fontSize="xl" fontWeight="bold">
                  Type of enquiry
                </FormLabel>
                <Select
                  id="type"
                  name="type"
                  placeholder="Select an Option"
                  bg="#512DA8"
                  color="white"
                  borderColor="white"
                  _hover={{ borderColor: "#6C47C5" }}
                  size="lg"
                  w="100%"
                  autoComplete="off"
                  {...formik.getFieldProps("type")}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>

              {/*Message */}
              <FormControl 
              isInvalid={formik.touched.comment && !!formik.errors.comment}
                isRequired
                showRequiredIndicator={true}
              >
                <FormLabel htmlFor="comment" fontSize="xl" fontWeight="bold">
                  Your message
                </FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  size="xl"
                  w="100%"
                  aria-required="true"
                  placeholder="How can we help you? (min. 25 characters)"
                  _placeholder={{ color: "gray.400"}}
                  autoComplete="off"
                  pl={3}
                  {...formik.getFieldProps("comment")}
                />
              </FormControl>
              {/* Privacy note below form fields */}

              <Text fontSize="xl" color="gray.400" mt={2}>
                We value your privacy. Your information is never shared or sold, and you will not receive any unsolicited newsletters or marketing information.
              </Text>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                fontSize="xl"
                isLoading={formik.isSubmitting}
                aria-busy={formik.isSubmitting}
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
