//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "./Base64.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MetaBallMarket is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private currentId;

    mapping(string => string) public imgs;

    bool public isSaleActive = true;
    uint256 public totalTickets = 8;
    uint256 public availableTickets = 8;
    uint256 public mintPrice = 80000000000000;

    constructor() ERC721("Metaballism", "MTBP") {
        currentId.increment();

        imgs["1"] = "QmPfaKuRcFVbdNWvyS74DXtidkxrFkSYRn2BfaYZtSaFnE";
        imgs["2"] = "QmbpQ96jT1rsPkNy62kVTZo2Vw7WF6UPyLP68DXWeYPXMj";
        imgs["3"] = "QmRfz8k8kpMRq32pPmf1jQJFGFGr2tc9xqfdYA8f7FuXZj";
        imgs["4"] = "QmQrdY86mSVCtmL9zt7pkYm2UsbQQALMfBLS9fwSUm9WPS";
        imgs["5"] = "QmPfaKuRcFVbdNWvyS74DXtidkxrFkSYRn2BfaYZtSaFnE";
        imgs["6"] = "QmbpQ96jT1rsPkNy62kVTZo2Vw7WF6UPyLP68DXWeYPXMj";
        imgs["7"] = "QmRfz8k8kpMRq32pPmf1jQJFGFGr2tc9xqfdYA8f7FuXZj";
        imgs["8"] = "QmQrdY86mSVCtmL9zt7pkYm2UsbQQALMfBLS9fwSUm9WPS";
    }

    function mint() public payable {
        require(availableTickets > 0, "Not enough tickets");
        require(msg.value >= mintPrice, "Not enough ETH");
        require(isSaleActive, "Sorry, too late lol");

        string memory json = Base64.encode(bytes(string(abi.encodePacked(
            '{ "name": "MTBP #',
            Strings.toString(currentId.current()),
            '", "id": ', Strings.toString(currentId.current()), ', "description": "NFT Marketplace for Metaballism project", ', 
            '"traits": [{ "trait_type": "fast", "value": "true" }, { "trait_type": "Purchased", "value": "true" }], ',
            '"image": "ipfs://', imgs[Strings.toString(currentId.current())], '" }'
        ))));

        string memory tokenURI = string(abi.encodePacked("data:application/json;base64,", json));

        console.log(tokenURI);

        _safeMint(msg.sender, currentId.current());
        _setTokenURI(currentId.current(), tokenURI);

        currentId.increment();
        availableTickets -= 1;
    }
    
    function mintCustom(string memory imgURI) public {
        require(isSaleActive, "Sorry, too late lol");

        string memory json = Base64.encode(bytes(string(abi.encodePacked(
            '{ "name": "MTBP #',
            Strings.toString(currentId.current()),
            '", "id": ', Strings.toString(currentId.current()), ', "description": "NFT Marketplace for Metaballism project", ', 
            '"traits": [{ "trait_type": "fast", "value": "true" }, { "trait_type": "Purchased", "value": "true" }], ',
            '"image": "ipfs://', imgURI, '" }'
        ))));

        string memory tokenURI = string(abi.encodePacked("data:application/json;base64,", json));

        console.log(tokenURI);

        _safeMint(msg.sender, currentId.current());
        _setTokenURI(currentId.current(), tokenURI);

        currentId.increment();
    }

    function availableTicketCount() public view returns(uint256) {
        return availableTickets;
    }
    function totalTicketCount() public view returns(uint256) {
        return totalTickets;
    }

    function openSale() public onlyOwner {
        isSaleActive = true;
    }
    function closeSale() public onlyOwner {
        isSaleActive = false;
    }
}