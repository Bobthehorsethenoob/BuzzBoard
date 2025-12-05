// src/screens/HomeScreen.jsx
import {
  Box,
  Flex,
  Text,
  Heading,
  Input,
  IconButton,
  Image,
  Button,
} from "@chakra-ui/react";
import { ListFilter } from "lucide-react";
import BottomNav from "../components/BottomNav";

// Fake data for demo
const events = [
  {
    id: 1,
    title: "Club Rush",
    date: "Thu • 4:00 PM",
    location: "Library Quad",
    club: "Student Activities",
  },
  {
    id: 2,
    title: "Gaming Night",
    date: "Fri • 7:00 PM",
    location: "Union Room 210",
    club: "Esports Club",
  },
  {
    id: 3,
    title: "Cultural Showcase",
    date: "Sat • 2:00 PM",
    location: "University Union",
    club: "Cultural Clubs Council",
  },
];

const joinedClubs = [
  {
    id: 1,
    name: "Computer Science Society",
    role: "Member",
    nextMeeting: "Mon • 6:00 PM",
    imageUrl: "https://via.placeholder.com/300x180?text=CS+Society",
  },
  {
    id: 2,
    name: "Esports Club",
    role: "Officer",
    nextMeeting: "Wed • 5:30 PM",
    imageUrl: "https://via.placeholder.com/300x180?text=Esports+Club",
  },
  {
    id: 3,
    name: "Outdoor Adventure Club",
    role: "Member",
    nextMeeting: "Sun • 9:00 AM",
    imageUrl: "https://via.placeholder.com/300x180?text=Adventure+Club",
  },
];

function HomeScreen() {
  return (
    <Box
      as="main"
      h="100%"
      bg="#F8F1C2"
      display="flex"
      flexDirection="column"
    >
      {/* Scrollable content */}
      <Box flex="1" overflowY="auto" px={4} pt={4} pb={3}>
        {/* Top greeting and search */}
        <Box mb={4}>
          <Text fontSize="xs" textTransform="uppercase" color="#0B4D40">
            Welcome back
          </Text>
          <Heading size="md" color="#043927">
            BuzzBoard Home
          </Heading>
          <Text fontSize="xs" color="#4B5563" mt={1}>
            Discover events and clubs at Sac State.
          </Text>
        </Box>

        {/* Search + Filter row */}
        <Flex align="center" gap={2} mb={4}>
          <Input
            placeholder="Search clubs"
            bg="#F9FAFB"
            size="sm"
            _placeholder={{ color: "#9CA3AF" }}
            _focusVisible={{
              borderColor: "#166534",
              boxShadow: "0 0 0 1px rgba(22, 101, 52, 0.6)",
            }}
          />
          <IconButton
            aria-label="Filter clubs"
            size="sm"
            bg="#00773F"
            color="white"
            _hover={{ bg: "#046945" }}
            _active={{ bg: "#035339" }}
            borderRadius="lg"
          >
            <ListFilter size={16} />
          </IconButton>
        </Flex>

        {/* Upcoming Events */}
        <Box mb={5}>
          <Flex align="center" justify="space-between" mb={2}>
            <Text fontSize="sm" fontWeight="semibold" color="#043927">
              Upcoming events
            </Text>
            <Text fontSize="xs" color="#166534">
              See all
            </Text>
          </Flex>

          <Box
            display="flex"
            overflowX="auto"
            gap={3}
            py={1}
            css={{
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {events.map((event) => (
              <Box
                key={event.id}
                minW="220px"
                bg="white"
                borderRadius="xl"
                p={3}
                boxShadow="md"
              >
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
                <Button
                  size="sm"
                  mt={2}
                  colorScheme="green"
                  w="full"
                  borderRadius="md"
                >
                  View
                </Button>
              </Box>
            ))}
          </Box>
        </Box>

        {/* My Clubs */}
        <Box mb={5}>
          <Flex align="center" justify="space-between" mb={2}>
            <Text fontSize="sm" fontWeight="semibold" color="#043927">
              My clubs
            </Text>
            <Text fontSize="xs" color="#166534">
              View all
            </Text>
          </Flex>

          <Box
            display="flex"
            overflowX="auto"
            gap={3}
            py={1}
            css={{
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            {joinedClubs.map((club) => (
              <Box
                key={club.id}
                minW="200px"
                bg="white"
                borderRadius="xl"
                p={3}
                boxShadow="md"
                overflow="hidden"
              >
                <Box mb={2} borderRadius="lg" overflow="hidden">
                  <Image
                    src={club.imageUrl}
                    alt={club.name}
                    w="100%"
                    h="90px"
                    objectFit="cover"
                  />
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
                <Button
                  size="sm"
                  mt={2}
                  colorScheme="green"
                  w="full"
                  borderRadius="md"
                >
                  View
                </Button>
              </Box>
            ))}
          </Box>
        </Box>

        {/* You can add more sections here later */}
      </Box>

      {/* Bottom navigation pinned to bottom */}
      <BottomNav />
    </Box>
  );
}

export default HomeScreen;