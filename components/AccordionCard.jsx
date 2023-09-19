import { Box, Button, Link, Text } from "@chakra-ui/react";

const AccordionCard = ({
	children,
	icon,
	title,
	hideRadius,
	marginTop = "1rem",
	showMoreBtn,
	showBorder,
}) => {
	return (
		<>
			<Box mt={marginTop}>
				<Box
					borderRadius={hideRadius ? "none" : "10px 10px 0 0"}
					borderBottom="1px solid rgba(255,255,255,0.1)"
					p="15px 20px"
					display="flex"
					alignItems="center"
					justifyContent="space-between"
					border={showBorder && "1px solid rgba(255,255,255,0.1)"}
					color="whiteAlpha"
				>
					<Box display="flex" alignItems="center">
						{icon}
						<Text
							fontSize="17px"
							fontWeight="600"
							fontFamily="primary"
							ml="10px"
							color="whiteAlpha"
						>
							{title}
						</Text>
					</Box>
					{showMoreBtn && (
						<Link
							fontWeight="500"
							color="purple.500"
							fontSize="13px"
							p="0"
							textDecor="underline"
							height="auto"
						>
							Show More
						</Link>
					)}
				</Box>
				<Box p="1rem" bg="whiteAlpha.50" borderRadius="0 0 10px 10px">
					{children}
				</Box>
			</Box>
		</>
	);
};

export default AccordionCard;
