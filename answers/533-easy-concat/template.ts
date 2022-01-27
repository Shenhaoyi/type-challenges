// 1、数组类型合并
// Spread syntax 展开语法
type Concat<T extends any[], U extends any[]> = [...T, ...U]

// 返回 元组类型
// 分别取到T和U的所有成员
// 如何将这些成员类型组合到一起？

// readonly? 行不通，全部都是字面量类型的时候才行

// 使用联合类型？原始类型会吞掉字面量类型
type Test222<T extends any[], U extends any[]> = T[number] | U[number]
type Test333 = Test222<[string, number, boolean], ['1', 2]>


// 2、对象类型合并
type Concat2<T extends Object, U extends Object> = T & U
type Test444 = Concat2<{a: string}, {b: number}>
const test444: Test444 = {
  a: '1',
  b: 1,
}
