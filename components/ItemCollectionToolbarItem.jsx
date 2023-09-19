import { Button } from "@chakra-ui/react";

const ItemCollectionToolbarItem = ({ style, icon, onClick }) => {
	return (
		<>
			<Button borderRadius="10pc" p="10px" m="0 4px" variant="outline">
				{icon}
			</Button>
		</>
	);
};

export default ItemCollectionToolbarItem;
