// Implement TrimLeft<T> which takes an exact string type and returns a new string with the whitespace beginning removed.

// For example


type trimed = TrimLeft<'  Hello World  '> // expected to be 'Hello World  '

type whitespace = ' ' | '\t' | '\n';

type TrimLeft<S extends string> = S extends `${whitespace}${infer R}`
  ? TrimLeft<R>
  : S;

// ------我是分割线------
// Implement Trim<T> which takes an exact string type and returns a new string with the whitespace from both ends removed.
// For example

type trimmed = Trim<'  Hello World  '> // expected to be 'Hello World'
type Trim<S extends string> = S extends `${whitespace}${infer F}`
  ? Trim<F> : S extends `${infer K}${whitespace}`
  ? Trim<K>
  : S;
export { }