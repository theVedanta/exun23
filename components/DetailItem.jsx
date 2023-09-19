import { Box, Text } from "@chakra-ui/react";

const DetailItem = ({ title, value }) => {
	return (
		<>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="space-between"
				m="10px 0"
			>
				<Text fontWeight="500" fontSize="15px">
					{title}
				</Text>
				<Text>{value}</Text>
			</Box>
		</>
	);
};

export default DetailItem;
