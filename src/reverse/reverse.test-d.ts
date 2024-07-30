import { expectType } from "jest-tsd"
import type { Reverse } from "./reverse"

describe("Reverse<>", () => {
  it("SHOULD return [] WHEN given []", () => {
    const X: [] = []
    const Y = [...X].reverse() as Reverse<typeof X>

    expectType<[]>(Y)
  })

  it("SHOULD return reversed type WHEN given a non-empty array", () => {
    const X = [1, "a", true] as [1, "a", true]
    const Y = [...X].reverse() as Reverse<typeof X>

    expectType<[true, "a", 1]>(Y)
  })
})
