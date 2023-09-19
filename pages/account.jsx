import { Container, Grid, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import NftItem from "../components/NftItem";

const Account = ({ address, cart, setCart }) => {
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        try {
            if (!address) return;

            const getNFTs = async () => {
                const nfts = await axios.get(
                    `https://testnets-api.opensea.io/api/v1/assets?owner=${address}&asset_contract_address=${process.env.NEXT_PUBLIC_CONTRACT_ID}`
                );
                console.log(nfts.data.assets);
                setNfts(nfts.data.assets);
            };

            getNFTs();
        } catch (err) {
            console.log(err);
        }
    }, [address]);

    return (
        <Container maxW="container.xl" mt={16}>
            <Heading textAlign="center" mb={10}>
                Your Account
            </Heading>

            <Grid
                templateColumns="repeat(4, 1fr)"
                gridGap="20px"
                mt="1rem"
                mb="1rem"
            >
                {nfts.map((nft, i) => (
                    <NftItem
                        item={{ img: nft.image_url }}
                        cart={cart}
                        setCart={setCart}
                        key={i}
                        display={true}
                        sale={true}
                    />
                ))}
            </Grid>
        </Container>
    );
};

export default Account;
