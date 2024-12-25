// Implement the advanced util type UnionToIntersection<U>

// For example

type I = Union2Intersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true

type Union2Intersection<U> = (
  [U] extends [U] 
      ? (arg: U) => void 
      : never
) extends (arg: infer T) => void 
  ? T 
  : never;

  export {}