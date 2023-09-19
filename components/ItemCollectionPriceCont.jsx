import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { HiTag } from "react-icons/hi";
import { BsCart2 } from "react-icons/bs";

const ItemCollectionPriceCont = () => {
	return (
		<>
			<Box
				borderRadius="10px"
				boxShadow="0 0 5px rgba(0,0,0,0.1)"
				mt="1rem"
			>
				<Box
					// borderBottom="1px solid rgba(255,255,255,0.1)"
					bg="whiteAlpha.50"
					p="1rem"
					borderRadius="10px 10px 0 0"
					color="white"
				>
					Sale ends November 8, 2022 at 1:15am GMT+5:30
				</Box>
				<Box bg="whiteAlpha.50" p="1rem" borderRadius="0 0 10px 10px">
					<Text
						fontSize="15px"
						fontWeight="500"
						color="whiteAlpha.600"
					>
						Current Price
					</Text>
					<Box display="flex" alignItems="flex-end">
						<Heading fontSize="29px" mt="5px">
							0.1685 ETH
						</Heading>
						<Text
							ml="5px"
							mb="2px"
							fontSize="16px"
							fontWeight="600"
							color="whiteAlpha.700"
						>
							$266.60
						</Text>
					</Box>
					<Box display="flex" alignItems="center" mt="1rem">
						<Button
							display="flex"
							alignItems="flex-end"
							height="auto"
							p="17px 0"
							flex="1"
							mr="5px"
							fontWeight="600"
							borderRadius="10px"
							fontSize="15px"
							border="2px"
							colorScheme="purple"
						>
							<BsCart2
								fontSize="22px"
								style={{ marginRight: "7px" }}
							/>
							<span>Add to cart</span>
						</Button>
						<Button
							display="flex"
							alignItems="flex-end"
							height="auto"
							p="17px 0"
							flex="1"
							mr="5px"
							fontWeight="600"
							borderRadius="10px"
							fontSize="15px"
							variant="outline"
						>
							<HiTag
								fontSize="22px"
								style={{ marginRight: "7px" }}
							/>{" "}
							Make Offer
						</Button>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default ItemCollectionPriceCont;
