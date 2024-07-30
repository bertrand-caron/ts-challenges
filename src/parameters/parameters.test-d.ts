import { expectType } from "jest-tsd"
import type { Parameters } from "./parameters"

describe("Parameters", () => {
  it("SHOULD return parameters WHEN given a function that takes parameters", () => {
    const X = (x: number, y: boolean, z: string) =>
      `${x}${y === true ? z : "z"}`
    const Y = [1, true, "2"] as Parameters<typeof X>

    expectType<[number, boolean, string]>(Y)
  })
})
