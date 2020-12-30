import React from "react";
import { Flex, Box, useColorMode } from "@chakra-ui/react";
import { CopyIcon, ViewIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

interface Props {
  color: any;
  handleCopy: (color: string) => void;
  handleView: (color: string) => void;
  handleEdit: (color: string) => void;
  handleDelete: (color: string) => void;
}

export const Toolbar: React.FC<Props> = ({
  color,
  handleCopy,
  handleView,
  handleEdit,
  handleDelete,
}) => {
  const { colorMode } = useColorMode();
  const textColor = { light: "black", dark: "white" };
  const palette = JSON.stringify(color.palette, null, 2);
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="left"
      w="60px"
      ml={2}
    >
      <Box
        my={1}
        fontSize="xs"
        fontWeight="medium"
        onClick={() => handleCopy(palette)}
        color="gray.500"
        _hover={{
          cursor: "pointer",
          color: textColor[colorMode],
          transform: "translateX(3px)",
          transition: "transform 0.1s linear",
        }}
      >
        <CopyIcon /> Copy
      </Box>

      <Box
        my={1}
        fontSize="xs"
        fontWeight="medium"
        onClick={() => handleView(color)}
        color="gray.500"
        _hover={{
          cursor: "pointer",
          color: textColor[colorMode],
          transform: "translateX(3px)",
          transition: "transform 0.1s linear",
        }}
      >
        <ViewIcon /> View
      </Box>
      <Box
        my={1}
        fontSize="xs"
        fontWeight="medium"
        onClick={() => handleEdit(color)}
        color="gray.500"
        _hover={{
          cursor: "pointer",
          color: textColor[colorMode],
          transform: "translateX(3px)",
          transition: "transform 0.1s linear",
        }}
      >
        <EditIcon /> Edit
      </Box>
      <Box
        my={1}
        fontSize="xs"
        fontWeight="medium"
        onClick={() => handleDelete(color)}
        color="gray.500"
        _hover={{
          cursor: "pointer",
          color: textColor[colorMode],
          transform: "translateX(3px)",
          transition: "transform 0.1s linear",
        }}
      >
        <DeleteIcon /> Delete
      </Box>
    </Flex>
  );
};
