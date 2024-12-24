// Chainable options are commonly used in Javascript. But when we switch to TypeScript, can you properly type it?
// In this challenge, you need to type an object or a class - whatever you like - to provide two function option(key, value) and get(). In option, you can extend the current config type by the given key and value. We should about to access the final result via get.
// For example
// 定义一个类型，用于存储选项配置
type Chainable<T = {}> = {
  // option 方法：接收一个键和一个值，返回新的 Chainable 类型
  // 这里的 K extends string 表示键必须是字符串
  // V 可以是任何类型
  // & {} 是为了触发类型推断
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<T & { [P in K]: V }>;

  // get 方法：返回当前累积的所有配置
  get(): T;
};
declare const config: Chainable
const result = config
              .option('foo', 123)
              .option('name', 'type-challenges')
              .option('bar', { value: 'Hello World' })
              .get()
// expect the type of result to be:interface Result {foo: numbername: stringbar: {value: string}}You don't need to write any js/ts logic to handle the problem - just in type level.
// You can assume that key only accepts string and the value can be anything - just leave it as-is. Same key won't be passed twice.