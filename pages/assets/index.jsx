import {
    Box,
    Button,
    Container,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    Grid,
    Heading,
    Image,
    Input,
    Tag,
    Text,
    useDisclosure,
    useToast,
    VStack,
} from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { TfiViewGrid } from "react-icons/tfi";
import { AiOutlineReload } from "react-icons/ai";
import { BsGrid3X3Gap, BsGrid1X2 } from "react-icons/bs";
import ItemCollectionToolbarItem from "../../components/ItemCollectionToolbarItem";
import NftItem from "../../components/NftItem";
import { useState, useRef } from "react";
import { ITEMS } from "../../data";
import { FiShoppingCart } from "react-icons/fi";

const Assets = ({ cart, setCart, connectedContract }) => {
    const [gridCol, setGridCol] = useState(4);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = useRef();
    const [pending, setPending] = useState(false);
    const toast = useToast();

    const buy = async (e) => {
        try {
            e.preventDefault();
            if (!connectedContract) return;
            setPending(true);

            const mintedTxn = await connectedContract.mint({
                value: 0.00008 * 10 ** 18,
            });
            await mintedTxn.wait();

            toast({
                title: "Transaction completed",
                description: "Success. Please wait 1-5 minutes to see changes.",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom-right",
            });
            setPending(false);
            setCart([]);
        } catch (err) {
            setPending(false);
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
        <>
            <Button
                ref={btnRef}
                variant="solid"
                colorScheme="purple"
                borderRadius="full"
                onClick={onOpen}
                position="fixed"
                bottom={4}
                right={4}
                width="14"
                h="14"
            >
                <FiShoppingCart />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
                size="sm"
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Your cart</DrawerHeader>

                    <DrawerBody>
                        <VStack>
                            {cart.map((c, i) => (
                                <CartItem key={i} item={c} />
                            ))}
                        </VStack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button
                            colorScheme="purple"
                            size="lg"
                            w="full"
                            onClick={buy}
                            isLoading={pending}
                            isDisabled={pending || cart.length === 0}
                        >
                            Checkout
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

            <Container maxWidth="container.xl">
                <Box display="flex" alignItems="center" mt="3rem">
                    <Box
                        display="flex"
                        alignItems="center"
                        border="1px"
                        borderRadius="10px"
                        p="0 16px"
                        flex="1"
                    >
                        <BiSearch fontSize="20px" color="#bbb" />
                        <Input
                            flex="1"
                            autoFocus
                            placeholder="Search By Name or Attribute"
                            border="none"
                            padding="12px 10px"
                            variant="unstyled"
                        />
                    </Box>
                    <Button
                        height="auto"
                        p="15px 0"
                        mr="5px"
                        fontWeight="600"
                        borderRadius="10px"
                        variant="solid"
                        colorScheme="purple"
                        border="2px"
                        flex=".3"
                        mx="10px"
                    >
                        Search
                    </Button>
                    <Box display="flex" alignItems="center">
                        <ItemCollectionToolbarItem
                            onClick={() => setGridCol(4)}
                            style={{
                                borderRadius: "10px 0 0 10px",
                                p: "13.5px 20px",
                            }}
                            icon={<TfiViewGrid fontSize="17px" />}
                        />
                        <ItemCollectionToolbarItem
                            onClick={() => setGridCol(5)}
                            icon={<BsGrid3X3Gap fontSize="17px" />}
                            style={{ p: "13.5px 20px" }}
                        />
                        <ItemCollectionToolbarItem
                            onClick={() => setGridCol(4)}
                            icon={<BsGrid1X2 fontSize="17px" />}
                            style={{
                                borderRight: "none",
                                borderRadius: "0 10px 10px 0",
                                p: "13.5px 20px",
                            }}
                        />
                    </Box>
                </Box>

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    mt="1rem"
                >
                    <Box display="flex" alignItems="center">
                        <Button
                            variant="ghost"
                            borderRadius="10pc"
                            padding="5px "
                            mr="10px"
                        >
                            <AiOutlineReload fontSize="17px" />
                        </Button>
                        <Text fontSize="15px">Updated 15s ago</Text>
                    </Box>
                    <Tag variant="solid" colorScheme="purple" px={2} py={1}>
                        10,000 items
                    </Tag>
                </Box>

                <Grid
                    templateColumns={`repeat(${gridCol}, 1fr)`}
                    gridGap="10px"
                    mt="1rem"
                    mb="1rem"
                >
                    {ITEMS.map((item, i) => (
                        <NftItem
                            setCart={setCart}
                            cart={cart}
                            item={item}
                            key={i}
                        />
                    ))}
                </Grid>
            </Container>
        </>
    );
};
const CartItem = ({ item }) => {
    return (
        <Flex
            w="full"
            bg="blackAlpha.300"
            p={2}
            mb={2}
            borderRadius="lg"
            alignItems="center"
        >
            <Image
                src={item.img}
                fit="cover"
                alt="logo"
                boxSize={24}
                borderRadius="md"
            />
            <Box ml={6}>
                <Heading fontSize={20}>{item.name}</Heading>
                <Text mt={2}>
                    {item.price}&nbsp;&nbsp;
                    <Tag>${item.usdPrice}</Tag>
                </Text>
            </Box>
        </Flex>
    );
};

export default Assets;
