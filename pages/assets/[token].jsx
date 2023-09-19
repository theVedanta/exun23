import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { AiOutlineReload, AiFillEye } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import { CgTag } from "react-icons/cg";
import { BiDetail } from "react-icons/bi";
import { FaListUl } from "react-icons/fa";
import { BsShareFill, BsThreeDotsVertical } from "react-icons/bs";
import AssetImgBox from "../../components/AssetImgBox";
import ItemCollectionToolbarItem from "../../components/ItemCollectionToolbarItem";
import ItemCollectionPriceCont from "../../components/ItemCollectionPriceCont";
import AccordionCard from "../../components/AccordionCard";
import OfferTable from "../../components/OfferTable";
import ItemPropCard from "../../components/ItemPropCard";
import DetailItem from "../../components/DetailItem";
import ToolTip from "../../components/ToolTip";
import { DETAILS, ITEMS, PROPERTIES } from "../../data";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Asset = ({ cart, setCart }) => {
    const router = useRouter();
    const { token } = router.query;
    const [item, setItem] = useState({});

    useEffect(() => {
        setItem(
            ITEMS.find((item) => item.id.toString().trim() === token.trim())
        );
    }, [token]);

    return (
        <>
            <Flex m="2rem auto" w="container.xl">
                <AssetImgBox
                    img={item && item.img}
                    cart={cart}
                    setCart={setCart}
                />
                <Box p="0 2rem">
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="flex-end"
                    >
                        <Box display="flex" alignItems="center">
                            <ToolTip title="Refresh Metadata">
                                <ItemCollectionToolbarItem
                                    style={{ borderRadius: "10px 0 0 10px" }}
                                    icon={<AiOutlineReload fontSize="17px" />}
                                />
                            </ToolTip>
                            <ToolTip title="View on external website">
                                <ItemCollectionToolbarItem
                                    icon={<FiExternalLink fontSize="17px" />}
                                />
                            </ToolTip>
                            <ToolTip title="Share">
                                <ItemCollectionToolbarItem
                                    icon={<BsShareFill fontSize="17px" />}
                                />
                            </ToolTip>
                            <ToolTip title="More">
                                <ItemCollectionToolbarItem
                                    style={{
                                        borderRight: "none",
                                        borderRadius: "0 10px 10px 0",
                                    }}
                                    icon={
                                        <BsThreeDotsVertical fontSize="17px" />
                                    }
                                />
                            </ToolTip>
                        </Box>
                    </Box>

                    <ItemCollectionPriceCont />

                    <AccordionCard
                        icon={<FaListUl color="blackAlpha.600" />}
                        title="Offers"
                        showBorder={true}
                    >
                        <OfferTable />
                    </AccordionCard>

                    <Box
                        borderRadius="10px"
                        boxShadow="0 0 5px rgba(0,0,0,0.1)"
                        mt="1rem"
                        bg="whiteAlpha.50"
                    >
                        <Box
                            borderBottom="1px solid rgba(255,255,255,0.1)"
                            p="1rem 20px"
                            color="white"
                            borderRadius="10px 10px 0 0"
                            fontWeight="600"
                            fontSize="16px"
                            bg="blackAlpha.300"
                        >
                            Description
                        </Box>

                        <AccordionCard
                            marginTop="0"
                            hideRadius={true}
                            icon={<CgTag color="blackAlpha.600" />}
                            title="Properties"
                        >
                            <Grid templateColumns="repeat(3,1fr)" gridGap="7px">
                                {PROPERTIES.map((item, i) => (
                                    <ItemPropCard key={i} {...item} />
                                ))}
                            </Grid>
                        </AccordionCard>
                        <AccordionCard
                            marginTop="0"
                            hideRadius={true}
                            icon={<BiDetail color="blackAlpha.600" />}
                            title="Details"
                        >
                            <Box p="0 10px">
                                {DETAILS.map((item, i) => (
                                    <DetailItem {...item} key={i} />
                                ))}
                            </Box>
                        </AccordionCard>
                    </Box>
                </Box>
            </Flex>
        </>
    );
};

export default Asset;
