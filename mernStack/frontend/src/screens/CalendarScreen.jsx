import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Text,
  Spinner,
  Heading,
  Button,
} from "@chakra-ui/react";
import BottomNav from "../components/BottomNav";

function getDaysInMonth(year, month) {
  const date = new Date(year, month, 1);
  const days = [];

  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

function CalendarScreen() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch("http://localhost:5000/api/calendar/events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching calendar events:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const days = getDaysInMonth(year, month);

  const eventsByDate = events.reduce((acc, ev) => {
    const key = ev.start?.slice(0, 10);
    if (!acc[key]) acc[key] = [];
    acc[key].push(ev);
    return acc;
  }, {});

  const changeMonth = (delta) => {
    const newDate = new Date(year, month + delta, 1);
    setCurrentDate(newDate);
  };

  return (
    <Box
      h="100%"
      display="flex"
      flexDirection="column"
      bg="#F8F1C2"
    >
      <Box flex="1" overflowY="auto" p={4}>
        <Flex align="center" justify="space-between" mb={4}>
          <Button size="sm" onClick={() => changeMonth(-1)}>←</Button>
          <Heading size="md">{monthName} {year}</Heading>
          <Button size="sm" onClick={() => changeMonth(1)}>→</Button>
        </Flex>

        {/* If loading */}
        {loading && (
          <Flex justify="center" mt={8}>
            <Spinner size="lg" color="#00773F" />
          </Flex>
        )}

        {!loading && (
          <Box>
            {/* Week header */}
            <Flex textAlign="center" fontWeight="bold" color="#043927" mb={2}>
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((w) => (
                <Box flex="1" key={w}>{w}</Box>
              ))}
            </Flex>

            {/* Calendar Grid */}
            <Flex wrap="wrap" borderTop="1px solid #D1D5DB">
              {(() => {
                const firstDay = days[0].getDay();
                const blanks = Array.from({ length: firstDay }, (_, i) => (
                  <Box key={`blank-${i}`} w="14.28%" h="80px"></Box>
                ));

                return [
                  ...blanks,
                  ...days.map((day) => {
                    const iso = day.toISOString().slice(0, 10);
                    const dayEvents = eventsByDate[iso] || [];

                    return (
                      <Box
                        key={iso}
                        w="14.28%"
                        h="80px"
                        p={1}
                        border="1px solid #E5E7EB"
                        borderTop="none"
                        borderLeft="none"
                        bg="white"
                      >
                        <Text fontSize="xs" fontWeight="bold" color="#043927">
                          {day.getDate()}
                        </Text>

                        {dayEvents.map((ev) => (
                          <Box
                            key={ev.id}
                            bg="#00773F"
                            color="white"
                            borderRadius="md"
                            mt={1}
                            p={1}
                            fontSize="10px"
                            overflow="hidden"
                          >
                            {ev.title}
                          </Box>
                        ))}
                      </Box>
                    );
                  }),
                ];
              })()}
            </Flex>
          </Box>
        )}
      </Box>

      <BottomNav />
    </Box>
  );
}

export default CalendarScreen;