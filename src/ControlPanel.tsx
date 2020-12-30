import React from "react";
import { Box, Flex } from "@chakra-ui/react";

interface Props {
  color: any;
}

export const ControlPanel: React.FC<Props> = ({ color }) => {
  return (
    <Box h="500px" w="900px" bgColor="gray.100" borderRadius="lg" ml={90}>
      <Flex justifyContent="center" alignItems="center" h="100%" w="100%">
        <pre>{JSON.stringify(color.palette, null, 2)}</pre>
      </Flex>
    </Box>
  );
};
