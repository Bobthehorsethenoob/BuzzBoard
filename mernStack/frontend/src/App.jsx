import { Routes, Route, Link } from 'react-router-dom'
import { Container, Heading, Button, Stack, Text } from '@chakra-ui/react'
import ClubsPage from './pages/ClubsPage.jsx'

function Home() {
  return (
    <Container py={12} centerContent>
      <Stack spacing={6} align="center">
        <Heading>Home Page</Heading>
        <Text>Chakra UI + React Router are set up ✅</Text>
        <Button as={Link} to="/create">Go to Create Page</Button>
        <Button as={Link} to="/clubs" colorScheme="teal">
          View Clubs
        </Button>
      </Stack>
    </Container>
  )
}

function Create() {
  return (
    <Container py={12} centerContent>
      <Stack spacing={6} align="center">
        <Heading>Create Page</Heading>
        <Text>Build your form or creator UI here.</Text>
        <Button as={Link} to="/">Back Home</Button>
      </Stack>
    </Container>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<Create />} />
      <Route path="/clubs" element={<ClubsPage />} />
    </Routes>
  )
}