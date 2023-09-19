import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import MetaBallMarket from "../contracts/MetaBallMarket.json";

function App({ Component, pageProps }) {
    const [address, setAddress] = useState(null);
    const [connectedContract, setConnectedContract] = useState(null);
    const [signer, setSigner] = useState(null);
    const [isOwner, setIsOwner] = useState(false);
    const [saleActive, setSaleActive] = useState(false);
    const [availableTickets, setAvailableTickets] = useState(0);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const localData = window.localStorage.getItem("nft-wallet");
        if (localData) setAddress(localData);
    }, [address]);

    useEffect(() => {
        const getConnectedContract = async () => {
            const { ethereum } = window;
            if (!ethereum) return;

            const provider = new ethers.providers.Web3Provider(ethereum);
            const signerAcquired = provider.getSigner();

            const connectContract = new ethers.Contract(
                process.env.NEXT_PUBLIC_CONTRACT_ID,
                MetaBallMarket.abi,
                signerAcquired
            );

            setConnectedContract(connectContract);
            setSigner(signerAcquired);
        };

        getConnectedContract();
    }, []);

    useEffect(() => {
        const getInfo = async () => {
            if (!address || !connectedContract) {
                setIsOwner(false);
                return;
            }
            const ownerAddress = await connectedContract.owner();
            if (ownerAddress.toLowerCase() === address.toLowerCase()) {
                setIsOwner(true);
            } else setIsOwner(false);

            const isSaleActive = await connectedContract.isSaleActive();
            setSaleActive(isSaleActive);

            const av = await connectedContract.availableTickets();
            setAvailableTickets(av.toNumber());
        };

        getInfo();
    }, [address, connectedContract]);

    return (
        <ChakraProvider theme={theme}>
            <Nav address={address} setAddress={setAddress} />
            <Component
                {...pageProps}
                address={address}
                setAddress={setAddress}
                isOwner={isOwner}
                saleActive={saleActive}
                setSaleActive={setSaleActive}
                connectedContract={connectedContract}
                signer={signer}
                availableTickets={availableTickets}
                cart={cart}
                setCart={setCart}
            />
        </ChakraProvider>
    );
}

export default App;
