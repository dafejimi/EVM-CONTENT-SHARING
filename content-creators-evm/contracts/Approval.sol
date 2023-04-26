// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

error ContentMarket__InsufficientFunds();
error ContentMarket__NotOwner();
        
contract approval {
    address private owner;   
    mapping(address => bool) public subscribersMapping;
    mapping(address => bool) public publishersMapping;
    uint256 private constant i_WEI_AMOUNT_SUB = 1000000000000000 wei;
    uint256 private constant i_WEI_AMOUNT_PUB = 10000000000000000 wei;


    modifier onlyOwner {
        if (msg.sender != owner) revert ContentMarket__NotOwner();
        _;
    }

    constructor() {
        owner = msg.sender
    }

    function subscribeToMarket() public payable {
        if (msg.value < i_WEI_AMOUNT_SUB) {
            revert ContentMarket__InsufficientFunds();
        }
        subscribersMapping[msg.sender] = true;
    }

    function publisherSubscription() public payable {
        if (msg.value < i_WEI_AMOUNT_PUB) {
            revert ContentMarket__InsufficientFunds();
        }
        publishersMapping[msg.sender] = true;
    }

    function withdraw() public payable onlyOwner {
        (bool callSuccess, ) = payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess, "Call failed");
    }

    function getSubscriberStatus() external returns (bool) {
        bool status = subscribersMapping[msg.sender];
        return status;
    }

    function getPublisherStatus() external returns (bool) {
        bool status = publishersMapping[msg.sender];
        return status;
    }
}
