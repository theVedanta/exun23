// deploy/00_deploy_your_contract.js

const { ethers } = require("hardhat");

const localChainId = "31337";

// const sleep = (ms) =>
//   new Promise((r) =>
//     setTimeout(() => {
//       console.log(`waited for ${(ms / 1000).toFixed(3)} seconds`);
//       r();
//     }, ms)
//   );

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = await getChainId();

    await deploy("MetaBallMarket", {
        // Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
        from: deployer,
        // args: [ "Hello", ethers.utils.parseEther("1.5") ],
        log: true,
        waitConfirmations: 5,
    });

    // Getting a previously deployed contract
    const MetaBallMarket = await ethers.getContract("MetaBallMarket", deployer);
    await MetaBallMarket.transferOwnership(
        "0x349FE81F54AA6f7f93A266D54Cc0a96dDAe5589d"
    );
    /*  await MetaBallMarket.setPurpose("Hello");
  
    // To take ownership of MetaBallMarket using the ownable library uncomment next line and add the 
    // address you want to be the owner. 
    
    await MetaBallMarket.transferOwnership(
      "ADDRESS_HERE"
    );

    //const MetaBallMarket = await ethers.getContractAt('MetaBallMarket', "0xaAC799eC2d00C013f1F11c37E654e59B0429DF6A") //<-- if you want to instantiate a version of a contract at a specific address!
  */

    /*
  //If you want to send value to an address from the deployer
  const deployerWallet = ethers.provider.getSigner()
  await deployerWallet.sendTransaction({
    to: "0x34aA3F359A9D614239015126635CE7732c18fDF3",
    value: ethers.utils.parseEther("0.001")
  })
  */

    /*
  //If you want to send some ETH to a contract on deploy (make your constructor payable!)
  const MetaBallMarket = await deploy("MetaBallMarket", [], {
  value: ethers.utils.parseEther("0.05")
  });
  */

    /*
  //If you want to link a library into your contract:
  // reference: https://github.com/austintgriffith/scaffold-eth/blob/using-libraries-example/packages/hardhat/scripts/deploy.js#L19
  const MetaBallMarket = await deploy("MetaBallMarket", [], {}, {
   LibraryName: **LibraryAddress**
  });
  */

    // Verify from the command line by running `yarn verify`

    // You can also Verify your contracts with Etherscan here...
    // You don't want to verify on localhost
    // try {
    //   if (chainId !== localChainId) {
    //     await run("verify:verify", {
    //       address: MetaBallMarket.address,
    //       contract: "contracts/MetaBallMarket.sol:MetaBallMarket",
    //       constructorArguments: [],
    //     });
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
};
module.exports.tags = ["MetaBallMarket"];
