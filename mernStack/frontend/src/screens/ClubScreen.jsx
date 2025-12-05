// src/screens/ClubScreen.jsx
import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

function ClubScreen() {
  const { id } = useParams();

  return (
    <Box
      w="100%"
      h="100%"
      bg="#F8F1C2"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Text fontSize="xl" fontWeight="bold">
        Club Page
      </Text>
      <Text mt={2}>Club ID: {id}</Text>
    </Box>
  );
}

export default ClubScreen;
