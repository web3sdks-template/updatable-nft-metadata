import { Web3sdksSDK } from "@web3sdks/sdk";
import { config } from "dotenv";

config();

const sdk = Web3sdksSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");

const addNFTs = async () => {
  const drop = await sdk.getContract(
    "0x40739224a8818C381acaeAe2c620eeD84fEd35F2",
    "nft-drop"
  );

  try {
    await drop.createBatch([
      "https://my-json-server.typicode.com/web3sdks/updatable-nft-metadata/nfts/0",
      "https://my-json-server.typicode.com/web3sdks/updatable-nft-metadata/nfts/1",
    ]);
    console.log("uploaded all nfts");
  } catch (error) {
    console.log(error);
  }
};

addNFTs();
