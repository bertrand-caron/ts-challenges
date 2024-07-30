export type Parameters<T> = T extends (...args: infer P) => unknown ? P : never
