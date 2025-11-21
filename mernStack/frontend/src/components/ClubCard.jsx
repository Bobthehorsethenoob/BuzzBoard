import { Box, Heading, Text, Button, Stack } from '@chakra-ui/react'

export default function ClubCard({ club }) {
  const handleJoin = () => {
    alert(`Joined ${club.name}!`)
  }

  return (
    <Box
      borderWidth="1px"
      borderRadius="md"
      overflow="hidden"
      shadow="md"
      bg="white"
    >
      {/* image */}
      <Box w="100%" h="200px" overflow="hidden" bg="gray.100">
        <img
          src={club.image || 'https://via.placeholder.com/640x360?text=Club+Image'}
          alt={club.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </Box>

      {/* content */}
      <Box p={4}>
        <Stack spacing={3}>
          <Heading size="md">{club.name}</Heading>
          <Text color="gray.600">{club.description}</Text>
          <Text fontSize="sm" color="gray.500">
            {club.members} members
          </Text>
          <Button onClick={handleJoin} colorScheme="teal">
            Join Club
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}