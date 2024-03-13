// 从Promise类型中解析出返回值？
type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer Result>
  ? Result extends Promise<unknown>
    ? MyAwaited<Result>
    : Result
  : never;

// 输入约束
// 使用 infer
// 多条件判断
