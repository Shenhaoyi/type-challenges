// 从T中删除K属性
type MyOmit<T extends object, K extends keyof T> = {
  [key in Exclude<keyof T, K>]: T[key]
}

// 解题步骤：
// 返回对象
// 使用exclude泛型工具（联合类型的分配条件类型），过滤联合类型
// 注意类型约束
