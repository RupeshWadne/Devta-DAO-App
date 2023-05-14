import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xa6df7673899Cd5E72fdE64db9aF7f6e501476F63", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Lord Ganesha",
        description: "This NFT will give you access to DevtaDAO!",
        image: readFileSync("scripts/assets/ganesha.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
