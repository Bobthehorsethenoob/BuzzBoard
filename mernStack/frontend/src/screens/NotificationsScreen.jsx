// src/screens/NotificationsScreen.jsx
import {
  Box,
  Flex,
  Text,
  Heading,
  Stack,
  Badge,
} from "@chakra-ui/react";
import BottomNav from "../components/BottomNav";

const notifications = [
  {
    id: 1,
    type: "acceptance",
    title: "You Successfully Joined a Club",
    message:
      "You've been accepted into the Esports Club by President Alex Romero.",
    date: "Jan 12, 2025",
    timeAgo: "2 hours ago",
  },
  {
    id: 2,
    type: "announcement",
    title: "Cultural Showcase — Important Update",
    message:
      "The Cultural Clubs Council has moved the event indoors due to rain.",
    date: "Jan 10, 2025",
    timeAgo: "2 days ago",
  },
  {
    id: 3,
    type: "announcement",
    title: "Esports Club Weekly Meeting",
    message:
      "Reminder: Weekly meeting this Friday at 7pm in Union Room 210.",
    date: "Jan 9, 2025",
    timeAgo: "3 days ago",
  },
];

function NotificationsScreen() {
  return (
    <Box
      as="main"
      w="100%"
      h="100%"
      bg="#F8F1C2"
      display="flex"
      flexDirection="column"
    >
      {/* Scrollable content area */}
      <Box flex="1" px={5} pt={6} pb={4} overflowY="auto">
        {/* Header */}
        <Heading size="lg" mb={2} color="#043927">
          Notifications
        </Heading>
        <Text fontSize="sm" color="gray.700" mb={5}>
          Stay updated with club announcements and membership changes.
        </Text>

        {/* Notification List */}
        <Stack spacing={4}>
          {notifications.map((n) => (
            <Box
              key={n.id}
              bg="white"
              borderRadius="xl"
              boxShadow="sm"
              p={4}
              borderLeft="6px solid"
              borderColor={n.type === "acceptance" ? "green.600" : "yellow.500"}
            >
              <Flex justify="space-between" align="center" mb={1}>
                <Text
                  fontWeight="bold"
                  color={n.type === "acceptance" ? "green.700" : "yellow.700"}
                >
                  {n.title}
                </Text>

                <Badge
                  colorScheme={n.type === "acceptance" ? "green" : "yellow"}
                  borderRadius="md"
                  fontSize="0.6rem"
                >
                  {n.timeAgo}
                </Badge>
              </Flex>

              <Text fontSize="sm" color="gray.700" mb={2}>
                {n.message}
              </Text>

              <Text fontSize="xs" color="gray.500">
                {n.date}
              </Text>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Bottom navigation bar */}
      <BottomNav />
    </Box>
  );
}

export default NotificationsScreen;