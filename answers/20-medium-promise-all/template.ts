type MyO<T extends any[]> = T['length'] extends 0
  ? []
  : T extends [infer First, ...infer Rest]
  ? [
    First extends Promise<infer Resolve> ? Resolve : First,
    ...MyO<Rest>
  ]
  : never
// declare function PromiseAll(values: any): Promise<MyO<typeof values>>

// 解题步骤1 => 解题步骤2
// 返回Promise<T>
// 获取输入参数类型 typeof => 使用泛型
// 对数组进行遍历： 数组遍历方法，使用递归，这如何递归呢？ => 使用对象的遍历方式
// 获取每个成员 resolve 的类型，普通类型与resolve的情况区分开来，resolve 需要使用infer
// 遍历终止条件： 数组长度为空

declare function PromiseAll<T extends readonly any[]>(values: T): Promise<{
  [key in keyof T]: T[key] extends Promise<infer Resolve> 
    ? Resolve 
    : T[key];
}>
