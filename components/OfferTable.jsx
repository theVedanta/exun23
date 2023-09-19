import {
	Table,
	TableContainer,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";

const OfferTable = () => {
	return (
		<>
			<TableContainer>
				<Table variant="simple" bg="transparent">
					<Thead>
						<Tr>
							<Th
								fontWeight="500"
								fontSize="14px"
								borderBottomColor="whiteAlpha.500"
								color="whiteAlpha.600"
							>
								Price
							</Th>
							<Th
								fontWeight="500"
								fontSize="14px"
								borderBottomColor="whiteAlpha.500"
								color="whiteAlpha.600"
							>
								USD Price
							</Th>
							<Th
								fontWeight="500"
								fontSize="14px"
								borderBottomColor="whiteAlpha.500"
								color="whiteAlpha.600"
							>
								Floor Difference
							</Th>
							<Th
								fontWeight="500"
								fontSize="14px"
								borderBottomColor="whiteAlpha.500"
								color="whiteAlpha.600"
							>
								Expiration
							</Th>
							<Th
								fontWeight="500"
								fontSize="14px"
								borderBottomColor="whiteAlpha.500"
								color="whiteAlpha.600"
							>
								From
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td
								borderBottomColor="whiteAlpha.500"
								fontSize="16px"
								fontWeight="600"
							>
								0.1454 WETH
							</Td>
							<Td
								borderBottomColor="whiteAlpha.500"
								fontSize="16px"
								fontWeight="500"
							>
								$230.72
							</Td>
							<Td
								borderBottomColor="whiteAlpha.500"
								fontSize="16px"
								fontWeight="500"
							>
								14% below
							</Td>
							<Td
								borderBottomColor="whiteAlpha.500"
								fontSize="16px"
								fontWeight="500"
							>
								23 minutes
							</Td>
							<Td
								borderBottomColor="whiteAlpha.500"
								fontSize="16px"
								fontWeight="500"
							>
								40C5B3
							</Td>
						</Tr>
					</Tbody>
				</Table>
			</TableContainer>
		</>
	);
};

export default OfferTable;
