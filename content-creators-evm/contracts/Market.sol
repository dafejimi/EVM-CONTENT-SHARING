// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./Approval.sol";
import "../chainlink/contracts/AutomationCompatible.sol";
import "../chainlink/contracts/VRFConsumerBaseV2.sol";
import "../chainlink/contracts/VRFCoordinatorV2Interface.sol";
import '@openzeppelin/contracts/security/ReentrancyGuard.sol';

error ContentMarket__AlreadyPurchased();
error ContentMarket__NotSubscribed();
error ContentMarket__TransactionFailed();
error ContentMarket__NotOwner();

contract MarketContract is ERC20, ReentrancyGuard, VRFConsumerBaseV2, AutomationCompatibleInterface {

    struct ItemInfo {
        string title;
        string author;
        string description;
        string fileType;
        string link;
        uint256 price;

    }

    struct BoughtItem {
        address buyer
        string author;
        string title;
    }

    event ItemPosted (
        address indexed owner,
        string indexed author,
        string indexed title,
        string description,
        string fileType,
        string ipfsLink,
        uint256 price,
    );

    event ItemBought(
        string indexed title,
        string indexed author,
        address buyer,
    );

    // contract variables
    address public owner;
    Approval public approvalContract;
    mapping(address => mapping(string => ItemInfo)) private Listing;
    mapping(address => BoughtItem) private addressToBoughtItem;

    VRFCoordinatorV2Interface private immutable i_vrfCoordinator;
    bytes32 private immutable i_gasLane;
    uint64 private immutable i_subscriptionId;
    uint32 private immutable i_callbackGasLimit;
    uint32 private constant NUM_WORDS = 2;
    uint16 private constant REQUEST_CONFIRMATIONS = 3;
    address public s_recentWinner;
    address[] private loyalActors;

    IERC20 public marketToken;

    modifier onlyOwner {
        if (msg.sender != owner) revert ContentMarket__NotOwner();
        _;
    }

    modifier subscribersOnly() {
        bool status = approvalContract.getsSubscriberStatus();
        
        if (status != true) {
            revert ContentMarket__NotSubscribed();
        }
        _;
    }
    
    modifier publishersOnly() {
        bool status = approvalContract.getsPublisherStatus();
        
        if (status != true) {
            revert ContentMarket__NotSubscribed();
        }
        _;
    }

    constructor(
        address approvalContractAddress,
        address marketTokenAddress,
        address vrfCoordinatorV2,
        uint64 subscriptionId,
        bytes32 gasLane, // keyHash
        uint32 callbackGasLimit
        ) VRFConsumerBaseV2(vrfCoordinatorV2) 
        {
            owner = msg.sender;
            approvalContract = new Approval(approvalContractAddress);
            marketToken = new IERC20(marketTokenAddress);
            i_vrfCoordinator = VRFCoordinatorV2Interface(vrfCoordinatorV2);
            i_gasLane = gasLane;
            i_subscriptionId = subscriptionId;
            i_callbackGasLimit = callbackGasLimit;
        }

    function postLink(
        string memory author,
        string memory title,
        string memory description,
        string memory fileType,
        string memory ipfsLink,
        uint256 price
    ) public publishersOnly() {
        require(price > 0, 'price must be at least one wei.');
        address seller = msg.sender;
        Listing[seller][author] = ItemInfo(title, author, description, fileType, ipfsLink, price);
        emit ItemPosted(seller, author, title, description, fileType, ipfsLink, price);
    }
        
    function getLink(address seller,string memory author)  public payable subscribersOnly() nonReentrant {
        ItemInfo private memory F_Item = Listing[seller][author];
        uint256 price = F_Item.price;
        string memory author = F_Item.author;
        require(marketToken.transferFrom(msg.sender, address(this), price ),"transfer Failed")
        
        addressToBoughtItem[msg.sender] = BoughtItem(buyer, author,title);
        loyalActors.push(msg.sender)
        
        (bool success, ) = payable(seller).call{value: msg.value}("");
        // verify transaction status
        if(success) {
            emit ItemBought(title, author, sender, false);
        } else { revert ContentMarket__TransactionFailed();}
    }
    
    function checkUpkeep(
        bytes memory /* checkData */
    )
        public
        view
        override
        returns (
            bool upkeepNeeded,
            bytes memory /* performData */
        )
    {
        
        bool upkeepNeeded = loyalActors.length() > 12
        return (upkeepNeeded, "0x0"); // can we comment this out?
    }

    /**
     * @dev Once `checkUpkeep` is returning `true`, this function is called
     * and it kicks off a Chainlink VRF call to get a random winner.
     */
    function performUpkeep(
        bytes calldata /* performData */
    ) external override {
        (bool upkeepNeeded, ) = checkUpkeep("");
        // require(upkeepNeeded, "Upkeep not needed");
        if (upkeepNeeded) {
            uint256 requestId = i_vrfCoordinator.requestRandomWords(
            i_gasLane,
            i_subscriptionId,
            REQUEST_CONFIRMATIONS,
            i_callbackGasLimit,
            NUM_WORDS
        );
        }
        // Quiz... is this redundant?
        emit RequestedRaffleWinner(requestId);
    }

    /**
     * @dev This is the function that Chainlink VRF node
     * calls to send the money to the random winner.
     */
    function fulfillRandomWords(
        uint256, /* requestId */
        uint256[] memory randomWords
    ) internal override {
        // s_players size 10
        // randomNumber 202
        // 202 % 10 ? what's doesn't divide evenly into 202?
        // 20 * 10 = 200
        // 2
        // 202 % 10 = 2
        uint256 indexOfWinner = randomWords[0] % loyalActors.length;
        address payable recentWinner = loyalActors[indexOfWinner];
        s_recentWinner = recentWinner;
        loyalActors = new address payable[](0);
        (bool success, ) = recentWinner.call{value: address(this).balance}("");
        // require(success, "Transfer failed");
        if (!success) {
            revert Raffle__TransferFailed();
        }
        emit WinnerPicked(recentWinner);
    }

    /** Getter Functions */

    function getNumWords() public pure returns (uint256) {
        return NUM_WORDS;
    }

    function getRequestConfirmations() public pure returns (uint256) {
        return REQUEST_CONFIRMATIONS;
    }

    function getRecentWinner() public view returns (address) {
        return s_recentWinner;
    }

    function getPlayer(uint256 index) public view returns (address) {
        return loyalActors[index];
    }

    function getNumberOfPlayers() public view returns (uint256) {
        return loyalActors.length;
    }

    function getLoyalActors() public view returns (address[] memory) {
        return loyalActors;
    }
}



/*
function withdrawPayments (string author, string title) public payable {
    for( uint256 i = 0; i < PostedItem.length; i++ ) {
        if (msg.sender == PostedItem[i].sellerAddress) {
            address to = PostedItem[i].sellerAddress
            uint256 value = PostedItem[i].price * s_quantityBought[BoughtItem(author, title)]
            (bool success, ) = to.call{value: value}("");
            // require(success, "Transfer failed");
                
            if (!success) {
                revert ContentMarket__TransferFailed();
            }  
        }           
    }
*/