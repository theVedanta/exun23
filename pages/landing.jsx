import { Button, Container, Heading, Text } from "@chakra-ui/react";
import { BsArrowRightShort } from "react-icons/bs";

const landing = () => {
	return (
		<>
			<Container
				maxW="50%"
				display="flex"
				alignItems="center"
				flexDirection="column"
				textAlign="center"
				pt="5rem"
			>
				<Heading fontSize="60px" fontWeight="bold">
					Create accessible React apps with speed
				</Heading>
				<Text fontSize="20px" maxW="90%" mt="2rem">
					Chakra UI is a simple, modular and accessible component
					library that gives you the building blocks you need to build
					your React applications.
				</Text>
				<Button
					mt="1.5rem"
					height="auto"
					p="13px 20px"
					fontWeight="500"
				>
					<span>Get Started</span>
					<BsArrowRightShort fontSize="30px" />
				</Button>
			</Container>
		</>
	);
};

export default landing;
