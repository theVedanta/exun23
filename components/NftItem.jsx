import { Badge, Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaEthereum } from "react-icons/fa";
import ToolTip from "./ToolTip";

const NftItem = ({ style, cart, item, setCart, display = false }) => {
    return (
        <>
            <Link href={`/assets/${item.id}`} passHref>
                <Box
                    borderRadius="10px"
                    data-component-name="CollectionItem"
                    cursor="pointer"
                    bg="whiteAlpha.200"
                    boxShadow="0 0 10px rgba(0,0,0,0.1)"
                    h="full"
                    {...style}
                >
                    <Box
                        width="100%"
                        pos="relative"
                        overflow="hidden"
                        h="30vh"
                        borderRadius="10px 10px  0 0"
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Button
                            pos="absolute"
                            top="10px "
                            left="10px"
                            borderRadius="10pc"
                            p="5px"
                            opacity="0"
                            data-component-name="CollectionItemEthBtn"
                            transition="all 0.2s"
                        >
                            <ToolTip title="Ethereum">
                                <FaEthereum />
                            </ToolTip>
                        </Button>
                        <Image
                            src={item.img}
                            width="100%"
                            height="100%"
                            fit="cover"
                            borderRadius="10px 10px 0 0"
                            data-component-name="CollectionItemImg"
                            transition="0.3s"
                            alt="nftItem"
                        />
                    </Box>
                    <Box
                        p="1rem"
                        borderRadius="0 0 10px 10px"
                        pos="relative"
                        overflow="hidden"
                    >
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Heading size="md" color="purple.200" mb={4}>
                                {item.name}
                            </Heading>
                            <Badge
                                border="1px solid #ddd"
                                p="4px 10px"
                                borderRadius="5px"
                                fontSize="13px"
                            >
                                # {item.rank}
                            </Badge>
                        </Box>
                        <Text
                            fontWeight="600"
                            fontSize="16px"
                            mt="8px"
                            mb="5px"
                        >
                            {item.price} ETH
                        </Text>
                        <Text fontWeight="500" fontSize="14px">
                            $ {item.usdPrice}
                        </Text>

                        {!display && (
                            <Button
                                // data-component-name="CollectionItemCartBtn"
                                pos="absolute"
                                bottom="10px"
                                right="10px"
                                transition="all 0.3s"
                                // width="100%"
                                height="auto"
                                p="11px 15px"
                                fontWeight="600"
                                // borderRadius="0 0 10px 10px"
                                fontSize="12px"
                                // bg="rgb(32, 129, 226)"
                                colorScheme={
                                    cart.find(
                                        (cartItem) => item.id === cartItem.id
                                    )
                                        ? "red"
                                        : "purple"
                                }
                                variant={
                                    cart.find(
                                        (cartItem) => item.id === cartItem.id
                                    )
                                        ? "outline"
                                        : "solid"
                                }
                                // _hover={{ bg: "rgb(46, 142, 238)" }}

                                onClick={(e) => {
                                    e.preventDefault();
                                    const exists = cart.find(
                                        (cartItem) => item.id === cartItem.id
                                    );

                                    exists
                                        ? setCart(
                                              cart.filter(
                                                  (cartItem) =>
                                                      cartItem.id !== item.id
                                              )
                                          )
                                        : setCart([...cart, item]);
                                }}
                            >
                                {cart.find(
                                    (cartItem) => item.id === cartItem.id
                                )
                                    ? "Remove"
                                    : "Add to Cart"}
                            </Button>
                        )}
                    </Box>
                </Box>
            </Link>
        </>
    );
};

export default NftItem;
