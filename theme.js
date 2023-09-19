import { extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins";

const config = {
	initialColorMode: "dark",
	useSystemColorMode: false,
};
const theme = extendTheme({
	config,
	fonts: {
		primary: `"Poppins", sans-serif`,
		heading: `"Poppins", sans-serif`,
		body: `"Poppins", sans-serif`,
	},
	styles: {
		global: {
			'[data-component-name="CollectionItem"]:hover [data-component-name="CollectionItemImg"]':
				{
					transform: "scale(1.1)",
				},
			'[data-component-name="CollectionItem"]:hover [data-component-name="CollectionItemEthBtn"]':
				{
					zIndex: "100",
					opacity: "1",
				},
			'[data-component-name="tooltip"]:hover [data-component-name="tooltipTitle"], [data-component-name="tooltip"]:hover [data-component-name="tooltipArrow"]':
				{
					opacity: "1",
					display: "block",
				},
		},
	},
});

export default theme;
