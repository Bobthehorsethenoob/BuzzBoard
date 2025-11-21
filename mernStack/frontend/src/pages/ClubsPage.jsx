import { useEffect, useState } from 'react'
import {
  Container,
  SimpleGrid,
  Heading,
  Text,
  Spinner,
  Box,
  VStack,
} from '@chakra-ui/react'
import ClubCard from '../components/ClubCard.jsx'

// Mock data for now (swap to API later)
const mockClubs = [
  {
    id: '1',
    name: 'Chess Club',
    description:
      'For people who love strategy, thinking ahead, and a good game of chess.',
    image: '', // leave blank for now
    members: 24,
  },
  {
    id: '2',
    name: 'Robotics Club',
    description: 'Design, build, and compete with robots! All levels welcome.',
    image: '',
    members: 18,
  },
  {
    id: '3',
    name: 'Photography Club',
    description:
      'Capture the world through your lens — from portraits to landscapes.',
    image: '',
    members: 15,
  },
]

export default function ClubsPage() {
  const [clubs, setClubs] = useState([])
  const [status, setStatus] = useState('loading') // loading | ok | error
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    // simulate async fetch
    const t = setTimeout(() => {
      try {
        setClubs(mockClubs)
        setStatus('ok')
      } catch (e) {
        setErrorMsg('Failed to load clubs.')
        setStatus('error')
      }
    }, 400)
    return () => clearTimeout(t)
  }, [])

  if (status === 'loading') {
    return (
      <Container py={12} centerContent>
        <Spinner size="xl" />
        <Text mt={4}>Loading clubs…</Text>
      </Container>
    )
  }

  if (status === 'error') {
    return (
      <Container py={12}>
        <Box
          role="alert"
          borderWidth="1px"
          borderRadius="md"
          p={4}
          bg="red.50"
          color="red.700"
        >
          {errorMsg}
        </Box>
      </Container>
    )
  }

  if (clubs.length === 0) {
    return (
      <Container py={12} centerContent>
        <Text>No clubs found.</Text>
      </Container>
    )
  }

  return (
    <Container py={12} maxW="6xl">
      <VStack spacing={6} align="center" mb={8}>
        <Heading>Clubs</Heading>
        <Text color="gray.500">
          Explore student clubs and find your community.
        </Text>
      </VStack>

      <SimpleGrid columns={[1, 2, 3]} spacing={8}>
        {clubs.map((club) => (
          <ClubCard key={club.id} club={club} />
        ))}
      </SimpleGrid>
    </Container>
  )
}