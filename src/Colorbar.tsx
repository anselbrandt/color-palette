import React from "react";
import { Box, Flex, Collapse, useDisclosure } from "@chakra-ui/react";
import { hexToLightness } from "./utils";
import { Toolbar } from "./Toolbar";
import { ControlPanel } from "./ControlPanel";
import { ColorModal } from "./ColorModal";

interface Props {
  color: any;
  handleCopy: (str: string) => void;
  handleView: (str: string) => void;
  handleDelete: (color: any) => void;
  isOpen: boolean;
  onClose: () => void;
}

export const Colorbar: React.FC<Props> = ({
  color,
  handleCopy,
  handleView,
  handleDelete,
  isOpen,
  onClose,
}) => {
  const { isOpen: isControlsOpen, onToggle } = useDisclosure();
  const colorPicker = (hex: any) =>
    hexToLightness(hex) < 50 ? "white" : "black";
  return (
    <Box>
      <Flex my={4} fontWeight="semibold">
        <Box w="90px" h="90px" fontSize="sm" my={2}>
          <Flex
            h="100%"
            direction="column"
            justifyContent="center"
            style={{ textTransform: "capitalize" }}
          >
            {color.name.replace(/-/g, " ")}
          </Flex>
        </Box>
        {color.values.map((value: string, index: any) => (
          <Box
            key={index}
            color={colorPicker(value)}
            bgColor={value}
            w="90px"
            h="90px"
            fontSize="xs"
          >
            <Flex
              height="100%"
              direction="column"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Box mb={2}>{value}</Box>
            </Flex>
          </Box>
        ))}
        <Toolbar
          color={color}
          handleCopy={handleCopy}
          handleView={handleView}
          handleEdit={onToggle}
          handleDelete={handleDelete}
        />
        <ColorModal
          color={color}
          isOpen={isOpen}
          onClose={onClose}
          handleCopy={handleCopy}
        />
      </Flex>
      <Collapse in={isControlsOpen} animateOpacity>
        <ControlPanel color={color} />
      </Collapse>
    </Box>
  );
};
