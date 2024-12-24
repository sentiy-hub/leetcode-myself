// TypeScript 4.0 is recommended in this challenge
// Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.
// For example:

const add = (a: number, b: number) => a + b
const three = add(1, 2)

const curriedAdd = Currying(add)

const five = curriedAdd(2)(3)

// 获取参数类型数组
type Args<T> = T extends (...args: infer A) => any ? A : never;

// 获取返回值类型
type Return<T> = T extends (...args: any[]) => infer R ? R : never;

// 柯里化类型
type Curry<F> = Args<F> extends [infer First, ...infer Rest]
  ? Rest['length'] extends 0
    ? F 
    : (arg: First) => Curry<(...args: Rest) => Return<F>>
  : F;

declare function Currying<T extends Function>(fn: T): Curry<T>;

// The function passed to Currying may have multiple arguments, you need to correctly type it.
// In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.
// function currying(fn, length) {
//   length = length || fn.length;
//   return function (...args) {
//     if (args.length >= length) {
//       return fn.apply(this, args);
//     }
//     return currying(fn.bind(this, ...args), length - args.length);
//   };
// }

