const hre = require("hardhat");

async function main() {
  // Deploy MessageStorage contract
  const MessageStorage = await hre.ethers.getContractFactory("MessageStorage");
  const initialMessage = "Welcome to message smart contract";
  const messageStorageContract = await MessageStorage.deploy(initialMessage);
  
  await messageStorageContract.deployed();

  console.log(
    "MessageStorage contract address:",
    messageStorageContract.address
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // 0xBa2681478Db03ba2b61b1BD1954806E35F31a9F8
  // 
