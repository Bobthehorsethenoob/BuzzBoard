// src/components/BottomNav.jsx
import { Flex, Text } from "@chakra-ui/react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Home, CalendarDays, MessageCircle, BellRing } from "lucide-react";

const navItems = [
  { label: "Home", icon: Home, to: "/home" },
  { label: "Events", icon: CalendarDays, to: "/events" },
  { label: "Chat", icon: MessageCircle, to: "/chat" },
  { label: "Alerts", icon: BellRing, to: "/notifications" },
];

function BottomNav() {
  const location = useLocation();

  return (
    <Flex
      as="nav"
      bg="#00773F"
      py={1}
      px={2}
      align="center"
      justify="space-around"
      borderTop="1px solid rgba(0,0,0,0.1)"
    >
      {navItems.map(({ label, icon: Icon, to }) => {
        const isActive = location.pathname === to;

        return (
          <Flex
            key={to}
            as={RouterLink}
            to={to}
            direction="column"
            align="center"
            justify="center"
            flex="1"
            py={1}
            gap={0.5}
            color={isActive ? "#F8F1C2" : "#E0F2E9"}
            opacity={isActive ? 1 : 0.8}
            textDecoration="none"
          >
            <Icon size={20} />
            <Text fontSize="xs">{label}</Text>
          </Flex>
        );
      })}
    </Flex>
  );
}

export default BottomNav;