import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ItemBought,
  ItemPosted,
  WinnerPicked
} from "../generated/Market/Market"

export function createItemBoughtEvent(
  title: string,
  author: string,
  buyer: Address
): ItemBought {
  let itemBoughtEvent = changetype<ItemBought>(newMockEvent())

  itemBoughtEvent.parameters = new Array()

  itemBoughtEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  itemBoughtEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromString(author))
  )
  itemBoughtEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )

  return itemBoughtEvent
}

export function createItemPostedEvent(
  owner: Address,
  author: string,
  title: string,
  description: string,
  fileType: string,
  ipfsLink: string,
  price: BigInt
): ItemPosted {
  let itemPostedEvent = changetype<ItemPosted>(newMockEvent())

  itemPostedEvent.parameters = new Array()

  itemPostedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  itemPostedEvent.parameters.push(
    new ethereum.EventParam("author", ethereum.Value.fromString(author))
  )
  itemPostedEvent.parameters.push(
    new ethereum.EventParam("title", ethereum.Value.fromString(title))
  )
  itemPostedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )
  itemPostedEvent.parameters.push(
    new ethereum.EventParam("fileType", ethereum.Value.fromString(fileType))
  )
  itemPostedEvent.parameters.push(
    new ethereum.EventParam("ipfsLink", ethereum.Value.fromString(ipfsLink))
  )
  itemPostedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return itemPostedEvent
}

export function createWinnerPickedEvent(recentWinner: Address): WinnerPicked {
  let winnerPickedEvent = changetype<WinnerPicked>(newMockEvent())

  winnerPickedEvent.parameters = new Array()

  winnerPickedEvent.parameters.push(
    new ethereum.EventParam(
      "recentWinner",
      ethereum.Value.fromAddress(recentWinner)
    )
  )

  return winnerPickedEvent
}
