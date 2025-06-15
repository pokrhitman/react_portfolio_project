import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success"

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      motionPreset="scale"
      isCentered
      role="alertdialog"
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-body"
    >
      <AlertDialogOverlay>
        <AlertDialogContent
          py={4}
          bg={isSuccess ? "green.300" : "orange.300"}
          color="black"
        >
          <AlertDialogHeader
            id="alert-dialog-title"
            fontSize="lg" 
            fontWeight="bold"
            >
            {isSuccess ? 'All good!' : 'Oops!'}
          </AlertDialogHeader>

          <AlertDialogBody id="alert-dialog-body">{message}</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} colorScheme="gray">
              OK
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
