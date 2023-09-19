import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

const Feats = () => {
    return (
        <Container
            maxW="container.xl"
            display="flex"
            flexDirection="column"
            alignItems="center"
        >
            <Flex
                direction="column"
                w="full"
                justifyContent="center"
                alignItems="center"
                mt={20}
                textAlign="center"
            >
                <Heading mt={10} fontSize={50} w="60%">
                    The{" "}
                    <Text display="inline" color="purple.300">
                        modern
                    </Text>
                    <Text display="inline" color="purple.400">
                        -
                    </Text>
                    <Text display="inline" color="purple.500">
                        retro
                    </Text>{" "}
                    game on the Decentralized Web
                </Heading>
                <Text w="44%" color="whiteAlpha.600" mt={5}>
                    Metaballism brings all the exciting tech you have hoped to
                    experience right in the palm of your hand. From building and
                    selling your own tracks in the Metaverse, to finding the
                    perfect skin for your ball, you can do it all here!
                </Text>
            </Flex>

            <Box mt={36} maxW="container.lg">
                <Flex mb={20}>
                    <Flex
                        direction="column"
                        borderRadius="xl"
                        justifyContent="center"
                        textAlign="center"
                        alignItems="center"
                        bg="whiteAlpha.200"
                        p={10}
                        w="26%"
                    >
                        <Image alt="feat" src="/feats/1.png" boxSize={120} />
                    </Flex>

                    <Box w="74%" px={20} py={8}>
                        <Heading>Buy and sell in-game NFTs</Heading>
                        <Text w="85%" color="whiteAlpha.800" mt={5}>
                            Bored of same old skins and repetitive tracks? Visit
                            the marketplace to buy some amazing skins and tracks
                            made by some of the best design artists. What makes
                            them special? There can only exist 1 skin of a type
                        </Text>
                    </Box>
                </Flex>

                <Flex mb={20} direction="row-reverse">
                    <Flex
                        direction="column"
                        borderRadius="xl"
                        justifyContent="center"
                        textAlign="center"
                        alignItems="center"
                        bg="whiteAlpha.200"
                        p={10}
                        w="26%"
                    >
                        <Image alt="feat" src="/feats/2.png" boxSize={120} />
                    </Flex>

                    <Box w="74%" px={20} py={8}>
                        <Heading>Customized tracks</Heading>
                        <Text w="85%" color="whiteAlpha.800" mt={5}>
                            Enter the MetaVerse! Jump into the pinball machine
                            and place the elements as you would want them to be
                            in a track. Make an NFT for the track&apos;s design
                            and trade. Open doors to a new universe
                        </Text>
                    </Box>
                </Flex>

                <Flex mb={20}>
                    <Flex
                        direction="column"
                        borderRadius="xl"
                        justifyContent="center"
                        textAlign="center"
                        alignItems="center"
                        bg="whiteAlpha.200"
                        p={10}
                        w="26%"
                    >
                        <Image alt="feat" src="/feats/3.png" boxSize={120} />
                    </Flex>

                    <Box w="74%" px={20} py={8}>
                        <Heading>theBalls Community</Heading>
                        <Text w="85%" color="whiteAlpha.800" mt={5}>
                            Share your ideas/skin-designs/track-layouts with the
                            other players around the world. Ask them for a price
                            to own it or just share for fun :) People can also
                            give their reviews on assets and make learning
                            easier!
                        </Text>
                    </Box>
                </Flex>

                <Flex mb={20} direction="row-reverse">
                    <Flex
                        direction="column"
                        borderRadius="xl"
                        justifyContent="center"
                        textAlign="center"
                        alignItems="center"
                        bg="whiteAlpha.200"
                        p={10}
                        w="26%"
                    >
                        <Image alt="feat" src="/feats/4.png" boxSize={120} />
                    </Flex>

                    <Box w="74%" px={20} py={8}>
                        <Heading>Earn as you play!</Heading>
                        <Text w="85%" color="whiteAlpha.800" mt={5}>
                            All throughout the Metaballism world, you can find
                            various tiny tokens that can either be NFTs or ETH.
                            Find them and collect them on your tracks to get new
                            skins/tracks. Surprises all around 😋
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Container>
    );
};

export default Feats;
