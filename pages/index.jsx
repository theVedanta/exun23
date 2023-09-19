import {
    Box,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    Link,
    Text,
} from "@chakra-ui/react";

const Home = ({ isOwner }) => {
    return (
        <Box bg="url(/bg.jpg)" w="100vw">
            <Container
                maxW={"container.xl"}
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                h="100vh"
            >
                {isOwner ? (
                    <>
                        <Heading>
                            What&apos;re you doing here admin hai tu 🙄
                        </Heading>
                        <Link href="/admin">
                            <Button
                                mt={4}
                                variant="solid"
                                colorScheme="purple"
                                size="lg"
                                _hover={{ textDecoration: "none" }}
                            >
                                Admin
                            </Button>
                        </Link>
                    </>
                ) : (
                    <>
                        <Container
                            maxW="container.xl"
                            display="flex"
                            flexDirection="column"
                            alignItems="center"
                            justifyContent="center"
                            h="80vh"
                        >
                            <Image
                                src="/full-logo.png"
                                boxSize="340px"
                                alt="logo"
                            />
                            <Text
                                w="70%"
                                textAlign="center"
                                fontSize={45}
                                fontWeight="black"
                            >
                                Personalise{" "}
                                <Text display="inline" color="purple.400">
                                    tracks
                                </Text>
                                , make{" "}
                                <Text display="inline" color="purple.200">
                                    adventure
                                </Text>
                                , trade{" "}
                                <Text display="inline" color="purple.600">
                                    skins
                                </Text>{" "}
                                all with{" "}
                                <Text display="inline" color="purple.400">
                                    Web3
                                </Text>
                            </Text>
                            <Text
                                w="50%"
                                textAlign="center"
                                mt={4}
                                color="whiteAlpha.700"
                            >
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Ducimus quasi expedita,
                                reprehenderit fugiat harum vitae cupiditate
                                dolorem. A ea molestias quisquam deserunt
                                suscipit ducimus adipisci.
                            </Text>
                            <Flex>
                                <Button
                                    colorScheme="purple"
                                    size="lg"
                                    mx={4}
                                    mt={8}
                                >
                                    Try it out
                                </Button>
                                <Button
                                    colorScheme="purple"
                                    variant="outline"
                                    size="lg"
                                    mx={4}
                                    mt={8}
                                >
                                    shop
                                </Button>
                            </Flex>
                        </Container>
                    </>
                )}
            </Container>
        </Box>
    );
};

export default Home;
