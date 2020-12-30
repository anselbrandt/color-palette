import React, { useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { hexToLightness } from "./utils";
import { getPalette } from "./getPalette";

interface Props {
  color: any;
}

export const Colorbar: React.FC<Props> = ({ color }) => {
  const [palette, setPalette] = useState<any>();
  const colorPicker = (hex: any) =>
    hexToLightness(hex) < 50 ? "white" : "black";
  useEffect(() => {
    setPalette(getPalette(color));
  }, [color]);
  if (palette) {
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
              {palette.name.replace(/-/g, " ")}
            </Flex>
          </Box>
          {palette.values.map((value: string, index: any) => (
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
        </Flex>
      </Box>
    );
  } else return null;
};
