// src/components/EventCard.jsx
import { Box, Text } from "@chakra-ui/react";

function EventCard({ event }) {
  // event: { id, title, date, location, club, imageUrl? }
  return (
    <Box
      minW="220px"
      bg="white"
      borderRadius="xl"
      p={3}
      boxShadow="md"
    >
      {/* Image placeholder / future image */}
      <Box
        w="100%"
        h="100px"
        borderRadius="lg"
        mb={3}
        overflow="hidden"
        bg="#E5E7EB"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        {event.imageUrl ? (
          // When backend is ready, swap this to a proper <Image /> if you want
          <Box
            as="img"
            src={event.imageUrl}
            alt={event.title}
            w="100%"
            h="100%"
            objectFit="cover"
          />
        ) : (
          <Text fontSize="xs" color="#6B7280">
            Event Image
          </Text>
        )}
      </Box>

      <Text
        fontSize="xs"
        fontWeight="semibold"
        color="#166534"
        mb={1}
      >
        {event.date}
      </Text>

      <Text fontSize="sm" fontWeight="bold" color="#111827">
        {event.title}
      </Text>

      <Text fontSize="xs" color="#4B5563" mt={1}>
        {event.location}
      </Text>

      <Text fontSize="xs" color="#6B7280" mt={1}>
        Hosted by {event.club}
      </Text>
    </Box>
  );
}

export default EventCard;
