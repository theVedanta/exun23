import {
    MdOutlineColorLens,
    MdOutlineFaceRetouchingNatural,
} from "react-icons/md";
import { GiCrystalEarrings, GiCaptainHatProfile } from "react-icons/gi";
import { AiOutlineEye } from "react-icons/ai";

const PROPERTIES = [
    {
        id: 1,
        title: "BACKGROUND",
        value: "Gray",
        trait: "12% have this trait",
        icon: <MdOutlineColorLens fontSize="40px" />,
    },
    {
        id: 2,
        title: "EARRING",
        value: "Silver",
        trait: "9% have this trait",
        icon: <GiCrystalEarrings fontSize="40px" />,
    },
    {
        id: 3,
        title: "EYES",
        value: "Closed",
        trait: "7% have this trait",
        icon: <AiOutlineEye fontSize="40px" />,
    },
    {
        id: 4,
        title: "FUR",
        value: "Cream",
        trait: "6% have this trait",
        icon: <MdOutlineFaceRetouchingNatural fontSize="40px" />,
    },
    {
        id: 5,
        title: "HAT",
        value: "Captain's Hat",
        trait: "12% have this trait",
        icon: <GiCaptainHatProfile fontSize="40px" />,
    },
    {
        id: 6,
        title: "MOUTH",
        value: "Bored Unshaven",
        trait: "16% have this trait",
        icon: <MdOutlineFaceRetouchingNatural fontSize="40px" />,
    },
];
const ITEMS = [
    {
        id: 1,
        name: "Futura",
        rank: "6,801",
        price: "0.619",
        usdPrice: "250.00",
        img: "/nfts/1.png",
    },
    {
        id: 2,
        name: "Tennim",
        rank: "6,801",
        price: "0.619",
        usdPrice: "250.00",
        img: "/nfts/2.png",
    },
    {
        id: 3,
        name: "Beanie",
        rank: "6,801",
        price: "0.619",
        usdPrice: "250.00",
        img: "/nfts/3.png",
    },
    {
        id: 4,
        name: "Track 42",
        rank: "6,801",
        price: "0.619",
        usdPrice: "250.00",
        img: "/nfts/4.png",
    },
    {
        id: 5,
        name: "Delago",
        rank: "6,801",
        price: "0.619",
        usdPrice: "250.00",
        img: "/nfts/5.png",
    },
    {
        id: 6,
        name: "Rugg Tugg",
        rank: "6,801",
        price: "0.619",
        usdPrice: "250.00",
        img: "/nfts/6.png",
    },
    {
        id: 7,
        name: "Deez Balls",
        rank: "6,801",
        price: "0.619",
        usdPrice: "250.00",
        img: "/nfts/7.png",
    },
];
const DETAILS = [
    { id: 1, title: "Contract Address", value: "0x9f64...5d88" },
    { id: 2, title: "Token ID", value: "4826" },
    { id: 3, title: "Token Standard", value: "ERC-721" },
    { id: 4, title: "Chain", value: "Ethereum" },
    { id: 5, title: "Creator Id", value: "154532348" },
];

export { DETAILS, ITEMS, PROPERTIES };
