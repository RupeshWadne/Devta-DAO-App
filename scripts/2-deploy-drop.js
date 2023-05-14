import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
    try {
      const editionDropAddress = await sdk.deployer.deployEditionDrop({
        name: "DevtaDAO Membership",
        description: "A DAO for Bhakts of Devtas.",
        // The image that will be held on our NFT! The fun part :).
        image: readFileSync("scripts/assets/shiva.png"),
        primary_sale_recipient: AddressZero,
      });
  
      // this initialization returns the address of our contract
      // we use this to initialize the contract on the thirdweb sdk
      const editionDrop = await sdk.getContract(editionDropAddress, "edition-drop");
  
      // with this, we can get the metadata of our contract
      const metadata = await editionDrop.metadata.get();
  
      console.log(
        "✅ Successfully deployed editionDrop contract, address:",
        editionDropAddress,
      );
      console.log("✅ editionDrop metadata:", metadata);
    } catch (error) {
      console.log("failed to deploy editionDrop contract", error);
    }
  })();

//   0xa6df7673899Cd5E72fdE64db9aF7f6e501476F63