// src/components/PhoneFrame.jsx
import { Box, Flex } from "@chakra-ui/react";

function PhoneFrame({ children }) {
  return (
    <Flex
      minH="100vh"
      w="100%"
      align="center"
      justify="center"
      bg="gray.900"
      // remove extra vertical padding so we don't push phone off-screen
      py={0}
    >
      <Box position="relative">
        {/* Phone body */}
        <Box
          // slightly smaller than 812px so it fits more screens
          h="700px"
          // keep the same aspect ratio-ish as 375x812
          w="323px"
          bg="gray.900"
          borderRadius="3xl"
          border="10px solid black"
          boxShadow="2xl"
          overflow="hidden"
          position="relative"
        >
          {/* Notch */}
          <Box
            position="absolute"
            top="10px"
            left="50%"
            transform="translateX(-50%)"
            w="100px"
            h="22px"
            bg="black"
            borderRadius="full"
            zIndex={10}
          />

          {/* Screen area */}
          <Box
            position="relative"
            w="100%"
            h="100%"
            pt="40px" // space for notch
            bg="white"
          >
            {children}
          </Box>

          {/* Home indicator */}
          <Box
            position="absolute"
            bottom="10px"
            left="50%"
            transform="translateX(-50%)"
            w="110px"
            h="5px"
            bg="gray.300"
            borderRadius="full"
            opacity={0.6}
          />
        </Box>

        {/* Optional side button */}
        <Box
          position="absolute"
          right="-4px"
          top="110px"
          w="3px"
          h="60px"
          bg="gray.700"
          borderRadius="full"
        />
      </Box>
    </Flex>
  );
}

export default PhoneFrame;