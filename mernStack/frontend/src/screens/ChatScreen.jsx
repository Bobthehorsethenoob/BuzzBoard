// src/screens/ChatScreen.jsx
import { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Stack,
  Input,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import { Send } from "lucide-react";
import BottomNav from "../components/BottomNav";

// Example: clubs this user is in (future: load from backend)
const userClubs = [
  {
    id: "esports",
    name: "Esports Club",
    role: "Member",
    unreadCount: 2,
  },
  {
    id: "cultural-council",
    name: "Cultural Clubs Council",
    role: "Officer",
    unreadCount: 0,
  },
  {
    id: "student-activities",
    name: "Student Activities",
    role: "Member",
    unreadCount: 5,
  },
];

// Example: messages across clubs (future: per-club API)
const initialMessages = [
  {
    id: 1,
    clubId: "esports",
    senderName: "Alex (President)",
    senderRole: "President",
    text: "Welcome to Esports Club! Introduce yourself here 👋",
    timestamp: "Today • 3:45 PM",
    fromMe: false,
  },
  {
    id: 2,
    clubId: "esports",
    senderName: "You",
    senderRole: "Member",
    text: "Hey everyone, I’m excited to join!",
    timestamp: "Today • 3:47 PM",
    fromMe: true,
  },
  {
    id: 3,
    clubId: "cultural-council",
    senderName: "Events Chair",
    senderRole: "Officer",
    text: "Reminder: Cultural Showcase planning meeting tomorrow at 6 PM.",
    timestamp: "Yesterday • 5:12 PM",
    fromMe: false,
  },
];

function ChatScreen() {
  const [selectedClubId, setSelectedClubId] = useState(userClubs[0]?.id);
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");

  const selectedClub = userClubs.find((c) => c.id === selectedClubId);

  const clubMessages = messages.filter(
    (m) => m.clubId === selectedClubId
  );

  const handleSend = () => {
    if (!draft.trim()) return;

    const newMessage = {
      id: Date.now(),
      clubId: selectedClubId,
      senderName: "You",
      senderRole: selectedClub?.role || "Member",
      text: draft.trim(),
      timestamp: "Just now",
      fromMe: true,
    };

    // Future: POST to backend here
    setMessages((prev) => [...prev, newMessage]);
    setDraft("");
  };

  return (
    <Box
      as="main"
      w="100%"
      h="100%"
      bg="#F8F1C2"
      display="flex"
      flexDirection="column"
    >
      {/* Top section: header + club selector */}
      <Box px={5} pt={6} pb={3}>
        <Heading size="lg" mb={1} color="#043927">
          Chat
        </Heading>
        <Text fontSize="sm" color="gray.700" mb={3}>
          Choose a club to chat with members and organizers.
        </Text>

        {/* Club selector */}
        <Box
          bg="white"
          borderRadius="xl"
          boxShadow="md"
          p={2}
        >
          <Text
            fontSize="xs"
            textTransform="uppercase"
            letterSpacing="widest"
            color="gray.500"
            mb={2}
          >
            Your Clubs
          </Text>

          {/* UPDATED: Hidden scrollbar horizontal scroll */}
          <Flex
            gap={2}
            overflowX="auto"
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none", // Firefox
            }}
          >
            {userClubs.map((club) => {
              const isActive = club.id === selectedClubId;
              return (
                <Flex
                  key={club.id}
                  onClick={() => setSelectedClubId(club.id)}
                  align="center"
                  px={3}
                  py={2}
                  borderRadius="full"
                  bg={isActive ? "#00773F" : "gray.100"}
                  color={isActive ? "#F8F1C2" : "gray.800"}
                  fontSize="xs"
                  cursor="pointer"
                  whiteSpace="nowrap"
                  gap={2}
                >
                  <Text fontWeight="semibold">{club.name}</Text>
                  {club.unreadCount > 0 && !isActive && (
                    <Badge
                      borderRadius="full"
                      fontSize="0.6rem"
                      colorScheme="red"
                    >
                      {club.unreadCount}
                    </Badge>
                  )}
                </Flex>
              );
            })}
          </Flex>

          {selectedClub && (
            <Text fontSize="xs" color="gray.500" mt={2}>
              Role: <Text as="span" fontWeight="medium">{selectedClub.role}</Text>
            </Text>
          )}
        </Box>
      </Box>

      {/* Messages area */}
      <Box
        flex="1"
        px={4}
        pb={2}
        overflowY="auto"
      >
        <Stack spacing={3}>
          {clubMessages.length === 0 && (
            <Box
              mt={4}
              textAlign="center"
              fontSize="sm"
              color="gray.600"
            >
              No messages yet. Say hi to your club!
            </Box>
          )}

          {clubMessages.map((msg) => (
            <Flex
              key={msg.id}
              justify={msg.fromMe ? "flex-end" : "flex-start"}
            >
              <Box maxW="75%">
                {!msg.fromMe && (
                  <Text
                    fontSize="xs"
                    color="gray.600"
                    mb={0.5}
                  >
                    {msg.senderName} • {msg.senderRole}
                  </Text>
                )}

                <Box
                  bg={msg.fromMe ? "#00773F" : "white"}
                  color={msg.fromMe ? "#F8F1C2" : "gray.800"}
                  borderRadius="xl"
                  px={3}
                  py={2}
                  boxShadow={msg.fromMe ? "md" : "sm"}
                >
                  <Text fontSize="sm">{msg.text}</Text>
                </Box>

                <Text
                  fontSize="xs"
                  color="gray.500"
                  mt={0.5}
                  textAlign={msg.fromMe ? "right" : "left"}
                >
                  {msg.timestamp}
                </Text>
              </Box>
            </Flex>
          ))}
        </Stack>
      </Box>

      {/* Input bar */}
      <Box
        px={4}
        py={2}
        borderTop="1px solid rgba(0,0,0,0.08)"
        bg="#F8F1C2"
      >
        <Flex align="center" gap={2}>
          <Input
            size="sm"
            bg="white"
            placeholder={
              selectedClub
                ? `Message ${selectedClub.name}...`
                : "Select a club to start chatting..."
            }
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            isDisabled={!selectedClub}
            _focusVisible={{
              borderColor: "green.600",
              boxShadow: "0 0 0 1px rgba(22, 101, 52, 0.6)",
            }}
          />

          <IconButton
            aria-label="Send message"
            icon={<Send size={16} />}
            size="sm"
            borderRadius="full"
            bg="green.700"
            color="white"
            _hover={{ bg: "green.800" }}
            _active={{ bg: "green.900" }}
            onClick={handleSend}
            isDisabled={!selectedClub || !draft.trim()}
          />
        </Flex>
      </Box>

      {/* Bottom nav */}
      <BottomNav />
    </Box>
  );
}

export default ChatScreen;