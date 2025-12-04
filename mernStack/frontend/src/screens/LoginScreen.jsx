// src/screens/LoginScreen.jsx

import { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Stack,
  Link,
  IconButton,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

function LoginScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Box as="main" w="100%" h="100%" bg="#F8F1C2">
      <Flex direction="column" h="100%" px={6} pt={6} pb={4}>
        {/* Header */}
        <Box mb={6}>
          <Text
            fontSize="xs"
            textTransform="uppercase"
            letterSpacing="widest"
            color="#043927"
          >
            Sacramento State
          </Text>

          <Heading mt={1} size="lg" color="#043927">
            BuzzBoard
          </Heading>

          <Text mt={2} fontSize="sm" color="gray.700">
            Welcome to BuzzBoard. Sign in with your Sac State credentials to see
            club events, updates, and more.
          </Text>
        </Box>

        {/* Login card */}
        <Box bg="white" borderRadius="2xl" boxShadow="xl" px={5} py={5}>
          <Stack spacing={4}>
            {/* Email */}
            <Box>
              <Text fontSize="sm" mb={1} color="gray.700">
                Sac State Email
              </Text>
              <Input
                type="email"
                placeholder="you@csus.edu"
                bg="gray.50"
                size="sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                _focusVisible={{
                  borderColor: "green.600",
                  boxShadow: "0 0 0 1px rgba(22, 101, 52, 0.6)",
                }}
              />
            </Box>

            {/* Password */}
            <Box>
              <Text fontSize="sm" mb={1} color="#4B5563">
                Password
              </Text>

              <Flex align="center" position="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  bg="#F9FAFB"
                  size="sm"
                  pr="40px"  // space for the eye button
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  _focusVisible={{
                    borderColor: "#166534", // green-ish
                    boxShadow: "0 0 0 1px rgba(22, 101, 52, 0.6)",
                  }}
                />

                <IconButton
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  size="sm"
                  variant="ghost"
                  bg="transparent"
                  color="#043927" // Sac State green, used as currentColor
                  _hover={{ bg: "transparent", color: "#166534" }}
                  position="absolute"
                  right="6px"
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </IconButton>
              </Flex>
            </Box>

            {/* Remember / forgot */}
            <Flex align="center" justify="space-between" mt={1}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "0.75rem",
                }}
              >
                <input
                  type="checkbox"
                  style={{
                    width: 14,
                    height: 14,
                    accentColor: "#166534", // green
                  }}
                />
                <span>Remember me</span>
              </label>

              <Link
                as={RouterLink}
                to="/forgot-password"
                fontSize="xs"
                color="green.700"
                fontWeight="semibold"
              >
                Forgot password?
              </Link>
            </Flex>

            {/* Error message (if any) */}
            {error && (
              <Text fontSize="xs" color="red.600" textAlign="center">
                {error}
              </Text>
            )}

            {/* Login button */}
            <Button
              mt={2}
              size="sm"
              color="white"
              bg="green.700"
              _hover={{ bg: "green.800" }}
              _active={{ bg: "green.900" }}
              borderRadius="full"
              onClick={() => {
                setError("");

                if (!email) {
                  setError("Please enter your Sac State email.");
                  return;
                }

                if (!email.endsWith("@csus.edu")) {
                  setError("Email must be a valid @csus.edu address.");
                  return;
                }

                if (!password) {
                  setError("Please enter your password.");
                  return;
                }

                // All good → go to home
                navigate("/home");
              }}
            >
              Log in
            </Button>

            {/* Divider + create account */}
            <Box h="1px" bg="gray.300" mt={3} mb={2} />

            <Text fontSize="xs" color="gray.700" textAlign="center">
              New to BuzzBoard?{" "}
              <Link
                as={RouterLink}
                to="/create-account"
                color="#043927"
                fontWeight="semibold"
              >
                Create an account
              </Link>
            </Text>
          </Stack>
        </Box>

        {/* Footer */}
        <Flex mt="auto" pt={4} justify="center">
          <Text fontSize="xs" color="gray.500">
            BuzzBoard • Clubs & Campus Life at Sac State
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default LoginScreen;