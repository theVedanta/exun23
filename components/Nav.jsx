import {
    Box,
    Container,
    Button,
    useColorMode,
    Image,
    Flex,
    Link,
    TagLeftIcon,
    Heading,
} from "@chakra-ui/react";
import { CopyIcon, SunIcon } from "@chakra-ui/icons";
import { useToast } from "@chakra-ui/react";

const Nav = ({ address, setAddress }) => {
    const { toggleColorMode } = useColorMode();
    const toast = useToast();

    const connectWallet = async () => {
        const { ethereum } = window;
        if (!ethereum) return;

        try {
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });

            window.localStorage.setItem("nft-wallet", accounts[0]);
            setAddress(accounts[0]);
        } catch (err) {
            toast({
                title: "Some error occurred",
                description: "There was an unexpected server error.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-right",
            });
        }
    };

    return (
        <Box borderBottom="2px" borderColor="whiteAlpha.300">
            <Container
                maxW="container.xl"
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                py={4}
            >
                <Flex alignItems="center">
                    <Link
                        href="/"
                        display="flex"
                        alignItems="center"
                        _hover={{ textDecor: "none" }}
                    >
                        <Image
                            src="/logo.png"
                            boxSize="40px"
                            alt="top1"
                            mr={4}
                        />
                        <Heading
                            color="purple.400"
                            size="md"
                            mr={8}
                            fontWeight="black"
                            transition="all 0.3s"
                            _hover={{ color: "purple.200" }}
                        >
                            Metaballism
                        </Heading>
                    </Link>
                    {[
                        { title: "Home", link: "/" },
                        { title: "Features", link: "/feats" },
                        { title: "Shop", link: "/assets" },
                        { title: "Share", link: "/share" },
                        { title: "My NFTs", link: "/account" },
                    ].map((btn, i) => (
                        <Link
                            key={i}
                            href={btn.link}
                            _hover={{ textDecor: "none" }}
                        >
                            <Button mx={1} variant="ghost">
                                {btn.title}
                            </Button>
                        </Link>
                    ))}
                </Flex>
                <Flex>
                    <Button variant="ghost" mr={2} onClick={toggleColorMode}>
                        <SunIcon />
                    </Button>
                    {address !== null && (
                        <Button
                            mr={2}
                            variant="outline"
                            onClick={() => {
                                navigator.clipboard.writeText(address);
                            }}
                        >
                            <TagLeftIcon as={CopyIcon} />
                            {address.slice(0, 6)}...{address.slice(-4)}
                        </Button>
                    )}
                    {address === null ? (
                        <Button
                            onClick={connectWallet}
                            variant="outline"
                            colorScheme="purple"
                        >
                            Connect
                        </Button>
                    ) : (
                        <Button
                            onClick={() => {
                                setAddress(null);
                                window.localStorage.removeItem("nft-wallet");
                            }}
                            variant="outline"
                            colorScheme="red"
                        >
                            Disconnect
                        </Button>
                    )}
                </Flex>
            </Container>
        </Box>
    );
};

export default Nav;
