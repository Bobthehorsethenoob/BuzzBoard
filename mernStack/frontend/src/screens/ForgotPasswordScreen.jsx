// src/screens/ForgotPasswordScreen.jsx
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Stack,
  Link,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function ForgotPasswordScreen() {
  return (
    <Box as="main" w="100%" h="100%" bg="#F8F1C2">
      <Flex direction="column" h="100%" px={6} pt={6} pb={4}>
        {/* Header */}
        <Box mb={6}>
          <Text
            fontSize="xs"
            textTransform="uppercase"
            letterSpacing="widest"
            color="#0B4D40"
          >
            Sacramento State
          </Text>

          <Heading mt={1} size="lg" color="#043927">
            BuzzBoard
          </Heading>

          <Text mt={3} fontSize="sm" color="gray.700">
            Forgot your password? Enter your Sac State email and we’ll send you
            a link to reset it.
          </Text>
        </Box>

        {/* Card */}
        <Box bg="white" borderRadius="2xl" boxShadow="xl" px={5} py={5}>
          <Stack spacing={4}>
            <Box>
              <Text fontSize="sm" mb={1} color="gray.700">
                Sac State Email
              </Text>
              <Input
                type="email"
                placeholder="you@csus.edu"
                bg="gray.50"
                size="sm"
                _focusVisible={{
                  borderColor: "green.600",
                  boxShadow: "0 0 0 1px rgba(22, 101, 52, 0.6)",
                }}
              />
            </Box>

            <Button
              mt={2}
              size="sm"
              color="white"
              bg="green.700"
              _hover={{ bg: "green.800" }}
              _active={{ bg: "green.900" }}
              borderRadius="full"
            >
              Send reset link
            </Button>

            <Text fontSize="xs" color="gray.600" mt={2}>
              Make sure to check your spam folder if you don’t see the email in
              a few minutes.
            </Text>
          </Stack>
        </Box>

        {/* Footer: back to login */}
        <Flex mt="auto" pt={4} justify="center">
          <Text fontSize="xs" color="gray.600">
            Remember your password?{" "}
            <Link
              as={RouterLink}
              to="/"
              color="green.700"
              fontWeight="semibold"
            >
              Back to login
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ForgotPasswordScreen;