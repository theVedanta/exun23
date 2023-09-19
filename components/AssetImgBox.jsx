import { Box, Grid, Heading, Image, Text, Tooltip } from "@chakra-ui/react";
import { FaEthereum } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import AccordionCard from "./AccordionCard";
import NftItem from "./NftItem";
import { ITEMS } from "../data";
import ToolTip from "./ToolTip";
import { AiFillEye } from "react-icons/ai";

const AssetImgBox = ({ cart, setCart, img }) => {
    return (
        <>
            <Box maxWidth="500px">
                <Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="space-between"
                        p="12px"
                        borderRadius="10px"
                    >
                        <Heading
                            fontFamily="primary"
                            fontSize="20px"
                            fontWeight="600"
                        >
                            #4102
                        </Heading>
                        <Box display="flex" alignItems="flex-end">
                            <ToolTip title="Ethereum">
                                <Box p="0" mb="4px" mr="10px">
                                    <FaEthereum
                                        cursor="pointer"
                                        color="grey"
                                        fontSize="18px"
                                    />
                                </Box>
                            </ToolTip>
                            <Box display="flex" alignItems="center" mr="10px">
                                <Text color="gray" mr="5px">
                                    5
                                </Text>

                                <ToolTip title="Favourite">
                                    {" "}
                                    <AiOutlineHeart
                                        cursor="pointer"
                                        color="gray"
                                        fontSize="21px"
                                    />
                                </ToolTip>
                            </Box>
                            <Text
                                color="gray"
                                fontWeight="500"
                                fontSize="15px"
                                display="flex"
                                alignItems="center"
                                mr="10px"
                            >
                                <span
                                    style={{
                                        marginRight: "5px",
                                        marginBottom: "1px",
                                    }}
                                >
                                    112 views
                                </span>
                                <AiFillEye fontSize="19px" />
                            </Text>
                        </Box>
                    </Box>
                    <Image src={img} borderRadius="10px" alt="nft" />
                </Box>

                <AccordionCard
                    icon={<BsFillGrid3X2GapFill />}
                    title="More from this collection"
                    showMoreBtn={true}
                    showBorder={true}
                >
                    <Grid templateColumns="repeat(2,1fr)" gridGap="10px">
                        {ITEMS.map((item, i) => (
                            <NftItem
                                item={item}
                                cart={cart}
                                setCart={setCart}
                                key={i}
                            />
                        ))}
                    </Grid>
                </AccordionCard>
            </Box>
        </>
    );
};

export default AssetImgBox;
