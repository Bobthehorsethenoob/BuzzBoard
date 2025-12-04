// src/App.jsx
import { Routes, Route } from "react-router-dom";
import PhoneFrame from "./components/PhoneFrame";
import LoginScreen from "./screens/LoginScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import HomeScreen from "./screens/HomeScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import ChatScreen from "./screens/ChatScreen";
import { Box, Text } from "@chakra-ui/react";
import CalendarScreen from "./screens/CalendarScreen";

function Placeholder({ label }) {
  return (
    <Box w="100%" h="100%" bg="#F8F1C2" display="flex" alignItems="center" justifyContent="center">
      <Text>{label} screen coming soon</Text>
    </Box>
  );
}

function App() {
  return (
    <PhoneFrame>
      <Routes>
        {/* Auth flows */}
        <Route path="/" element={<LoginScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        <Route path="/create-account" element={<CreateAccountScreen />} />
        <Route path="/notifications" element={<NotificationsScreen />} />
        <Route path="/chat" element={<ChatScreen />} />

        {/* Main app */}
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/events" element={<CalendarScreen />} />
        <Route path="/chat" element={<Placeholder label="Chat" />} />
        <Route path="/notifications" element={<Placeholder label="Notifications" />} />
      </Routes>
    </PhoneFrame>
  );
}

export default App;