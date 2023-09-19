import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Button,
    Heading,
    useColorModeValue,
    Textarea,
    useToast,
} from "@chakra-ui/react";
import * as IPFS from "ipfs-core";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

const Share = ({ connectedContract, signer }) => {
    const toast = useToast();
    const [pending, setPending] = useState(false);

    // const mintCustom = async () => {
    //     try {
    //         setPending(true);
    //         const ipfs = await IPFS.create();

    //         const file = document.querySelector("input[name='NFT']").files[0];
    //         const uploaded = await ipfs.add(file);

    //         if (uploaded.path) {
    //             const mintedTxn = await connectedContract.mintCustom(
    //                 uploaded.path
    //             );
    //             await mintedTxn.wait();
    //         }

    //         toast({
    //             title: "Transaction completed",
    //             description: "Success. Please wait 1-5 minutes to see changes.",
    //             status: "success",
    //             duration: 5000,
    //             isClosable: true,
    //             position: "bottom-right",
    //         });
    //         setPending(false);
    //     } catch (err) {
    //         setPending(false);
    //         console.log(err);
    //         toast({
    //             title: "Some error occurred",
    //             description: "There was an unexpected server error.",
    //             status: "error",
    //             duration: 5000,
    //             isClosable: true,
    //             position: "bottom-right",
    //         });
    //     }
    // };

    const signMessage = async () => {
        setPending(true);

        const val = document
            .querySelector("input[name='name']")
            .value.toString()
            .trim();
        if (signer) {
            const signature = await signer.signMessage(val);
            const add = ethers.utils.verifyMessage(val, signature);
            const userAdd = await signer.getAddress();

            console.log(add, userAdd);

            setPending(false);
            if (add === userAdd) {
                
            }
        }
    };

    return (
        <Flex
            minH={"85vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} w="40%" py={12} px={6}>
                <Stack align={"left"}>
                    <Heading fontSize={"4xl"}>Mint a new NFT</Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>Image Upload</FormLabel>
                            <Input
                                type="file"
                                name="NFT"
                                id="NFT"
                                accept=".jpg, .jpeg, .png, .svg"
                            />
                        </FormControl>
                        <FormControl id="name">
                            <FormLabel>Post title</FormLabel>
                            <Input type="text" name="name" />
                        </FormControl>
                        <FormControl id="desc">
                            <FormLabel>content</FormLabel>
                            <Textarea
                                type="text"
                                name="link"
                                maxH="20vh"
                                minH="10vh"
                            />
                        </FormControl>
                        <Stack spacing={10}>
                            <Button
                                onClick={signMessage}
                                colorScheme="purple"
                                mt={6}
                                size="lg"
                                isLoading={pending}
                                isDisabled={pending}
                            >
                                Send
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default Share;
