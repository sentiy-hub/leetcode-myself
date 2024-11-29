// // 实现自定义的 ReturnType 工具类型
// // type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer P ? P : never;

// // 测试函数1：返回联合类型
// const fn1 = (v: boolean) => {
//     if (v)
//         return 1;
//     else
//         return 2;
// };

// type Result1 = MyReturnType<typeof fn1>;

// // 测试函数2：返回字符串
// const fn2 = () => "hello";
// type Result2 = MyReturnType<typeof fn2>;

// // 测试函数3：返回对象
// const fn3 = () => ({ x: 10, y: "hello" });
// type Result3 = MyReturnType<typeof fn3>;

// // 打印测试结果
// console.log("测试函数1的返回值:");
// console.log(fn1(true));   // 打印 1
// console.log(fn1(false));  // 打印 2

// console.log("\n测试函数2的返回值:");
// console.log(fn2());       // 打印 "hello"

// console.log("\n测试函数3的返回值:");
// console.log(fn3());       // 打印 { x: 10, y: "hello" }

// // 使用类型标注来显示推断的类型
// const test1: Result1 = fn1(true); // 类型为 1 | 2
// const test2: Result2 = fn2();     // 类型为 string
// const test3: Result3 = fn3();     // 类型为 { x: number; y: string }

// // 通过运行时打印类型信息
// console.log("\n类型信息:");
// console.log("test1 的值:", test1, "类型:", typeof test1);
// console.log("test2 的值:", test2, "类型:", typeof test2);
// console.log("test3 的值:", test3, "类型:", typeof test3);


// Implement the built -in ReturnType < T > generic without using it.
//   For example

const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer P ? P : never;

type a = MyReturnType<typeof fn> // should be "1 | 2"