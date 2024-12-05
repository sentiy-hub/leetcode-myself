// Implement a generic GetReadonlyKeys<T> that returns a union of the readonly keys of an Object.

// For example 

type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;
  
type GetReadonlyKeys<T> = keyof {
  [K in keyof T as Equal<Pick<T, K>, Readonly<Pick<T, K>>> extends true
  ? K
  : never]: T[K];
};

interface Todo {

  readonly title2: string

  readonly description2: string

  completed: boolean

}

type Keys = GetReadonlyKeys<Todo> // expected to be "title" | "description"

