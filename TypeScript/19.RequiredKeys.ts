// Implement the advanced util type RequiredKeys<T>, which picks all the required keys into a union.
// For example

type Result = RequiredKeys<{ foo: number; bar?: string }>;// expected to be “foo”

type RequiredKeys<T, K = keyof T> = K extends keyof T 
  ? T extends Required<Pick<T, K>> 
    ? K 
    : never
  : never;
// ----我是分割线---
// Implement Capitalize<T> which converts the first letter of a string to uppercase and leave the rest as-is.
// For example

type capitalized = Capitalize<'hello world'> // expected to be 'Hello world'

type Capitalize<S extends string> = S extends `${infer F}${infer R}`
 ? `${Uppercase<F>}${R}`
 : S;
 
export {}