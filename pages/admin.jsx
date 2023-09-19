import {
    Button,
    Container,
    Heading,
    Input,
    Tag,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";

const Admin = ({
    connectedContract,
    saleActive,
    setSaleActive,
    availableTickets,
    isOwner,
}) => {
    const [pending, setPending] = useState(false);
    const toast = useToast();

    const toggleSale = async (act) => {
        try {
            if (!connectedContract) return;

            let saleTxn;
            if (act === "open") {
                setPending("open");
                saleTxn = await connectedContract.openSale();
            } else {
                setPending("close");
                saleTxn = await connectedContract.closeSale();
            }

            await saleTxn.wait();

            setSaleActive(act === "open" ? true : false);
            setPending(false);
            toast({
                title: "Transaction completed",
                description: "Succes. Please wait 1-5 minutes to see changes.",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom-right",
            });
        } catch (err) {
            setPending(false);
            setSaleActive(false);
            toast({
                title: "Some error occurred",
                description: "There was an unexpected server error.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-right",
            });
        }
    };

    const mint = async (e) => {
        try {
            e.preventDefault();

            if (!connectedContract) return;

            setPending(true);
            const value = document.querySelector(
                "#mint-form input[name='eth']"
            ).value;

            const mintedTxn = await connectedContract.mint({
                value: Number(value) * 10 ** 18,
            });

            await mintedTxn.wait();

            toast({
                title: "Transaction completed",
                description: "Success Please wait 1-5 minutes to see changes.",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom-right",
            });
            setPending(false);
        } catch (err) {
            setPending(false);
            console.log(err);
            toast({
                title: "Some error occurred",
                description: "There was an unexpected server error.",
                status: "error",
                duration: 5000,
                isClosable: true,
                position: "bottom-right",
            });
        }
    };

    return (
        <Container maxW="container.xl" mt={16}>
            <form onSubmit={(eve) => mint(eve)} id="mint-form">
                <br />
                <Heading>Minting NFTS</Heading>
                <br />
                <Tag>Total tickets available: {availableTickets}</Tag>
                <br />
                <br />
                <label htmlFor="eth">Enter Value</label>
                <Input
                    placeholder="value (ETH)"
                    name="eth"
                    type="integer"
                    size="lg"
                />
                <br />
                <br />
                <Button
                    isLoading={pending}
                    isDisabled={pending}
                    type="submit"
                    colorScheme="purple"
                    size="lg"
                >
                    Mint
                </Button>
            </form>
            <br />
            <hr />
            <br />
            {isOwner &&
                (saleActive ? (
                    <Button
                        isDisabled={pending !== false}
                        isLoading={pending === "close"}
                        onClick={() => toggleSale("close")}
                        colorScheme="purple"
                        size="lg"
                        variant="outline"
                    >
                        Close Market
                    </Button>
                ) : (
                    <Button
                        isDisabled={pending !== false}
                        isLoading={pending === "open"}
                        onClick={() => toggleSale("open")}
                        mx={2}
                        colorScheme="purple"
                        size="lg"
                    >
                        Open Market
                    </Button>
                ))}
        </Container>
    );
};

export default Admin;
