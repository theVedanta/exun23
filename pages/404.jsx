import { Container, Heading } from "@chakra-ui/react";

const Error = () => {
    return (
        <Container
            maxW="container.xl"
            h="90vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <Heading>ERROR 404</Heading>
        </Container>
    );
};

export default Error;
