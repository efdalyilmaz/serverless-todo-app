import React, { useEffect } from "react";
import { Container, Flex, Heading, Button, NavLink} from "theme-ui";
import {Link} from "gatsby";
import netlifyIdentity from "netlify-identity-widget";


export default props => {
    useEffect( () => {
        netlifyIdentity.init({});
        
    });

    return (
        <Container>
            <Flex as="nav">
                <NavLink as={Link} to={"/"} href="#!" p={2}>
                    Home
                </NavLink>
                <NavLink as={Link} to={"/app"} href="#!" p={2}>
                    Blog
                </NavLink>
                <NavLink href="#!" p={2}>
                    About
                </NavLink>
            </Flex>
            <Flex sx={{ flexDirection:"column", padding:3 }}>
                <Heading as="h1">Get Stuff Done</Heading>
                <Button 
                    sx={{marginTop:2}}
                    onClick={() => { netlifyIdentity.open()}}
                >
                    Log In
                </Button>
                <Button 
                    sx={{marginTop:2}}
                    onClick={() => { netlifyIdentity.currentUser()}}
                >
                    Log User
                </Button>
            </Flex>
        </Container>
    );
}