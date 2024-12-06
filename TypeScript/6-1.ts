// Implement a generic MyReadonly2<T, K> which takes two type argument T and K.
// K specify the set of properties of T that should set to Readonly. When K is not provided, it should make all properties readonly just like the normal Readonly<T>.
// For example

interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo61: MyReadonly61<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo61.title = "Hello" // Error: cannot reassign a readonly property
todo61.description = "barFoo" // Error: cannot reassign a readonly property
todo61.completed = true // OK

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

// type MyReadonly61<T, key extends keyof T> = Omit<T, key> & Readonly<T>
type MyReadonly61<T, K extends keyof T> = {
  +readonly[P in K]: T[P];
} & {
  [key in keyof T as key extends K ? never : key] : T[key]
}