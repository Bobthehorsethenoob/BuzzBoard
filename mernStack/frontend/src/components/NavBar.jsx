import React from "react";
import { Button, Container, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";


export const NavBar = () => {
    return (

        <Flex gap="4" justify="center">
            <Button as={Link} to="/" size={"xl"}>Home</Button>
            <Button as={Link} to="/search" size={"xl"}>Search</Button>
        </Flex>

    );
};