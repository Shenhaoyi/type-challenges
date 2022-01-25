// 1、类型约束
// https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
// https://zhuanlan.zhihu.com/p/95828198 参考知乎链接
// 例如下面的函数的传入参数中必须有name字段，其他字段就随意，适合只使用参数中部分字段的场景
function getName<T extends { name: string }>(obj: T): string {
  return obj.name
}

const obj = {
  name: 'shenhaoyi'
}

console.log(getName(obj));
