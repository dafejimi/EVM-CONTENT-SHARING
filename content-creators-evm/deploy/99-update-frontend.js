const { ethers } = require("hardhat");
const fs = require("fs");
const { frontEndAbiFile, frontEndContractsFile } = require("../helper-hardhat-config")

module.exports = async () => {
    if (process.env.UPDATE_FRONT_END) {
        console.log("updating front end...");
        updateContractAddresses();
        updateAbi();
    }
};

async function updateAbi() {
    const market = await ethers.getContract("Market");
    fs.writeFileSync(frontEndAbiFile, market.interface.format(ethers.utils.FormatTypes.json))
    
}

async function updateContractAddresses() {
    const market = await ethers.getContract("Market");
    const chainId = network.config.chainId.toString();
    const currentAddresses = JSON.parse(
        fs.readFileSync(frontEndContractsFile, "utf8")
    );
    if (chainId in currentAddresses) {
        if (!currentAddresses[chainId].includes(market.address)) {
            currentAddresses[chainId].push(market.address);
        }
    } else {
        currentAddresses[chainId] = market.address;
    }
    fs.writeFileSync(
        frontEndContractsFile,
        JSON.stringify(currentAddresses)
    );
}

module.exports.tags = ["all", "frontend"];
