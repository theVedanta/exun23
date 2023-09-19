import { Box, Text } from "@chakra-ui/react";

const ItemPropCard = ({ title, value, trait, icon }) => {
	return (
		<>
			<Box
				// border="1px solid rgba(250,126,255, 0.5)"
				bg="#805ad54d"
				p="10px"
				display="flex"
				flexDirection="column"
				alignItems="center"
				borderRadius="10px"
				pt="1rem"
			>
				{icon}
				<Text
					textTransform="uppercase"
					color="purple.200"
					fontSize="13px"
					fontWeight="500"
					mt="10px"
				>
					{title}
				</Text>
				<Text fontSize="16px" fontWeight="600" m="5px 0">
					{value}
				</Text>
				<Text fontSize="13px">{trait}</Text>
			</Box>
		</>
	);
};

export default ItemPropCard;
