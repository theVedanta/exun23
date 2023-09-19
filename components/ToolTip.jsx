import { Box, Text } from "@chakra-ui/react";

const ToolTip = ({ children, title }) => {
	return (
		<>
			<Box pos="relative" data-component-name="tooltip" width="auto">
				<Text
					zIndex="100"
					pos="absolute"
					top="50%"
					left="120%"
					width="max-content"
					transform="translateY(-50%)"
					bg="#333"
					fontSize="12.5px"
					p="5px 8px"
					borderRadius="5px"
					transition="all 0.2s"
					opacity="0"
					display="none"
					data-component-name="tooltipTitle"
				>
					{title}
				</Text>
				<Box
					pos="absolute"
					top="50%"
					left="110%"
					transform="translateY(-50%) rotate(45deg)"
					width="15px"
					height="15px"
					bg="#333"
					transition="all 0.2s"
					opacity="0"
					display="none"
					data-component-name="tooltipArrow"
				></Box>
				{children}
			</Box>
		</>
	);
};

export default ToolTip;
