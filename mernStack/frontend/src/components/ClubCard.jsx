// src/components/ClubCard.jsx
import { Box, Text } from "@chakra-ui/react";

function ClubCard({ club }) {
  // club: { id, name, role, nextMeeting, imageUrl? }
  return (
    <Box
      minW="200px"
      bg="white"
      borderRadius="xl"
      p={3}
      boxShadow="md"
    >
      {/* Image placeholder / future image */}
      <Box
        w="100%"
        h="80px"
        borderRadius="lg"
        mb={3}
        overflow="hidden"
        bg="#E5E7EB"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {club.imageUrl ? (
          <Box
            as="img"
            src={club.imageUrl}
            alt={club.name}
            w="100%"
            h="100%"
            objectFit="cover"
          />
        ) : (
          <Text fontSize="xs" color="#6B7280">
            Club Image
          </Text>
        )}
      </Box>

      <Text fontSize="sm" fontWeight="bold" color="#111827">
        {club.name}
      </Text>

      <Text fontSize="xs" color="#4B5563" mt={1}>
        Role: {club.role}
      </Text>

      <Text fontSize="xs" color="#6B7280" mt={1}>
        Next meeting: {club.nextMeeting}
      </Text>
    </Box>
  );
}

export default ClubCard;
