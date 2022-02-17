// 将Fn的入参末尾中添加A
type AppendArgument<Fn extends Function, A> = Fn extends (...args: infer arguments) => (infer ReturnType1)
  ? (...args: [...arguments, A]) => ReturnType1
  : never

type Fn12 = (a: number, b: string, x: boolean) => number
type Fn123 = AppendArgument<Fn12, string> // 这里不能保证函数的入参名称一致，只能保证每个位置上的类型一致

// 解题步骤：
// 通过infer 推断函数各部分 疑问：如何推断函数的入参? 函数的入参...args代表什么？
// 返回函数
// 返回函数的入参处理 疑问：如何确保返回的函数的入参名称与原始的一致？
