// https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#unions

// 联合类型（可以当做枚举类型使用），也能直接将一个字符串作为一种类型
export type MyUnionType = 'title' | 'completed' | 'invalid'
const a: MyUnionType = 'title'

// 从对象类型中keyof操作也能得到联合类型，具体见keyof文件


// 从联合类型中取值 in
type MyObjectOfMyUnionType = {
  [key in MyUnionType]: string
}
const b: MyObjectOfMyUnionType = {
  title: '1',
  completed: '2',
  invalid: '3'
}


// 联合或
type MyUnionOr = string | undefined
const c: MyUnionOr = '2'

// 联合与，将两种类型进行合并
type MyUnionAnd = { a: string } & { b: boolean }
const d: MyUnionAnd = {
  a: '1',
  b: true,
}
// 如果两种类型冲突的话，好像两种类型都没法通过类型检测
type ConflictMyUnionType = string & { a: boolean }
// const e: ConflictMyUnionType = 'string'
// const e: ConflictMyUnionType = {
//   a: true
// }


