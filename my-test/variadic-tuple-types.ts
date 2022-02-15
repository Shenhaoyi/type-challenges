// 可变元祖：https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types
// ts 4.0 版本支持了泛型的扩展语法（这应该是剩余？）, 例如下面的函数，使用泛型能推断出输入数组的部分成员类型

function tail<T extends any[]>(arr: readonly [any, ...T]) {
  const [first, ...rest] = arr;
  return rest;
}
const tailOfArray = tail([1, 3, 'shen'] as const)
// 插入注意事项：获取函数参数类型不需要使用typeof操作函数的输入参数来获取，直接使用泛型来获取即可


// 下面这种形式，元组的长度不能确定
type Numbers = number[];
type Unbounded = [...Numbers, boolean];


declare function PromiseAll1<T extends any[]>(values: readonly [...T]): 
  ({ [key in keyof T]: key})

const a2324 = PromiseAll1([1, 3, 'string'])


// 数组遍历返回数组，可以直接使用对象的遍历形式！元组的属性有0，1，2，3(length不在其中)


