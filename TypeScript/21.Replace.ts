// Implement Replace<S, From, To> which replace the string From with To once in the given string S
// For example

type replaced = Replace<'types are fun!', 'fun', 'awesome'> // expected to be 'types are awesome!'

type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${R}`
  : S;

//   这个类型定义是一个字符串替换的工具类型，让我解释下它的工作原理：

// Replace 接收三个泛型参数：

// S: 原始字符串
// From: 要被替换的子字符串
// To: 替换后的子字符串


// 它使用了条件类型（Conditional Types）和推断类型（Infer）来实现字符串替换：

// 首先检查 From 是否为空字符串，如果是则返回原始字符串 S
// 然后使用模板字符串和 infer 来匹配模式：${infer L}${From}${infer R}

// L 代表匹配到的 From 之前的部分
// R 代表匹配到的 From 之后的部分


// 如果匹配成功，返回新的字符串：${L}${To}${R}
// 如果都不匹配，返回原始字符串 S
// ---我是分割线---

// Implement ReplaceAll<S, From, To> which replace the all the substring From with To in the given string S
// For example


type replaced = ReplaceAll<'t y p e s', ' ', ''> // expected to be 'types'

type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ''
  ? S
  : S extends `${infer L}${From}${infer R}`
  ? `${L}${To}${ReplaceAll<R, From, To>}`
  : S;

//   这个类型的实现比之前的 Replace 更强大，它可以替换字符串中所有匹配的子串。让我解释其工作原理：

// 同样接收三个泛型参数：

// S: 源字符串
// From: 要被替换的子串
// To: 替换成的目标子串


// 主要区别在于递归实现：

// 基本判断与 Replace 相同，先检查 From 是否为空字符串
// 使用模板字符串和 infer 解构字符串：${infer L}${From}${infer R}
// 关键在于递归处理剩余部分：${L}${To}${ReplaceAll<R, From, To>}
// 递归会继续处理右侧剩余字符串，直到找不到匹配项

export {}