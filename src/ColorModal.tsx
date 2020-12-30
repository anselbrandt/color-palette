import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Button,
  Code,
} from "@chakra-ui/react";

interface Props {
  color: any;
  isOpen: boolean;
  onClose: () => void;
  handleCopy: (color: any) => void;
}

export const ColorModal: React.FC<Props> = ({
  color,
  isOpen,
  onClose,
  handleCopy,
}) => {
  const palette = JSON.stringify(color.palette, null, 2);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bgColor="rgba(0, 0, 0, 0.2)" />
      <ModalContent>
        <ModalHeader>{color.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction="column" alignContent="center">
            <Code p={4}>
              <pre>{palette}</pre>
            </Code>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={() => handleCopy(palette)}>
            Copy
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
