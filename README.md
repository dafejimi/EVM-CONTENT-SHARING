## EVM-CONTENT-SHARING
This Content Sharing project will act as a platform For authors of original content to dsplay and broadcast
their work to a market of commited viewers without fear of piracy. All of this is made possible using IPFS, as its unique content addressing feautures enable access to any file so long as it is hosted and pinned on at least one IPFS node.

---

### Contracts Folder
The contracts are in the content-creatoe-evm folder, The main contract, **Market.sol** encapsulates the functionality that drives the market it includes functions to
..* Subsribe to the Market for Either basic access or publishing access
..* Post a Link to the Market, available to all subscribed publishers
..* Get a link to posted content for a pre-specified fee
..* keeper functions to fulfil incentive schemes
..* Withdraw contract balances available to the contract deployer

### Front End Folder
The front end folder contains all of the logic that interacts with the deployed contracts to provide the user with a seamless operational experience.
