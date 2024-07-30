export type Reverse<T extends unknown[]> = T extends [...infer U, infer P]
  ? [P, ...Reverse<U>]
  : []
