/**
 * TypeScript 类型体操: 实现内置的 Pick 类型
 * 
 * @template T - 源类型，包含所有属性
 * @template K - 要选择的属性键，必须是T的键
 * 
 * 实现步骤:
 * 1. 使用extends约束K必须是T的键
 * 2. 使用in操作符遍历K中的每个键
 * 3. 使用索引访问获取对应属性的类型
 */
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
}

// 示例接口
interface Todo {
  title: string
  description: string
  completed: boolean
}

// 使用示例：只选择 title 和 completed 属性
type TodoPreview1 = MyPick<Todo, 'title' | 'completed'>

// 验证结果
const todo1: TodoPreview1 = {
  title: 'Clean room',
  completed: false,
}