import { expectType } from "jest-tsd"
import type { LengthOfTuple } from "./length_of_tuple"

describe("LengthOfTuple<>", () => {
  it("SHOULD return 0 WHEN given []", () => {
    const X: [] = []
    const Y: LengthOfTuple<typeof X> = X.length

    expectType<0>(Y)
  })

  it("SHOULD return 1 WHEN given [unknown]", () => {
    const X = ["Hello"] as [unknown]
    const Y: LengthOfTuple<typeof X> = X.length

    expectType<1>(Y)
  })
})
