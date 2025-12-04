// src/screens/CreateAccountScreen.jsx
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

function CreateAccountScreen() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

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
            Create your BuzzBoard account to discover clubs, events, and campus
            updates at Sac State.
          </Text>
        </Box>

        {/* Card */}
        <Box bg="white" borderRadius="2xl" boxShadow="xl" px={5} py={5}>
          <Stack spacing={4}>
            {/* Name */}
            <Box>
              <Text fontSize="sm" mb={1} color="gray.700">
                Full Name
              </Text>
              <Input
                type="text"
                placeholder="First Last"
                bg="gray.50"
                size="sm"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                _focusVisible={{
                  borderColor: "green.600",
                  boxShadow: "0 0 0 1px rgba(22, 101, 52, 0.6)",
                }}
              />
            </Box>

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
                  placeholder="Create a password"
                  bg="#F9FAFB"
                  size="sm"
                  pr="40px"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  _focusVisible={{
                    borderColor: "#166534",
                    boxShadow: "0 0 0 1px rgba(22, 101, 52, 0.6)",
                  }}
                />

                <IconButton
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  size="sm"
                  variant="ghost"
                  bg="transparent"
                  color="#043927"
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

            {/* Confirm Password */}
            <Box>
              <Text fontSize="sm" mb={1} color="#4B5563">
                Confirm Password
              </Text>

              <Flex align="center" position="relative">
                <Input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Re-enter your password"
                  bg="#F9FAFB"
                  size="sm"
                  pr="40px"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  _focusVisible={{
                    borderColor: "#166534",
                    boxShadow: "0 0 0 1px rgba(22, 101, 52, 0.6)",
                  }}
                />

                <IconButton
                  aria-label={
                    showConfirm
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  size="sm"
                  variant="ghost"
                  bg="transparent"
                  color="#043927"
                  _hover={{ bg: "transparent", color: "#166534" }}
                  position="absolute"
                  right="6px"
                  top="50%"
                  transform="translateY(-50%)"
                  onClick={() => setShowConfirm(!showConfirm)}
                >
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </IconButton>
              </Flex>
            </Box>

            {/* Error message (if any) */}
            {error && (
              <Text fontSize="xs" color="red.600" textAlign="center">
                {error}
              </Text>
            )}

            {/* Create account button */}
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

                if (!fullName) {
                  setError("Please enter your full name.");
                  return;
                }
                if (!email) {
                  setError("Please enter your Sac State email.");
                  return;
                }
                if (!email.endsWith("@csus.edu")) {
                  setError("Email must be a valid @csus.edu address.");
                  return;
                }
                if (!password) {
                  setError("Please create a password.");
                  return;
                }
                if (password.length < 6) {
                  setError("Password should be at least 6 characters.");
                  return;
                }
                if (!confirmPassword) {
                  setError("Please confirm your password.");
                  return;
                }
                if (password !== confirmPassword) {
                  setError("Passwords do not match.");
                  return;
                }

                // All good → go to home for now
                navigate("/home");
              }}
            >
              Create account
            </Button>

            <Text fontSize="xs" color="gray.600" mt={2}>
              By creating an account, you agree to follow Sac State&apos;s
              community guidelines and club policies.
            </Text>
          </Stack>
        </Box>

        {/* Footer: back to login */}
        <Flex mt="auto" pt={4} justify="center">
          <Text fontSize="xs" color="gray.600">
            Already have an account?{" "}
            <Link
              as={RouterLink}
              to="/"
              color="green.700"
              fontWeight="semibold"
            >
              Log in
            </Link>
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
}

export default CreateAccountScreen;