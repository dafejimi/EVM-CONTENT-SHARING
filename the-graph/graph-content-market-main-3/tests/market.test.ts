import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ItemBought } from "../generated/schema"
import { ItemBought as ItemBoughtEvent } from "../generated/Market/Market"
import { handleItemBought } from "../src/market"
import { createItemBoughtEvent } from "./market-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let title = "Example string value"
    let author = "Example string value"
    let buyer = Address.fromString("0x0000000000000000000000000000000000000001")
    let newItemBoughtEvent = createItemBoughtEvent(title, author, buyer)
    handleItemBought(newItemBoughtEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ItemBought created and stored", () => {
    assert.entityCount("ItemBought", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ItemBought",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "title",
      "Example string value"
    )
    assert.fieldEquals(
      "ItemBought",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "author",
      "Example string value"
    )
    assert.fieldEquals(
      "ItemBought",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "buyer",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
