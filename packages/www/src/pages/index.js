import React, { useEffect } from "react";
import { Container, Heading, Button} from "theme-ui";
import netlifyIdentity from "netlify-identity-widget";


export default props => (
    useEffect( () => {
        netlifyIdentity.init({});
    });

    <Container>
        <Flex sx={{flexDirection:"column", padding:3}}>
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