// 从Promise类型中解析出返回值？
type MyAwaited<T extends Promise<any>> =
  T extends Promise<infer Type1>
  ? (Type1 extends Promise<infer Type2>
    ? Type2
    : Type1
  )
  : never

// 输入约束
// 使用 infer
// 多条件判断 
