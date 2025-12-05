// src/screens/ClubScreen.jsx
import { useParams } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";
import BottomNav from "../components/BottomNav"; // ✅ import navbar

function ClubScreen() {
  const { id } = useParams();

  return (
    <Box
      as="main"
      h="100%"
      bg="#F8F1C2"
      display="flex"
      flexDirection="column"   // ✅ allows navbar to sit at bottom
    >
      {/* Scrollable content */}
      <Box
        flex="1"
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

      {/* Bottom Navigation */}
      <BottomNav />   {/* ✅ navbar now appears like HomeScreen */}
    </Box>
  );
}

export default ClubScreen;
