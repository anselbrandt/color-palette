import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface Props {}

export const ColorHeader: React.FC<Props> = () => {
  const values = ["", 50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

  return (
    <Flex>
      {values.map((value, index) => (
        <Box key={index} w={90} textAlign="center">
          {value}
        </Box>
      ))}
    </Flex>
  );
};
