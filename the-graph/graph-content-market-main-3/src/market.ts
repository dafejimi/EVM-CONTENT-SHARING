import { Address, Bytes } from "@graphprotocol/graph-ts"
import {
  ItemBought as ItemBoughtEvent,
  ItemPosted as ItemPostedEvent,
  WinnerPicked as WinnerPickedEvent
} from "../generated/Market/Market"
import { ItemBought, ItemPosted, WinnerPicked } from "../generated/schema"

export function handleItemBought(event: ItemBoughtEvent): void {
  let itemBought = ItemBought.load(getIdFromEventParams(event.params.buyer, event.params.author, event.params.title));
  if(!itemBought) {
    itemBought = new ItemBought(getIdFromEventParams(event.params.buyer, event.params.author, event.params.title));
  }
  itemBought.title = changetype<string>(event.params.title);
  itemBought.author = changetype<string>(event.params.author);
  itemBought.buyer = event.params.buyer;

  itemBought.save();
}

export function handleItemPosted(event: ItemPostedEvent): void {
  let itemPosted = ItemPosted.load(getIdFromEventParams(event.params.owner, event.params.author, event.params.title));
  if(!itemPosted) {
    itemPosted = new ItemPosted(getIdFromEventParams(event.params.owner,  event.params.author, event.params.title));
  }

  itemPosted.owner = event.params.owner;
  itemPosted.author = changetype<string>(event.params.author);
  itemPosted.title = changetype<string>(event.params.title);
  itemPosted.description = event.params.description;
  itemPosted.fileType = event.params.fileType;
  itemPosted.ipfsLink = event.params.ipfsLink;
  itemPosted.price = event.params.price;

  itemPosted.save();
  
}

export function handleWinnerPicked(event: WinnerPickedEvent): void {
  let winnerPicked = WinnerPicked.load(getIdFromWinnerEventParams(event.params.recentWinner));
  if(!winnerPicked) {
    winnerPicked = new WinnerPicked(getIdFromWinnerEventParams(event.params.recentWinner));
  }

  winnerPicked.recentWinner = event.params.recentWinner;

  winnerPicked.save();
}

function getIdFromEventParams(ownerAddress: Address, author: Bytes, title: Bytes): string {
  return ownerAddress.toHexString() + author.toHexString() + title.toHexString();
}

function getIdFromWinnerEventParams(winnerAddress: Address): string {
  return winnerAddress.toHexString();
}
